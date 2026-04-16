#!/bin/bash
# Auth Autofill - Samsung Internet Extension Build Script
# Usage:
#   bash build.sh              # APK only
#   bash build.sh --aab        # APK + AAB
#   bash build.sh --install    # APK + install to device
#   bash build.sh --aab --install

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ANDROID_SDK="$HOME/AppData/Local/Android/Sdk"
BUILD_TOOLS="$ANDROID_SDK/build-tools/34.0.0"
ZIPALIGN="$BUILD_TOOLS/zipalign.exe"
APKSIGNER="$BUILD_TOOLS/apksigner.bat"
AAPT2="$BUILD_TOOLS/aapt2.exe"

cd "$SCRIPT_DIR"
mkdir -p build

# Step 1: Build APK with apktool
echo "=== Building APK ==="
java -jar apktool.jar b . -o build/unsigned.apk || exit 1

echo "=== Aligning ==="
"$ZIPALIGN" -f -p 4 build/unsigned.apk build/aligned.apk || exit 1

echo "=== Signing APK ==="
"$APKSIGNER" sign --ks debug-key.jks --ks-key-alias debugkey \
    --ks-pass pass:android --key-pass pass:android \
    --out build/AuthAutoFill-samsung.apk build/aligned.apk || exit 1

rm -f build/unsigned.apk build/aligned.apk
echo "=== Done: build/AuthAutoFill-samsung.apk ==="

# Step 2: Build AAB (optional)
if [[ "$*" == *"--aab"* ]]; then
    echo "=== Building AAB ==="

    # Convert APK to proto format
    "$AAPT2" convert build/AuthAutoFill-samsung.apk \
        -o build/base_proto.zip --output-format proto || exit 1

    # Reorganize into AAB module structure
    python build_aab.py || exit 1

    # Bundle
    java -jar bundletool.jar build-bundle \
        --modules=build/base_module.zip \
        --output=build/AuthAutoFill-samsung.aab || exit 1

    # Sign AAB
    jarsigner -keystore debug-key.jks -storepass android -keypass android \
        build/AuthAutoFill-samsung.aab debugkey 2>/dev/null

    rm -f build/base_proto.zip build/base_module.zip
    echo "=== Done: build/AuthAutoFill-samsung.aab ==="
fi

# Step 3: Install (optional)
if [[ "$*" == *"--install"* ]]; then
    echo "=== Installing ==="
    adb install -r build/AuthAutoFill-samsung.apk
fi
