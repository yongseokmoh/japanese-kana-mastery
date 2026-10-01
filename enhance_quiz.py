import re

def enhance_quiz():
    with open('quiz.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add Custom Set & Handwriting Mode Buttons
    range_group_str = '''<button class="opt-btn" data-val="weak" onclick="pick('range', this)">🔥 약점 집중</button>'''
    if '커스텀' not in content:
        new_range_group = range_group_str + '''\n                    <button class="opt-btn" data-val="custom" onclick="openCustomModal()">⚙️ 커스텀</button>'''
        content = content.replace(range_group_str, new_range_group)

    mode_group_str = '''<button class="opt-btn" data-val="time" onclick="pick('mode', this)">⏱ 타임어택</button>'''
    if '손글씨' not in content:
        new_mode_group = mode_group_str + '''\n                    <button class="opt-btn" data-val="handwrite" onclick="pick('mode', this)">✍️ 손글씨</button>'''
        content = content.replace(mode_group_str, new_mode_group)
        
    # 2. Romaji Toggle
    setup_card = '''<div class="setup-card">
                <div class="setup-label">📚 학습 범위</div>'''
    romaji_toggle = '''
            <div class="setup-card">
                <div class="setup-label">🔤 발음 표기</div>
                <div class="btn-group" id="pron-group">
                    <button class="opt-btn active" data-val="hangul" onclick="pickPron(this)">🇰🇷 한글</button>
                    <button class="opt-btn" data-val="romaji" onclick="pickPron(this)">🔤 Romaji</button>
                </div>
            </div>
    '''
    if '발음 표기' not in content:
        content = content.replace(setup_card, romaji_toggle + setup_card)

    # 3. Add Custom Modal & Canvas CSS
    css_injection = '''
        .modal { display: none; position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); z-index: 200; justify-content: center; align-items: center; }
        .modal.active { display: flex; }
        .modal-content { background: var(--card-bg); width: 90%; max-width: 400px; max-height: 80vh; overflow-y: auto; border-radius: 16px; padding: 20px; }
        .custom-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin: 15px 0; }
        .custom-cell { border: 1px solid var(--border); border-radius: 8px; text-align: center; padding: 8px 0; font-size: 20px; cursor: pointer; user-select: none; }
        .custom-cell.selected { background: var(--accent); color: white; border-color: var(--accent); }
        .canvas-container { border: 2px dashed var(--border); border-radius: 16px; background: white; width: 100%; height: 250px; position: relative; }
        body.dark-mode .canvas-container { background: #1e1e1e; border-color: #444; }
        canvas { width: 100%; height: 100%; touch-action: none; }
        .btn-clear { position: absolute; top: 10px; right: 10px; padding: 6px 12px; font-size: 12px; background: #f1f3f5; border: none; border-radius: 8px; cursor: pointer; }
        body.dark-mode .btn-clear { background: #333; color: #ccc; }
        .handwrite-answer { display: none; text-align: center; font-size: 64px; color: var(--hira); margin: 15px 0; }
    '''
    if '.modal {' not in content:
        content = content.replace('</style>', css_injection + '</style>')

    # Add Modal HTML at the end of body
    modal_html = '''
    <div class="modal" id="custom-modal">
        <div class="modal-content">
            <h3 style="margin-top:0">커스텀 세트 선택</h3>
            <div class="custom-grid" id="custom-grid"></div>
            <button class="btn-start" onclick="saveCustomAndClose()">저장 및 닫기</button>
        </div>
    </div>
    '''
    if 'id="custom-modal"' not in content:
        content = content.replace('</body>', modal_html + '</body>')

    # 4. JS Additions
    # State additions
    js_state = '''let timerInterval = null, timeLeft = 0;'''
    js_state_new = js_state + '''\n    let pronMode = 'hangul'; let customSelection = [];'''
    content = content.replace(js_state, js_state_new)

    # JS Logic
    js_logic = '''
    const romajiMap = {
        '아':'a','이':'i','우':'u','에':'e','오':'o',
        '카':'ka','키':'ki','쿠':'ku','케':'ke','코':'ko',
        '사':'sa','시':'shi','스':'su','세':'se','소':'so',
        '타':'ta','치':'chi','츠':'tsu','테':'te','토':'to',
        '나':'na','니':'ni','누':'nu','네':'ne','노':'no',
        '하':'ha','히':'hi','후':'fu','헤':'he','호':'ho',
        '마':'ma','미':'mi','무':'mu','메':'me','모':'mo',
        '야':'ya','유':'yu','요':'yo',
        '라':'ra','리':'ri','루':'ru','레':'re','로':'ro',
        '와':'wa','오':'o','응':'n',
        '가':'ga','기':'gi','구':'gu','게':'ge','고':'go',
        '자':'za','지':'ji','즈':'zu','제':'ze','조':'zo',
        '다':'da','데':'de','도':'do',
        '바':'ba','비':'bi','부':'bu','베':'be','보':'bo',
        '파':'pa','피':'pi','푸':'pu','페':'pe','포':'po',
        '캬':'kya','큐':'kyu','쿄':'kyo',
        '샤':'sha','슈':'shu','쇼':'sho',
        '차':'cha','추':'chu','초':'cho',
        '냐':'nya','뉴':'nyu','뇨':'nyo',
        '햐':'hya','휴':'hyu','효':'hyo',
        '먀':'mya','뮤':'myu','묘':'myo',
        '랴':'rya','류':'ryu','료':'ryo',
        '갸':'gya','규':'gyu','교':'gyo',
        '쟈':'ja','쥬':'ju','죠':'jo',
        '뱌':'bya','뷰':'byu','뵤':'byo',
        '퍄':'pya','퓨':'pyu','표':'pyo'
    };
    function getPron(p) { return pronMode === 'romaji' ? (romajiMap[p] || p) : p; }
    
    function pickPron(btn) {
        pronMode = btn.dataset.val;
        document.querySelectorAll('#pron-group .opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    // Custom Modal
    function openCustomModal() {
        const grid = document.getElementById('custom-grid');
        grid.innerHTML = '';
        const all = [...KD.basic, ...KD.dakuten, ...KD.youon].filter(c => c.h !== '');
        all.forEach(c => {
            const el = document.createElement('div');
            el.className = 'custom-cell' + (customSelection.includes(c.h) ? ' selected' : '');
            el.textContent = c.h;
            el.onclick = () => {
                el.classList.toggle('selected');
                if (el.classList.contains('selected')) customSelection.push(c.h);
                else customSelection = customSelection.filter(x => x !== c.h);
            };
            grid.appendChild(el);
        });
        document.getElementById('custom-modal').classList.add('active');
    }
    function saveCustomAndClose() {
        document.getElementById('custom-modal').classList.remove('active');
        document.querySelector('[data-val="custom"]').classList.add('active');
        cfg.range = 'custom';
        document.getElementById('count-msg').textContent = '커스텀 세트: ' + customSelection.length + '개 출제';
    }

    // Handwrite Canvas vars
    let hwCanvas, hwCtx, hwDrawing = false;
    
    function initCanvas() {
        hwCanvas = document.getElementById('hw-canvas');
        if(!hwCanvas) return;
        hwCtx = hwCanvas.getContext('2d');
        hwCanvas.width = hwCanvas.offsetWidth;
        hwCanvas.height = hwCanvas.offsetHeight;
        hwCtx.lineCap = 'round'; hwCtx.lineJoin = 'round'; hwCtx.lineWidth = 6;
        hwCtx.strokeStyle = document.body.classList.contains('dark-mode') ? '#fff' : '#000';

        const getPos = (e) => {
            const rect = hwCanvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return { x: clientX - rect.left, y: clientY - rect.top };
        };

        const startDraw = (e) => { e.preventDefault(); hwDrawing = true; const p = getPos(e); hwCtx.beginPath(); hwCtx.moveTo(p.x, p.y); };
        const draw = (e) => { e.preventDefault(); if(!hwDrawing) return; const p = getPos(e); hwCtx.lineTo(p.x, p.y); hwCtx.stroke(); };
        const endDraw = (e) => { e.preventDefault(); hwDrawing = false; };

        hwCanvas.addEventListener('mousedown', startDraw); hwCanvas.addEventListener('mousemove', draw);
        window.addEventListener('mouseup', endDraw);
        hwCanvas.addEventListener('touchstart', startDraw, {passive:false}); hwCanvas.addEventListener('touchmove', draw, {passive:false});
        window.addEventListener('touchend', endDraw);
    }
    
    function clearCanvas() {
        if(hwCtx) hwCtx.clearRect(0, 0, hwCanvas.width, hwCanvas.height);
    }
    '''
    content = content.replace('// ===== HELPERS =====', js_logic + '\n// ===== HELPERS =====')

    # Update buildPool for custom
    pool_weak = '''if (pool.length === 0) {'''
    pool_custom = '''
        if (cfg.range === 'custom') {
            let fullPool = [...KD.basic, ...KD.dakuten, ...KD.youon];
            pool = fullPool.filter(c => customSelection.includes(c.h));
            if(pool.length === 0) { alert('선택된 글자가 없습니다! 전체로 진행합니다.'); pool = fullPool.filter(c => c.h !== ''); }
        }
    '''
    content = content.replace(pool_weak, pool_custom + pool_weak)

    # Render Card - apply getPron
    content = content.replace('', '')
    content = content.replace("answerMC(this,'','')", "answerMC(this,'','')")
    
    # RenderMC - options generation
    content = content.replace('genOptions(card.p, pool.map(c => c.p), 4)', 'genOptions(getPron(card.p), pool.map(c => getPron(c.p)), 4)')

    # Add Handwrite render logic
    hw_render = '''
    // --- Handwrite ---
    function renderHandwrite(card) {
        document.getElementById('quiz-body').innerHTML = 
            <div style="text-align:center; font-size:24px; font-weight:700; margin-bottom:10px;">\</div>
            <div class="canvas-container">
                <button class="btn-clear" onclick="clearCanvas()">지우기</button>
                <canvas id="hw-canvas"></canvas>
            </div>
            <div id="hw-ans" class="handwrite-answer">\ (\)</div>
            <button id="hw-check" class="btn-start" style="margin-top:20px" onclick="checkHandwrite()">정답 확인</button>
            <div class="fc-actions hidden" id="hw-actions" style="margin-top:20px">
                <button class="btn-wrong-fc" onclick="answerFC(false)">😅 틀렸다</button>
                <button class="btn-correct-fc" onclick="answerFC(true)">✅ 맞았다</button>
            </div>
        ;
        setTimeout(initCanvas, 50);
    }
    function checkHandwrite() {
        document.getElementById('hw-ans').style.display = 'block';
        document.getElementById('hw-check').style.display = 'none';
        document.getElementById('hw-actions').classList.remove('hidden');
        speak(deck[idx].h);
    }
    '''
    content = content.replace('// --- Flashcard ---', hw_render + '\n    // --- Flashcard ---')

    render_card_time = '''else if (cfg.mode === 'time') renderMC(card);'''
    render_card_hw = render_card_time + '''\n        else if (cfg.mode === 'handwrite') renderHandwrite(card);'''
    content = content.replace(render_card_time, render_card_hw)

    with open('quiz.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Enhanced quiz.html with Romaji, Custom Sets, and Handwriting mode.')

enhance_quiz()
