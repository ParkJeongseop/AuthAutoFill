# Auth Autofill - Samsung Internet Extension

삼성 인터넷 브라우저용 Auth Autofill 확장프로그램 패키지입니다.

## 프로젝트 구조

```
samsung/
├── AndroidManifest.xml    # 앱 설정 (패키지명, 권한, extension-id 등)
├── apktool.yml            # 빌드 설정 (버전 정보)
├── assets/
│   └── src-manifest2.crx  # 확장프로그램 본체 (CRX 파일)
├── res/                   # 리소스 (아이콘, 문자열 등)
├── smali/                 # 삼성 Internet Extension SDK 바이트코드
├── build.sh               # 빌드 스크립트
├── build_aab.py           # AAB 빌드 헬퍼
├── apktool.jar            # APK 빌드 도구 (gitignore)
├── bundletool.jar          # AAB 빌드 도구 (gitignore)
├── debug-key.jks          # 디버그 서명 키 (gitignore)
├── release-key.jks        # 릴리스 서명 키 (gitignore)
├── upload-key.jks         # Google Play 업로드 키 (gitignore)
└── build/                 # 빌드 출력 (gitignore)
```

## 사전 준비

### 필수 설치
- Java (JDK 17 이상)
- Android SDK (build-tools 34.0.0)
- Python 3
- ADB (기기 설치 시)

### 빌드 도구 다운로드
git에 포함되지 않는 파일들을 직접 다운로드해야 합니다.

- **apktool.jar**: https://github.com/iBotPeaches/Apktool/releases
- **bundletool.jar** (AAB 빌드 시): https://github.com/google/bundletool/releases

다운로드 후 `samsung/` 폴더에 넣어주세요.

### 서명 키 생성
처음 세팅할 때 서명 키를 생성해야 합니다.

```bash
# 디버그 키
keytool -genkeypair -v -keystore debug-key.jks -alias debugkey \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -storepass android -keypass android \
  -dname "CN=Debug,O=Debug,C=US"

# 릴리스 키 (Galaxy Store, One Store 등)
keytool -genkeypair -v -keystore release-key.jks -alias release \
  -keyalg RSA -keysize 2048 -validity 36500 \
  -storepass <비밀번호> -keypass <비밀번호> \
  -dname "CN=이름, O=조직, L=도시, C=KR"

# 업로드 키 (Google Play 전용)
keytool -genkeypair -v -keystore upload-key.jks -alias upload \
  -keyalg RSA -keysize 2048 -validity 36500 \
  -storepass <비밀번호> -keypass <비밀번호> \
  -dname "CN=이름, O=조직, L=도시, C=KR"
```

## 빌드

```bash
cd samsung

# 디버그 빌드 (APK)
bash build.sh

# 릴리스 빌드 (APK) - Galaxy Store, One Store 배포용
bash build.sh --release

# 릴리스 빌드 (APK + AAB)
bash build.sh --release --aab

# Google Play 업로드 빌드 (APK + AAB)
bash build.sh --upload --aab

# 빌드 + 기기 설치
bash build.sh --install
bash build.sh --release --install
```

### 빌드 옵션

| 옵션 | 설명 |
|------|------|
| (없음) | 디버그 키로 APK 빌드 |
| `--release` | 릴리스 키로 서명 (Galaxy Store, One Store 등) |
| `--upload` | 업로드 키로 서명 (Google Play) |
| `--aab` | AAB 파일 추가 빌드 |
| `--install` | 빌드 후 연결된 기기에 설치 |

옵션은 조합 가능합니다. 예: `bash build.sh --release --aab --install`

### 빌드 출력

```
build/
├── AuthAutoFill-samsung.apk    # APK 파일
└── AuthAutoFill-samsung.aab    # AAB 파일 (--aab 사용 시)
```

## 서명 키 용도

| 키 | 용도 | 비고 |
|----|------|------|
| `debug-key.jks` | 개발/테스트 | 기기에서 테스트할 때 사용 |
| `release-key.jks` | 스토어 배포 | Galaxy Store, One Store 등. 분실 시 앱 업데이트 불가 |
| `upload-key.jks` | Google Play 업로드 | 분실 시 Google에 재설정 요청 가능 |

> **주의**: `release-key.jks`는 반드시 안전한 곳에 백업하세요. 분실하면 앱 업데이트가 영원히 불가능합니다.

## 확장프로그램 업데이트

확장프로그램 코드를 수정한 경우:

1. 새 CRX 파일을 빌드
2. `assets/src-manifest2.crx`를 교체
3. `apktool.yml`에서 `versionCode`와 `versionName` 업데이트
4. 빌드 스크립트 실행

## 앱 정보 수정

### 앱 이름 변경
- 기본(영어): `res/values/strings.xml` → `app_name`
- 한국어: `res/values-ko/strings.xml` → `app_name`

### 아이콘 변경
- `res/mipmap-xxhdpi/ic_launcher.png` 교체

### 패키지명 변경
- `AndroidManifest.xml`의 `package` 속성 및 `authorities` 값 변경

### 버전 변경
- `apktool.yml`의 `versionCode`와 `versionName` 변경
