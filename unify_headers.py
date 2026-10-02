import glob, re

titles = {
    'index.html': '일본어 가나',
    'kanji.html': '기초 한자',
    'quiz.html': '학습 퀴즈',
    'vocab.html': '기초 2000 단어장',
    'stations.html': '도쿄 전철역',
    'dashboard.html': '통계 대시보드',
    'grammar.html': '문법 (GrammarCraft)',
    'dakuten.html': '탁음 · 반탁음 · 요음'
}

def process_html(filepath):
    if 'temp' in filepath: return
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()

    # Find the header region
    # usually <div class="controls"> or <div class="header"> to </nav> ... </div> ... <div class="container...
    # We can match from <div class="controls" or <div class="header"
    header_pattern = r'(<div class="(?:controls|header)"[^>]*>.*?(?:<div class="(?:container|dashboard|dashboard-container|quiz-container)")[^>]*>)'
    match = re.search(header_pattern, content, re.DOTALL)
    
    if not match:
        print(f"Skipping {filepath} (header not found)")
        return
        
    old_header_block = match.group(1)
    container_start = re.search(r'(<div class="(?:container|dashboard|dashboard-container|quiz-container)"[^>]*>)', old_header_block).group(1)
    
    # Extract toggles
    toggles = re.findall(r'<button class="tab-btn[^>]*>.*?</button>|<div class="toggle-btn[^>]*>.*?</div>', old_header_block, re.DOTALL)
    
    # Filter out dark mode toggles since header.js provides it
    toggles = [t for t in toggles if 'toggle-dark' not in t and '다크 모드' not in t]
    
    toggles_html = '\n'.join(toggles)
    if toggles_html:
        toggles_block = f'<div id="page-specific-toggles" style="display:none;">\n{toggles_html}\n</div>'
    else:
        toggles_block = ''

    new_header = f"""
    {toggles_block}
    <div id="app-header-mount"></div>
    <script src="header.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {{
            AppHeader.init({{ title: '{titles.get(filepath, "일본어 학습")}' }});
        }});
    </script>
    {container_start}
"""
    
    new_content = content.replace(old_header_block, new_header.strip() + "\n")
    
    # Also we should check if there is an old dark mode script at the bottom that might conflict
    # We can leave the old functions since they just update body class, but it's fine.
    
    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(new_content)
    print(f"Processed {filepath}")

for f in glob.glob('*.html'):
    process_html(f)

