import sys, re

def add_resume(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add Resume button UI to setup screen
    btn_start = '''<button class="btn-start" onclick="startQuiz()">▶ 시작하기</button>'''
    btn_resume = '''
            <div id="resume-container" style="display:none; margin-bottom:12px;">
                <button class="btn-start" style="background:#20c997; box-shadow:0 4px 12px rgba(32,201,151,0.4);" onclick="resumeQuiz()">↩ 하던 퀴즈 이어하기 (<span id="resume-prog"></span>)</button>
            </div>
            <button class="btn-start" onclick="startQuiz()">▶ 새 퀴즈 시작하기</button>'''
    content = content.replace(btn_start, btn_resume)

    # 2. JS: Auto-save logic
    js_state_end = '''let timerInterval = null, timeLeft = 0;'''
    js_state_new = js_state_end + '''
    
    function saveQuizState() {
        if (idx >= deck.length) {
            localStorage.removeItem('savedQuiz');
            return;
        }
        const state = {
            cfg, deck, idx, correct, wrong, wrongCards,
            timestamp: Date.now()
        };
        localStorage.setItem('savedQuiz', JSON.stringify(state));
    }
    
    function checkSavedQuiz() {
        const saved = localStorage.getItem('savedQuiz');
        if (saved) {
            try {
                const s = JSON.parse(saved);
                // Only show if there's actual progress but not finished
                if (s.idx > 0 && s.idx < s.deck.length) {
                    document.getElementById('resume-container').style.display = 'block';
                    document.getElementById('resume-prog').textContent = s.idx + '/' + s.deck.length;
                }
            } catch(e) {}
        }
    }
    window.addEventListener('DOMContentLoaded', checkSavedQuiz);
    
    function resumeQuiz() {
        const saved = localStorage.getItem('savedQuiz');
        if (saved) {
            try {
                const s = JSON.parse(saved);
                cfg = s.cfg; deck = s.deck; idx = s.idx;
                correct = s.correct; wrong = s.wrong; wrongCards = s.wrongCards;
                showScreen('screen-quiz');
                renderCard();
            } catch(e) {}
        }
    }
    '''
    content = content.replace(js_state_end, js_state_new)

    # 3. Call saveQuizState() after start and answering
    start_str = '''deck = shuffle([...buildPool()]);
        idx = 0; correct = 0; wrong = 0; wrongCards = [];'''
    start_new = start_str + '''\n        saveQuizState();'''
    content = content.replace(start_str, start_new)

    answer_fc = '''idx++; renderCard();'''
    answer_fc_new = '''idx++; saveQuizState(); renderCard();'''
    content = content.replace(answer_fc, answer_fc_new)

    answer_mc = '''idx++; renderCard(); }, 1300);'''
    answer_mc_new = '''idx++; saveQuizState(); renderCard(); }, 1300);'''
    content = content.replace(answer_mc, answer_mc_new)
    
    show_results = '''showScreen('screen-results');'''
    show_results_new = '''showScreen('screen-results');\n        localStorage.removeItem('savedQuiz');'''
    content = content.replace(show_results, show_results_new)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Added Resume Feature to quiz.html')

add_resume('quiz.html')
