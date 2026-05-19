#!/bin/bash
set -euo pipefail

# 배포 패키지 생성
# manifest.json은 Chromium/Firefox 공용 단일 파일이므로 패키지도 하나로 충분합니다.
# (Chrome은 Firefox 전용 키 browser_specific_settings/developer를 무시함)

FILES=(_locales autofill.js icon.png manifest.json popup.html script.js style.css)

rm -f AuthAutoFill.zip
zip -r AuthAutoFill.zip "${FILES[@]}"

echo "Done: AuthAutoFill.zip"
