import glob, re
html_files = glob.glob('*.html')
for f in html_files:
    if f == 'vocab.html': continue
    content = open(f, 'r', encoding='utf-8').read()
    if 'v261002 R2' not in content:
        content = re.sub(r'(<nav[^>]*main-nav[^>]*>.*?</nav>)', r'\1\n        <div style="text-align:center; font-size:10px; color:#868e96; margin-top:4px;">v261002 R2</div>', content, flags=re.DOTALL)
        open(f, 'w', encoding='utf-8').write(content)
print('Updated HTML files')
