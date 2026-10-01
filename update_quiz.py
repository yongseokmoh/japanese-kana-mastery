import sys, re

def update_quiz(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Navigation
    nav_pattern = re.compile(r'<nav class=\"main-nav\">.*?</nav>', re.DOTALL)
    def nav_replacer(match):
        return '''<nav class=\"main-nav\">
            <a href=\"index.html\" class=\"nav-item\">🏠 오십음도</a>
            <a href=\"dakuten.html\" class=\"nav-item\">📖 탁음·요음</a>
            <a href=\"quiz.html\" class=\"nav-item active\">🧪 퀴즈</a>
            <a href=\"dashboard.html\" class=\"nav-item\">📊 대시보드</a>
        </nav>'''
    content = nav_pattern.sub(nav_replacer, content)

    # 2. Add Dark Mode CSS
    css_injection = '''
        body.dark-mode {
            --bg: #121212; --text: #e0e0e0; --card-bg: #1e1e1e; --border: #333333;
        }
        body.dark-mode .header { background: rgba(30,30,30,0.95); }
        body.dark-mode .nav-item:not(.active) { background: #2c2c2c; border-color: #444; color: #ccc; }
        body.dark-mode .nav-item:not(.active):hover { background: #3c3c3c; }
        body.dark-mode .setup-card, body.dark-mode .question-box, body.dark-mode .result-hero, body.dark-mode .wrong-chip { background: #1e1e1e; border-color: #333; }
        body.dark-mode .opt-btn { background: #2c2c2c; border-color: #444; color: #ccc; }
        body.dark-mode .opt-btn:hover { border-color: var(--accent); color: var(--accent); }
        body.dark-mode .mc-btn { background: #1e1e1e; border-color: #444; color: #e0e0e0; }
        body.dark-mode .mc-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        body.dark-mode .mc-btn.correct { background: #194a24; border-color: var(--green); color: #8ce99a; }
        body.dark-mode .mc-btn.wrong { background: #4a1919; border-color: var(--red); color: #ffa8a8; }
        body.dark-mode .fc-front { background: #2c2c2c; border-color: #444; }
        body.dark-mode .fc-back { background: linear-gradient(135deg, #1f2b38, #36222b); border-color: #444; }
        body.dark-mode .btn-wrong-fc { background: #4a1919; color: #ffa8a8; }
        body.dark-mode .btn-correct-fc { background: #194a24; color: #8ce99a; }
        body.dark-mode .audio-btn { background: #2c2c2c; border-color: #444; color: #ccc; }
        body.dark-mode .progress-bar-wrap { background: #333; }
        body.dark-mode .score-chip { background: #194a24; color: #8ce99a; }
        body.dark-mode .wrong-chip { background: #2c2c2c; border-color: #444; }
        body.dark-mode .wrong-chip .wp { color: #aaa; }
        body.dark-mode .btn-setup-link { background: #2c2c2c; color: #ccc; }
    </style>'''
    content = content.replace('</style>', css_injection)

    # 3. Add '약점 집중' button to range group
    range_group_str = '''<button class=\"opt-btn\" data-val=\"all\" onclick=\"pick('range', this)\">전체</button>'''
    new_range_btn = range_group_str + '''\n                    <button class=\"opt-btn\" data-val=\"weak\" onclick=\"pick('range', this)\">🔥 약점 집중</button>'''
    content = content.replace(range_group_str, new_range_btn)

    # 4. JS: Dark Mode initialization
    js_init = '''
    if (localStorage.getItem('darkMode') === '1') document.body.classList.add('dark-mode');
    
    // Streak logic
    let lastDate = localStorage.getItem('lastQuizDate');
    let today = new Date().toDateString();
    if (lastDate !== today) {
        if (lastDate === new Date(Date.now() - 86400000).toDateString()) {
            // Consecutive day
        } else if (lastDate) {
            localStorage.setItem('kanaStreak', '0');
        }
    }
    '''
    content = content.replace('// ===== STATE =====', js_init + '\n    // ===== STATE =====')

    # 5. JS: Build Pool Weakness logic
    build_pool_str = '''if (cfg.range === 'all') pool = pool.concat(KD.youon);'''
    build_pool_new = build_pool_str + '''
        if (cfg.range === 'weak') {
            let stats = JSON.parse(localStorage.getItem('kanaStats') || '{}');
            let fullPool = [...KD.basic, ...KD.dakuten, ...KD.youon];
            pool = fullPool.filter(c => {
                let s = stats[c.h];
                if (!s) return false;
                let acc = s.c / (s.c + s.w);
                return acc < 0.7 && s.w > 0; // less than 70% accuracy
            });
            if (pool.length === 0) {
                alert('충분한 오답 데이터가 없거나, 약점인 글자가 없습니다! 전체 범위로 시작합니다.');
                pool = fullPool;
            }
        }'''
    content = content.replace(build_pool_str, build_pool_new)
    
    # Update counts message
    content = content.replace('document.getElementById(\'count-msg\').textContent = \'총 \' + counts[cfg.range] + \'개 출제\';',
                              'document.getElementById(\'count-msg\').textContent = cfg.range === \'weak\' ? \"오답률 높은 글자 집중 출제\" : \'총 \' + counts[cfg.range] + \'개 출제\';')

    # 6. JS: Record stats on answerFC and answerMC and answerListen
    content = content.replace('if (isCorrect) correct++; else { wrong++; wrongCards.push(deck[idx]); }',
                              'if (isCorrect) { correct++; recordStat(deck[idx].h, true); } else { wrong++; wrongCards.push(deck[idx]); recordStat(deck[idx].h, false); }')
    
    content = content.replace('if (chosen === correctP) { correct++; speak(card.h); }\\n        else { wrong++; wrongCards.push(card); speak(card.h); }',
                              'if (chosen === correctP) { correct++; speak(card.h); recordStat(card.h, true); }\\n        else { wrong++; wrongCards.push(card); speak(card.h); recordStat(card.h, false); }')
    content = content.replace('if (chosen === correctH) { correct++; speak(card.h); }\\n        else { wrong++; wrongCards.push(card); speak(card.h); }',
                              'if (chosen === correctH) { correct++; speak(card.h); recordStat(card.h, true); }\\n        else { wrong++; wrongCards.push(card); speak(card.h); recordStat(card.h, false); }')

    # Add recordStat function and streak update in showResults
    record_stat_func = '''
    function recordStat(h, isCorrect) {
        let stats = JSON.parse(localStorage.getItem('kanaStats') || '{}');
        if (!stats[h]) stats[h] = {c:0, w:0};
        if (isCorrect) stats[h].c++;
        else stats[h].w++;
        localStorage.setItem('kanaStats', JSON.stringify(stats));
    }
    '''
    content = content.replace('// ===== HELPERS =====', record_stat_func + '\n    // ===== HELPERS =====')
    
    show_results_str = '''const pct = Math.round((correct / total) * 100);'''
    streak_update = '''
        if (correct > 0 || wrong > 0) {
            let lastD = localStorage.getItem('lastQuizDate');
            let tod = new Date().toDateString();
            if (lastD !== tod) {
                let st = parseInt(localStorage.getItem('kanaStreak') || '0');
                if (lastD === new Date(Date.now() - 86400000).toDateString()) {
                    localStorage.setItem('kanaStreak', (st + 1).toString());
                } else if (!lastD) {
                    localStorage.setItem('kanaStreak', '1');
                }
                localStorage.setItem('lastQuizDate', tod);
            }
        }
    '''
    content = content.replace(show_results_str, show_results_str + streak_update)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Modified quiz.html')

update_quiz('quiz.html')
