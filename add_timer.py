import sys

def add_timer(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add Timer UI to progress info
    prog_info_original = '''<div class=\"progress-info\">
                <span id=\"prog-text\">1 / 46</span>
                <span class=\"score-chip\" id=\"score-chip\">✓ 0</span>
            </div>'''
    prog_info_new = '''<div class=\"progress-info\">
                <span id=\"prog-text\">1 / 46</span>
                <span id=\"timer-text\" style=\"display:none; color:var(--red); font-weight:700;\">⏱ 00:00</span>
                <span class=\"score-chip\" id=\"score-chip\">✓ 0</span>
            </div>'''
    content = content.replace(prog_info_original, prog_info_new)

    # Add Time Attack mode to Setup
    mode_group_orig = '''<button class=\"opt-btn\" data-val=\"listen\" onclick=\"pick('mode', this)\">🎧 청취 퀴즈</button>'''
    mode_group_new = mode_group_orig + '''\n                    <button class=\"opt-btn\" data-val=\"time\" onclick=\"pick('mode', this)\">⏱ 타임어택</button>'''
    content = content.replace(mode_group_orig, mode_group_new)

    # State variables for timer
    state_orig = '''let fcFlipped = false, mcAnswered = false;'''
    state_new = state_orig + '''\n    let timerInterval = null, timeLeft = 0;'''
    content = content.replace(state_orig, state_new)

    # Start Quiz logic for timer
    start_quiz_orig = '''idx = 0; correct = 0; wrong = 0; wrongCards = [];'''
    start_quiz_new = start_quiz_orig + '''
        clearInterval(timerInterval);
        if (cfg.mode === 'time') {
            timeLeft = deck.length * 3; // 3 seconds per question
            document.getElementById('timer-text').style.display = 'inline';
            document.getElementById('timer-text').textContent = '⏱ ' + timeLeft + 's';
            timerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById('timer-text').textContent = '⏱ ' + Math.max(0, timeLeft) + 's';
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    alert('⏰ 시간 종료!');
                    showResults();
                }
            }, 1000);
        } else {
            document.getElementById('timer-text').style.display = 'none';
        }'''
    content = content.replace(start_quiz_orig, start_quiz_new)

    # Render Card logic for time attack
    render_card_orig = '''else if (cfg.mode === 'mc') renderMC(card);'''
    render_card_new = render_card_orig + '''\n        else if (cfg.mode === 'time') renderMC(card);'''
    content = content.replace(render_card_orig, render_card_new)

    # Show Results clear timer
    show_results_orig = '''showScreen('screen-results');'''
    show_results_new = show_results_orig + '''\n        clearInterval(timerInterval);'''
    content = content.replace(show_results_orig, show_results_new)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

add_timer('quiz.html')
