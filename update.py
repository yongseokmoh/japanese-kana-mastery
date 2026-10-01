import sys, re

def modify_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    nav_pattern = re.compile(r'<nav class=\"main-nav\">.*?</nav>', re.DOTALL)
    def nav_replacer(match):
        orig = match.group(0)
        idx_act = ' active' if 'index.html\" class=\"nav-item active' in orig else ''
        dak_act = ' active' if 'dakuten.html\" class=\"nav-item active' in orig else ''
        qui_act = ' active' if 'quiz.html\" class=\"nav-item active' in orig else ''
        return f'''<nav class=\"main-nav\">
            <a href=\"index.html\" class=\"nav-item{idx_act}\">🏠 오십음도</a>
            <a href=\"dakuten.html\" class=\"nav-item{dak_act}\">📖 탁음·요음</a>
            <a href=\"quiz.html\" class=\"nav-item{qui_act}\">🧪 퀴즈</a>
            <a href=\"dashboard.html\" class=\"nav-item\">📊 대시보드</a>
        </nav>'''
    content = nav_pattern.sub(nav_replacer, content)
    
    css_injection = '''
        body.dark-mode {
            --bg-color: #121212;
            --text-color: #e0e0e0;
            --card-bg: #1e1e1e;
            --border-color: #333333;
        }
        body.dark-mode .controls { background-color: rgba(30,30,30,0.95); }
        body.dark-mode .nav-item:not(.active) { background: #2c2c2c; border-color: #444; color: #ccc; }
        body.dark-mode .nav-item:not(.active):hover { background: #3c3c3c; }
        body.dark-mode .toggle-btn:not(.active) { background-color: #2c2c2c; border-color: #444; color: #ccc; }
        body.dark-mode .pronunciation { color: #aaa; }
        body.dark-mode .char-item:not(.empty-item):active { background-color: #333; }
        body.dark-mode .info-card { background: #1e1e1e; border-color: #333; }
        body.dark-mode .info-ex { background: #2c2c2c; }
        body.dark-mode .info-ex-mean { color: #aaa; }
        body.dark-mode footer { color: #666; }
    </style>'''
    content = content.replace('</style>', css_injection)
    
    toggles_pattern = re.compile(r'(<div class=\"toggles\">.*?)(</div>)', re.DOTALL)
    def toggles_replacer(match):
        return match.group(1) + '    <div class=\"toggle-btn\" id=\"toggle-dark\" onclick=\"toggleDarkMode()\">🌙 다크 모드</div>\n        ' + match.group(2)
    content = toggles_pattern.sub(toggles_replacer, content)
    
    js_injection = '''
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark ? '1' : '0');
            document.getElementById('toggle-dark').textContent = isDark ? '☀️ 라이트 모드' : '🌙 다크 모드';
        }
        if (localStorage.getItem('darkMode') === '1') {
            document.body.classList.add('dark-mode');
        }
        window.addEventListener('DOMContentLoaded', () => {
            if (document.body.classList.contains('dark-mode')) {
                document.getElementById('toggle-dark').textContent = '☀️ 라이트 모드';
            }
        });
    </script>'''
    content = content.replace('</script>', js_injection)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Modified {filepath}')

modify_file('index.html')
modify_file('dakuten.html')
