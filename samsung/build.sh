#!/bin/bash
# Auth Autofill - Samsung Internet Extension Build Script

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ANDROID_SDK="$HOME/AppData/Local/Android/Sdk"
BUILD_TOOLS="$ANDROID_SDK/build-tools/34.0.0"
ZIPALIGN="$BUILD_TOOLS/zipalign.exe"
APKSIGNER="$BUILD_TOOLS/apksigner.bat"

cd "$SCRIPT_DIR"

echo "=== Building APK ==="
java -jar apktool.jar b . -o build/unsigned.apk || exit 1

echo "=== Aligning ==="
"$ZIPALIGN" -f -p 4 build/unsigned.apk build/aligned.apk || exit 1

echo "=== Signing ==="
"$APKSIGNER" sign --ks debug-key.jks --ks-key-alias debugkey --ks-pass pass:android --key-pass pass:android --out build/AuthAutoFill-samsung.apk build/aligned.apk || exit 1

rm -f build/unsigned.apk build/aligned.apk

echo "=== Done: build/AuthAutoFill-samsung.apk ==="

if [ "$1" = "--install" ]; then
    echo "=== Installing ==="
    adb install -r build/AuthAutoFill-samsung.apk
fi
