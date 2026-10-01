import sys

def add_pause(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find where to add the pause button. In screen-quiz, inside progress-info maybe?
    # Or just an X or Pause button at the top right of the progress info.
    prog_info = '''<span class=\"score-chip\" id=\"score-chip\">✓ 0</span>'''
    new_prog_info = prog_info + '''\n                <span class=\"score-chip\" style=\"background:#f1f3f5; color:#495057; cursor:pointer;\" onclick=\"pauseQuiz()\">⏸ 일시정지</span>'''
    content = content.replace(prog_info, new_prog_info)
    
    # Also fix Dark Mode for this new button
    css_dark = '''body.dark-mode .score-chip { background: #194a24; color: #8ce99a; }'''
    new_css_dark = css_dark + '''\n        body.dark-mode .score-chip[onclick] { background: #2c2c2c !important; color: #ccc !important; }'''
    content = content.replace(css_dark, new_css_dark)
    
    # JS: pauseQuiz function
    js_pause = '''
    function pauseQuiz() {
        saveQuizState();
        clearInterval(timerInterval);
        showScreen('screen-setup');
        checkSavedQuiz();
    }
    '''
    content = content.replace('function startQuiz()', js_pause + '\n    function startQuiz()')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Added Pause button')

add_pause('quiz.html')
