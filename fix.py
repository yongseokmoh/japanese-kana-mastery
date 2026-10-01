import sys, re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the corrupted part:
    # <div class="toggle-btn" id="toggle-katakana" onclick="toggleVisibility('katakana', this)">카타가나 가리기    <div class="toggle-btn" id="toggle-dark" onclick="toggleDarkMode()">🌙 다크 모드</div>
    # </div>
    # and fix it
    
    # 1. Remove the injected dark mode button
    content = re.sub(r'\s*<div class=\"toggle-btn\" id=\"toggle-dark\" onclick=\"toggleDarkMode\(\)\">🌙 다크 모드</div>', '', content)
    
    # 2. Re-inject it properly before the closing tag of .toggles
    # Let's find: <div class="toggles"> ... \n        </div>
    # Since we can't easily regex, let's just replace the exact end of the toggles block.
    # The toggles block ends right before </div>\n    </div>\n\n    <div class="container" id="app">
    
    parts = content.split('<div class="container" id="app">')
    if len(parts) > 1:
        # replace the last </div>\n    </div> with the button
        top = parts[0]
        # find the last </div> which belongs to .toggles
        # Actually it's easier to find: <div class="toggle-btn" id="toggle-pronunciation" onclick="toggleVisibility('pronunciation', this)">발음 가리기</div>
        
        target = '''<div class="toggle-btn" id="toggle-pronunciation" onclick="toggleVisibility('pronunciation', this)">발음 가리기</div>'''
        replacement = target + '''\n            <div class="toggle-btn" id="toggle-dark" onclick="toggleDarkMode()">🌙 다크 모드</div>'''
        
        content = content.replace(target, replacement)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fixed {filepath}')

fix_file('index.html')
fix_file('dakuten.html')
