#!/bin/bash

# Chromium 계열
cp manifest_chromium.json manifest.json
zip -r Chromium.zip _locales/* autofill.js icon.png manifest.json popup.html script.js style.css
rm manifest.json

# Firefox 계열
cp manifest_firefox.json manifest.json
zip -r Firefox.zip _locales/* autofill.js icon.png manifest.json popup.html script.js style.css
rm manifest.json

echo "Done"