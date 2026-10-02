import re
with open('quiz.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_header = '''    <div id="app-header-mount"></div>
    <script src="header.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            AppHeader.init({ title: '학습 퀴즈' });
        });
    </script>
'''

content = re.sub(r'<div class="header">.*?</nav>.*?</div>\s*</div>', new_header, content, flags=re.DOTALL)
with open('quiz.html', 'w', encoding='utf-8') as f:
    f.write(content)
