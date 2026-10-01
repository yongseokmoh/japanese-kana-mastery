import sys, re

def fix_hw(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    bad_hw = '''<div style="text-align:center; font-size:24px; font-weight:700; margin-bottom:10px;">\\</div>
            <div class="canvas-container">
                <button class="btn-clear" onclick="clearCanvas()">지우기</button>
                <canvas id="hw-canvas"></canvas>
            </div>
            <div id="hw-ans" class="handwrite-answer">\\ (\\)</div>'''
            
    # actually it's easier to use a regex because of encodings
    pattern = re.compile(r'<div style=\"text-align:center; font-size:24px; font-weight:700; margin-bottom:10px;\">.*?</canvas>\s*</div>\s*<div id=\"hw-ans\" class=\"handwrite-answer\">.*?</div>', re.DOTALL)
    
    good_hw = '''<div style="text-align:center; font-size:24px; font-weight:700; margin-bottom:10px;"></div>
            <div class="canvas-container">
                <button class="btn-clear" onclick="clearCanvas()">지우기</button>
                <canvas id="hw-canvas"></canvas>
            </div>
            <div id="hw-ans" class="handwrite-answer"> ()</div>'''
            
    content = pattern.sub(good_hw, content)
    
    # Also I need to fix the template string backtick missing if it was stripped
    content = content.replace("document.getElementById('quiz-body').innerHTML = \n", "document.getElementById('quiz-body').innerHTML = \n")
    if "</div>\n        ;" not in content:
        content = content.replace('          <button class="btn-correct-fc" onclick="answerFC(true)">✅ 맞았다</button>\n            </div>', '          <button class="btn-correct-fc" onclick="answerFC(true)">✅ 맞았다</button>\n            </div>\n        ;')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_hw('quiz.html')
