import re

with open('quiz.html', 'r', encoding='utf-8') as f:
    c = f.read()

pattern = re.compile(r'function renderHandwrite\(card\).*?setTimeout\(initCanvas, 50\);\s*\}', re.DOTALL)

good_hw = """function renderHandwrite(card) {
    document.getElementById('quiz-body').innerHTML = `
        <div style="text-align:center; font-size:24px; font-weight:700; margin-bottom:10px;">${getPron(card.p)}</div>
        <div class="canvas-container">
            <button class="btn-clear" onclick="clearCanvas()">지우기</button>
            <canvas id="hw-canvas"></canvas>
        </div>
        <div id="hw-ans" class="handwrite-answer">${card.h} (${card.k})</div>
        <button id="hw-check" class="btn-start" style="margin-top:20px" onclick="checkHandwrite()">정답 확인</button>
        <div class="fc-actions hidden" id="hw-actions" style="margin-top:20px">
            <button class="btn-wrong-fc" onclick="answerFC(false)">😅 틀렸다</button>
            <button class="btn-correct-fc" onclick="answerFC(true)">✅ 맞았다</button>
        </div>
    `;
    setTimeout(initCanvas, 50);
}"""

c = pattern.sub(good_hw, c)
with open('quiz.html', 'w', encoding='utf-8') as f:
    f.write(c)
