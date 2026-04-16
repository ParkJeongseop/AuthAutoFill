import zipfile, os, shutil, sys

build_dir = 'build'
proto_apk = os.path.join(build_dir, 'base_proto.zip')
module_dir = os.path.join(build_dir, 'module_base')
module_zip = os.path.join(build_dir, 'base_module.zip')

# Clean
if os.path.exists(module_dir):
    shutil.rmtree(module_dir)
os.makedirs(module_dir)

# Extract proto APK and reorganize for bundletool
with zipfile.ZipFile(proto_apk, 'r') as zin:
    for item in zin.infolist():
        data = zin.read(item.filename)
        name = item.filename

        # Remap paths for AAB module structure
        if name == 'AndroidManifest.xml':
            out_path = 'manifest/AndroidManifest.xml'
        elif name.startswith('res/'):
            out_path = name  # keep as-is
        elif name == 'classes.dex':
            out_path = 'dex/classes.dex'
        elif name == 'resources.pb':
            out_path = 'resources.pb'
        elif name.startswith('assets/'):
            out_path = name  # keep as-is
        elif name.startswith('META-INF/'):
            continue  # skip signatures
        else:
            out_path = 'root/' + name

        full_path = os.path.join(module_dir, out_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, 'wb') as f:
            f.write(data)

# Create module zip
with zipfile.ZipFile(module_zip, 'w', zipfile.ZIP_DEFLATED) as zout:
    for root, dirs, files in os.walk(module_dir):
        for f in files:
            full = os.path.join(root, f)
            arcname = os.path.relpath(full, module_dir)
            zout.write(full, arcname)

print(f'Module zip created: {os.path.getsize(module_zip)} bytes')
shutil.rmtree(module_dir)
