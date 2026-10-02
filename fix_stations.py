with open('stations.html', 'r', encoding='utf-8') as f:
    text = f.read()
idx1 = text.find('<div class="header-top">')
idx2 = text.find('<h1>')
idx2 = text.find('</h1>', idx2) + 5
if idx1 != -1 and idx2 != -1:
    new_header = '''    <div id="app-header-mount"></div>
    <script src="header.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            AppHeader.init({ title: '도쿄 전철역' });
        });
    </script>
'''
    text = text[:idx1] + new_header + text[idx2:]
    with open('stations.html', 'w', encoding='utf-8') as f:
        f.write(text)
    print('Success')
