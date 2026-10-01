import os

html_content = '''<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>한자 — 일본어 학습</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #f8f9fa; --text: #343a40; --card: #ffffff; --border: #e9ecef; --accent: #4dabf7; --accent-dark: #339af0; }
        body.dark-mode { --bg: #121212; --text: #e0e0e0; --card: #1e1e1e; --border: #333333; }
        body { font-family: "Noto Sans KR", "Noto Sans JP", sans-serif; background: var(--bg); color: var(--text); margin: 0; padding: 15px; padding-top: 130px; display: flex; flex-direction: column; align-items: center; }
        .header { position: fixed; top: 0; left: 0; width: 100%; background: rgba(255,255,255,0.95); backdrop-filter: blur(5px); padding: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; flex-direction: column; align-items: center; gap: 8px; z-index: 100; box-sizing: border-box; }
        body.dark-mode .header { background: rgba(30,30,30,0.95); }
        .main-nav { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; width: 100%; }
        .nav-item { padding: 6px 14px; border-radius: 20px; text-decoration: none; color: #495057; font-size: 13px; font-weight: 500; background: #f1f3f5; border: 1px solid #dee2e6; }
        body.dark-mode .nav-item { background: #2c2c2c; border-color: #444; color: #ccc; }
        .nav-item.active { background: var(--accent); color: white; border-color: var(--accent-dark); }
        
        .tabs { display: flex; gap: 10px; margin-top: 5px; }
        .tab-btn { padding: 8px 16px; border-radius: 8px; border: 1px solid var(--border); background: var(--card); color: var(--text); cursor: pointer; font-weight: bold; }
        .tab-btn.active { background: var(--accent); color: white; border-color: var(--accent-dark); }
        body.dark-mode .tab-btn:not(.active) { background: #2c2c2c; color: #e0e0e0; border-color: #444; }

        .container { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 15px; }
        .kanji-card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .kanji-main { display: flex; gap: 20px; align-items: flex-start; }
        .kanji-char { font-size: 64px; font-weight: 700; color: var(--accent); line-height: 1; border-right: 1px solid var(--border); padding-right: 20px; }
        .kanji-info { flex: 1; display: flex; flex-direction: column; gap: 8px; }
        
        .info-row { display: flex; gap: 10px; align-items: stretch; }
        .info-label { font-size: 12px; font-weight: bold; background: #f1f3f5; padding: 4px 8px; border-radius: 4px; color: #495057; white-space: nowrap; display: flex; align-items: center; }
        body.dark-mode .info-label { background: #333; color: #ccc; }
        .info-val-wrap { flex: 1; display: flex; flex-direction: column; gap: 4px; justify-content: center; }
        
        .reading-item { display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.02); padding: 2px 6px; border-radius: 4px; }
        body.dark-mode .reading-item { background: rgba(255,255,255,0.05); }
        .reading-ja { font-size: 15px; font-weight: 500; }
        .reading-ko { font-size: 12px; color: #adb5bd; }
        
        .kanji-meta { font-size: 12px; color: #868e96; display: flex; gap: 10px; margin-top: auto; padding-top: 5px; }
        
        .words-section { margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--border); }
        .btn-words { background: none; border: 1px solid var(--accent); color: var(--accent); padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; width: 100%; }
        .btn-words:hover { background: var(--accent); color: white; }
        .words-list { margin-top: 10px; display: none; flex-direction: column; gap: 8px; }
        .word-item { background: #f8f9fa; padding: 8px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; }
        body.dark-mode .word-item { background: #2c2c2c; }
        .word-jp { font-size: 16px; font-weight: bold; }
        .word-read { font-size: 12px; color: #868e96; }
        .word-mean { font-size: 13px; text-align: right; flex: 1; margin-left: 10px; }
        
        .pagination { display: flex; justify-content: center; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
        .page-btn { padding: 6px 12px; border: 1px solid var(--border); background: var(--card); border-radius: 6px; cursor: pointer; color: var(--text); }
        .page-btn.active { background: var(--accent); color: white; border-color: var(--accent-dark); }
        body.dark-mode .page-btn:not(.active) { background: #2c2c2c; }

        #loading { text-align: center; padding: 20px; font-size: 18px; color: #868e96; }
    </style>
</head>
<body>
    <div class="header">
        <nav class="main-nav">
            <a href="index.html" class="nav-item">🏠 가나</a>
            <a href="kanji.html" class="nav-item active">📝 한자</a>
            <a href="quiz.html" class="nav-item">🧪 퀴즈</a>
            <a href="vocab.html" class="nav-item">📚 기초단어</a>
            <a href="dashboard.html" class="nav-item">📊 통계</a>
        </nav>
        <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('basic')">기초 한자 (1,026자)</button>
            <button class="tab-btn" onclick="switchTab('advanced')">심화 한자 (1,110자)</button>
        </div>
    </div>

    <div class="container">
        <div id="loading">데이터를 불러오는 중...</div>
        <div id="kanji-list"></div>
        <div class="pagination" id="pagination"></div>
    </div>

    <script src="kanji_data.js"></script>
    <script>
        if (localStorage.getItem('darkMode') === '1') document.body.classList.add('dark-mode');

        const ITEMS_PER_PAGE = 50;
        let currentTab = 'basic';
        let currentPage = 1;

        function renderPagination(totalItems) {
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
            const pag = document.getElementById('pagination');
            pag.innerHTML = '';
            
            if (totalPages <= 1) return;

            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, currentPage + 2);
            
            if (currentPage > 1) {
                const btn = document.createElement('button');
                btn.className = 'page-btn';
                btn.textContent = '이전';
                btn.onclick = () => { currentPage--; renderKanji(); };
                pag.appendChild(btn);
            }

            for (let i = start; i <= end; i++) {
                const btn = document.createElement('button');
                btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
                btn.textContent = i;
                btn.onclick = () => { currentPage = i; renderKanji(); };
                pag.appendChild(btn);
            }

            if (currentPage < totalPages) {
                const btn = document.createElement('button');
                btn.className = 'page-btn';
                btn.textContent = '다음';
                btn.onclick = () => { currentPage++; renderKanji(); };
                pag.appendChild(btn);
            }
        }

        function switchTab(tab) {
            currentTab = tab;
            currentPage = 1;
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.toggle('active', btn.textContent.includes(tab === 'basic' ? '기초' : '심화'));
            });
            renderKanji();
        }

        async function loadWords(kanji, btn, listEl) {
            if (listEl.style.display === 'flex') {
                listEl.style.display = 'none';
                btn.textContent = '예시 단어 보기 ▼';
                return;
            }
            
            if (listEl.dataset.loaded === 'true') {
                listEl.style.display = 'flex';
                btn.textContent = '예시 단어 닫기 ▲';
                return;
            }

            btn.textContent = '로딩 중...';
            try {
                const res = await fetch(`https://kanjiapi.dev/v1/words/${encodeURIComponent(kanji)}`);
                if (!res.ok) throw new Error('Network error');
                const words = await res.json();
                
                listEl.innerHTML = '';
                words.slice(0, 5).forEach(w => {
                    const variant = w.variants[0];
                    const meaning = w.meanings[0] ? w.meanings[0].glosses.join(', ') : '의미 없음';
                    const item = document.createElement('div');
                    item.className = 'word-item';
                    item.innerHTML = `
                        <div>
                            <div class="word-jp">${variant.written}</div>
                            <div class="word-read">${variant.pronounced}</div>
                        </div>
                        <div class="word-mean">${meaning}</div>
                    `;
                    listEl.appendChild(item);
                });
                if (words.length === 0) listEl.innerHTML = '<div style="text-align:center;color:#888;">예시 단어가 없습니다.</div>';
                
                listEl.dataset.loaded = 'true';
                listEl.style.display = 'flex';
                btn.textContent = '예시 단어 닫기 ▲';
            } catch (err) {
                btn.textContent = '오류 발생. 다시 시도';
            }
        }

        function buildReadings(readings) {
            if (!readings || readings.length === 0) return '<div class="reading-item"><span class="reading-ja">-</span></div>';
            return readings.map(r => `
                <div class="reading-item">
                    <span class="reading-ja">${r.ja}</span>
                    <span class="reading-ko">${r.ko}</span>
                </div>
            `).join('');
        }

        function renderKanji() {
            const listEl = document.getElementById('kanji-list');
            listEl.innerHTML = '';
            document.getElementById('loading').style.display = 'none';

            const data = kanjiData[currentTab];
            const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
            const pageData = data.slice(startIdx, startIdx + ITEMS_PER_PAGE);

            pageData.forEach(k => {
                const card = document.createElement('div');
                card.className = 'kanji-card';
                
                const onHTML = buildReadings(k.on);
                const kunHTML = buildReadings(k.kun);
                const means = k.meaning_ko || '의미 없음';

                card.innerHTML = `
                    <div class="kanji-main">
                        <div class="kanji-char">${k.kanji}</div>
                        <div class="kanji-info">
                            <div class="info-row">
                                <span class="info-label">음독(音)</span>
                                <div class="info-val-wrap">${onHTML}</div>
                            </div>
                            <div class="info-row">
                                <span class="info-label">훈독(訓)</span>
                                <div class="info-val-wrap">${kunHTML}</div>
                            </div>
                            <div class="info-row" style="align-items:center;">
                                <span class="info-label" style="height: fit-content;">뜻</span>
                                <div class="info-val-wrap" style="padding-left: 6px; font-weight: 500;">${means}</div>
                            </div>
                            <div class="kanji-meta">
                                <span>총 ${k.strokes}획</span>
                                <span>${k.grade ? k.grade + '학년' : '상용'}</span>
                            </div>
                        </div>
                    </div>
                    <div class="words-section">
                        <button class="btn-words" onclick="loadWords('${k.kanji}', this, this.nextElementSibling)">예시 단어 보기 ▼</button>
                        <div class="words-list" data-loaded="false"></div>
                    </div>
                `;
                listEl.appendChild(card);
            });

            renderPagination(data.length);
            window.scrollTo(0, 0);
        }

        setTimeout(() => {
            if (typeof kanjiData !== 'undefined') {
                renderKanji();
            } else {
                document.getElementById('loading').textContent = '데이터 로딩 실패';
            }
        }, 100);
    </script>
</body>
</html>
'''

with open('kanji.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Generated kanji.html with Korean meanings and aligned Korean pronunciations.")

# Now replace '한자학습' with '한자' in all html files navigation
html_files = [f for f in os.listdir('.') if f.endswith('.html')]
for f in html_files:
    if f == 'dakuten.html': continue
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    content = content.replace('>한자학습<', '>한자<')
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print("Updated nav labels across HTML files.")
