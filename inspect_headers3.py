import glob, re
for f in glob.glob('*.html'):
    if 'temp' in f: continue
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    header_match = re.search(r'<div class="(?:controls|header)"[^>]*>(.*?)</nav>', content, re.DOTALL)
    if header_match:
        print(f"--- {f} ---")
        # Extract the rest of the controls up to the container
        rest_match = re.search(r'</nav>(.*?)</div>\s*<div class="(?:container|dashboard-container|quiz-container)', content, re.DOTALL)
        if rest_match:
            print(rest_match.group(1).strip()[:200] + "...")
