import re

def fix_nav(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    nav_pattern = re.compile(r'<nav class=\"main-nav\">.*?</nav>', re.DOTALL)
    def nav_replacer(match):
        orig = match.group(0)
        idx_act = ' active' if 'index.html\" class=\"nav-item active' in orig else ''
        dak_act = ' active' if 'dakuten.html\" class=\"nav-item active' in orig or '탁음' in orig else ''
        qui_act = ' active' if 'quiz.html\" class=\"nav-item active' in orig else ''
        dash_act = ' active' if 'dashboard.html\" class=\"nav-item active' in orig else ''
        voc_act = ' active' if 'vocab.html\" class=\"nav-item active' in orig else ''
        
        # If it's dakuten.html itself, ensure it's active
        if filepath == 'dakuten.html':
            idx_act = ''
            dak_act = ' active'
        if filepath == 'index.html':
            idx_act = ' active'
            dak_act = ''
        if filepath == 'quiz.html':
            qui_act = ' active'
        if filepath == 'dashboard.html':
            dash_act = ' active'
        if filepath == 'vocab.html':
            voc_act = ' active'

        return f'''<nav class=\"main-nav\">
            <a href=\"index.html\" class=\"nav-item{idx_act}\">🏠 오십음도</a>
            <a href=\"dakuten.html\" class=\"nav-item{dak_act}\">📖 탁음·요음</a>
            <a href=\"quiz.html\" class=\"nav-item{qui_act}\">🧪 퀴즈</a>
            <a href=\"vocab.html\" class=\"nav-item{voc_act}\">📚 단어</a>
            <a href=\"dashboard.html\" class=\"nav-item{dash_act}\">📊 통계</a>
        </nav>'''
    
    new_content = nav_pattern.sub(nav_replacer, content)
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed nav in {filepath}')

for file in ['index.html', 'dakuten.html', 'quiz.html', 'dashboard.html', 'vocab.html']:
    fix_nav(file)
