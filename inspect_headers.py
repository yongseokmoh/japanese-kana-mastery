import glob, re
for f in glob.glob('*.html'):
    if 'temp' in f: continue
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    m = re.search(r'<div class="controls".*?>(.*?)<div class="container', content, re.DOTALL)
    if m:
        h1 = re.search(r'<h1.*?>(.*?)</h1>', m.group(1))
        h1_text = h1.group(1) if h1 else 'NONE'
        toggles = re.findall(r'<div class="toggle-btn".*?>(.*?)</div>', m.group(1), re.DOTALL)
        toggles_clean = [t.strip().replace('\n', ' ') for t in toggles]
        print(f'{f}: {h1_text} | Toggles: {toggles_clean}')
