#!/bin/bash
# Auth Autofill - Samsung Internet Extension Build Script
# Usage:
#   bash build.sh                    # debug APK
#   bash build.sh --release          # release APK (릴리스 서명)
#   bash build.sh --aab              # debug APK + AAB
#   bash build.sh --release --aab    # release APK + AAB
#   bash build.sh --install          # APK + 기기 설치
#   bash build.sh --release --aab --install
#   bash build.sh --upload --aab    # Google Play 업로드용 (업로드 키 서명)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ANDROID_SDK="$HOME/AppData/Local/Android/Sdk"
BUILD_TOOLS="$ANDROID_SDK/build-tools/34.0.0"
ZIPALIGN="$BUILD_TOOLS/zipalign.exe"
APKSIGNER="$BUILD_TOOLS/apksigner.bat"
AAPT2="$BUILD_TOOLS/aapt2.exe"

cd "$SCRIPT_DIR"
mkdir -p build

# Signing config (passwords from environment variables or .env file)
if [ -f .env ]; then
    source .env
fi

if [[ "$*" == *"--upload"* ]]; then
    KS="upload-key.jks"
    KS_ALIAS="upload"
    KS_PASS="${UPLOAD_KEY_PASS:?Error: UPLOAD_KEY_PASS not set. Set it in .env or environment variable.}"
    echo "=== Upload build (Google Play) ==="
elif [[ "$*" == *"--release"* ]]; then
    KS="release-key.jks"
    KS_ALIAS="release"
    KS_PASS="${RELEASE_KEY_PASS:?Error: RELEASE_KEY_PASS not set. Set it in .env or environment variable.}"
    echo "=== Release build ==="
else
    KS="debug-key.jks"
    KS_ALIAS="debugkey"
    KS_PASS="${DEBUG_KEY_PASS:-android}"
    echo "=== Debug build ==="
fi

# Step 1: Build APK with apktool
echo "=== Building APK ==="
java -jar apktool.jar b . -o build/unsigned.apk || exit 1

echo "=== Aligning ==="
"$ZIPALIGN" -f -p 4 build/unsigned.apk build/aligned.apk || exit 1

echo "=== Signing APK ==="
"$APKSIGNER" sign --ks "$KS" --ks-key-alias "$KS_ALIAS" \
    --ks-pass "pass:$KS_PASS" --key-pass "pass:$KS_PASS" \
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
    rm -f build/AuthAutoFill-samsung.aab
    java -jar bundletool.jar build-bundle \
        --modules=build/base_module.zip \
        --output=build/AuthAutoFill-samsung.aab || exit 1

    # Sign AAB
    jarsigner -keystore "$KS" -storepass "$KS_PASS" -keypass "$KS_PASS" \
        build/AuthAutoFill-samsung.aab "$KS_ALIAS" 2>/dev/null

    rm -f build/base_proto.zip build/base_module.zip
    echo "=== Done: build/AuthAutoFill-samsung.aab ==="
fi

# Step 3: Install (optional)
if [[ "$*" == *"--install"* ]]; then
    echo "=== Installing ==="
    adb install -r build/AuthAutoFill-samsung.apk
fi
