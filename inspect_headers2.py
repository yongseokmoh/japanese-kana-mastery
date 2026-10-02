import glob, re
for f in glob.glob('*.html'):
    if 'temp' in f: continue
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    controls = re.search(r'<div class="controls"(.*?)</div>\s*<div class="(?:container|dashboard-container|quiz-container)', content, re.DOTALL)
    if not controls:
        print(f"Failed to match {f}")
    else:
        h1 = re.search(r'<h1.*?>(.*?)</h1>', controls.group(0))
        toggles = re.findall(r'<div class="toggle-btn".*?>(.*?)</div>', controls.group(0), re.DOTALL)
        print(f"{f}: H1: {h1.group(1) if h1 else 'None'} | Toggles: {len(toggles)}")
