// ===== 章データ =====
const chapters = {
  be: [
    { question:"I ___ a student.", choices:["am","is","are","be"], answer:0, explain:"I のときは am" },
    { question:"He ___ busy.", choices:["am","is","are","be"], answer:1, explain:"He は is" },
    { question:"They ___ friends.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { question:"She ___ from Japan.", choices:["am","is","are","be"], answer:1, explain:"She は is" },
    { question:"We ___ ready.", choices:["am","is","are","be"], answer:2, explain:"We は are" },
    { question:"It ___ a cat.", choices:["am","is","are","be"], answer:1, explain:"It は is" },
    { question:"You ___ kind.", choices:["am","is","are","be"], answer:2, explain:"You は are" },
    { question:"I ___ not tired.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"He ___ not a teacher.", choices:["am","is","are","be"], answer:1, explain:"He は is" },
    { question:"They ___ not happy.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { 
question: "She ___ my sister.",
choices: ["am", "is", "are", "be"],
answer: 1
},

{
question: "They ___ in the park.",
choices: ["am", "is", "are", "be"],
answer: 2
},

{
question: "I ___ happy today.",
choices: ["am", "is", "are", "be"],
answer: 0
},

{
question: "This ___ my book.",
choices: ["am", "is", "are", "be"],
answer: 1
},

{
question: "We ___ students.",
choices: ["am", "is", "are", "be"],
answer: 2
},

{
question: "He ___ a teacher.",
choices: ["am", "is", "are", "be"],
answer: 1
},

{
question: "You ___ very kind.",
choices: ["am", "is", "are", "be"],
answer: 2
},

{
question: "The dog ___ cute.",
choices: ["am", "is", "are", "be"],
answer: 1
},

{
question: "I ___ in Japan.",
choices: ["am", "is", "are", "be"],
answer: 0
},

{
question: "They ___ friends.",
choices: ["am", "is", "are", "be"],
answer: 2
},

{
question: "She ___ busy today.",
choices: ["am", "is", "are", "be"],
answer: 1
},

{
question: "We ___ ready.",
choices: ["am", "is", "are", "be"],
answer: 2
},

{
question: "I ___ not tired.",
choices: ["am", "is", "are", "be"],
answer: 0
},

{
question: "He ___ at school.",
choices: ["am", "is", "are", "be"],
answer: 1
},

{
question: "They ___ very tall.",
choices: ["am", "is", "are", "be"],
answer: 2
},

{
question: "This ___ a pen.",
choices: ["am", "is", "are", "be"],
answer: 1
},

{
question: "I ___ a soccer fan.",
choices: ["am", "is", "are", "be"],
answer: 0
},

{
question: "We ___ in the classroom.",
choices: ["am", "is", "are", "be"],
answer: 2
},

{
question: "She ___ my friend.",
choices: ["am", "is", "are", "be"],
answer: 1
},

{
question: "You ___ a good student.",
choices: ["am", "is", "are", "be"],
answer: 2
}
  ],
  tense: [
    { question:"I ___ to school every day.", choices:["go","went","will go","gone"], answer:0, explain:"every day → 現在形 go" },
    { question:"I ___ to school yesterday.", choices:["go","went","will go","going"], answer:1, explain:"yesterday → 過去形 went" },
    { question:"I ___ to school tomorrow.", choices:["go","went","will go","going"], answer:2, explain:"tomorrow → 未来 will go" },
    { question:"She ___ TV now.", choices:["watch","watched","is watching","will watch"], answer:2, explain:"now → 現在進行形" },
    { question:"They ___ dinner when I arrived.", choices:["eat","ate","were eating","will eat"], answer:2, explain:"過去の進行 → were eating" },
    { question:"He ___ already finished his work.", choices:["has","have","had","will have"], answer:0, explain:"He → has" },
    { question:"I ___ never been to Osaka.", choices:["have","has","had","will have"], answer:0, explain:"I → have been" },
    { question:"We ___ studying English for two hours.", choices:["are","were","have been","will be"], answer:2, explain:"for + 時間 → have been" },
    { question:"The meeting ___ start at 10 a.m.", choices:["is","was","will","has"], answer:2, explain:"未来の予定 → will" },
    { question:"By next year, I ___ graduate.", choices:["will","will have","have","had"], answer:1, explain:"By + 未来 → 未来完了" }
  ],
  modal: [
    { question:"I ___ swim very well.", choices:["can","will","must","am"], answer:0, explain:"能力 → can" },
    { question:"You ___ finish your homework.", choices:["can","will","must","may"], answer:2, explain:"義務 → must" },
    { question:"I ___ call you tomorrow.", choices:["can","will","must","could"], answer:1, explain:"未来の意思 → will" },
    { question:"We ___ speak English here.", choices:["can","will","must","should"], answer:0, explain:"可能 → can" },
    { question:"You ___ be quiet in the library.", choices:["can","will","must","may"], answer:2, explain:"規則 → must" },
    { question:"She ___ be at home now.", choices:["can","will","must","should"], answer:2, explain:"強い推量 → must" },
    { question:"I ___ help you.", choices:["can","will","must","may"], answer:0, explain:"申し出 → can" },
    { question:"He ___ come tonight.", choices:["can","will","must","might"], answer:1, explain:"予定・意志 → will" },
    { question:"You ___ eat too much junk food.", choices:["can","will","must not","may"], answer:2, explain:"禁止 → must not" },
    { question:"___ I open the window?", choices:["Can","Will","Must","Do"], answer:0, explain:"許可 → Can I ?" }
  ]
};

// ===== Pro 設定（推測対策済み）=====
const PRO_STORAGE_KEY = "isPro";
const PRO_CODE = "P-8F3K-2Q9M"; // 推測されにくい形
const isPro = () => localStorage.getItem(PRO_STORAGE_KEY) === "true";

// ===== 共通状態 =====
let questions = [];
let current = 0;
let correctCount = 0;
let mode = "normal"; // normal / review
let wrongSet = new Set();
let reviewQueue = [];
let reviewIndex = 0;
let currentChapter = null;

// ===== ページ判定 =====
const isMenuPage = document.querySelectorAll(".menu-card").length > 0 && !document.getElementById("question");
const isQuizPage = !!document.getElementById("question");

// ===== 成績保存 =====
function saveRate(rate) {
  const history = JSON.parse(localStorage.getItem("rateHistory")) || [];
  history.push({ chapter: currentChapter, date: new Date().toLocaleDateString(), rate });
  localStorage.setItem("rateHistory", JSON.stringify(history));
}

// ===== Pro用：間違い保存 =====
const wrongKey = ch => `wrong_${ch}`;
const loadWrong = ch => isPro() ? new Set(JSON.parse(localStorage.getItem(wrongKey(ch))||"[]")) : new Set();
const saveWrong = (ch,set)=> isPro() && localStorage.setItem(wrongKey(ch), JSON.stringify([...set]));
const clearWrong = ch => localStorage.removeItem(wrongKey(ch));

// ===== 章選択 =====
if (isMenuPage) {
  document.querySelectorAll(".menu-card").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      localStorage.setItem("selectedChapter", btn.dataset.chapter);
      location.href = "eigo.html";
    });
  });
}

// ===== クイズ =====
if (isQuizPage) {
  const questionEl = document.getElementById("question");
  const choiceBtns = document.querySelectorAll(".choice");
  const resultEl = document.getElementById("result");
  const explainEl = document.getElementById("explain");
  const nextBtn = document.getElementById("nextBtn");
  const reviewBtn = document.getElementById("reviewBtn");
  const progressEl = document.getElementById("progress");
  const progressFill = document.getElementById("progressFill");

 const QUIZ_SIZE = 10;      // 1回に出す問題数
let quizOrder = [];        // 今回出す問題の「元の問題番号」一覧

 const getQi = () => {
  if (mode === "normal") return quizOrder[current];
  return reviewQueue[reviewIndex];
};

  function startChapter(ch) {
    currentChapter = ch;
    questions = chapters[ch] || [];

// 今回の10問をランダムに選ぶ（章の問題数が10未満なら全問）
// ===== 今日の10問（毎日固定） =====
const todayKey = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const dailyKey = `daily_${currentChapter}_${todayKey()}`;
const saved = localStorage.getItem(dailyKey);

if (saved) {
  quizOrder = JSON.parse(saved);
} else {
  const allIdx = [...Array(questions.length).keys()];

  // シャッフル
  for (let i = allIdx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allIdx[i], allIdx[j]] = [allIdx[j], allIdx[i]];
  }

  quizOrder = allIdx.slice(0, Math.min(QUIZ_SIZE, questions.length));
  localStorage.setItem(dailyKey, JSON.stringify(quizOrder));
}
    
    current = 0; correctCount = 0; mode="normal";
    wrongSet = loadWrong(ch);
    reviewQueue = []; reviewIndex = 0;

    reviewBtn.style.display = (isPro() && wrongSet.size>0) ? "block" : "none";
    show();
  }

  function show() {
  const qi = getQi();

  // ★保険：もし変なindexなら止める（JSが落ちない）
  if (qi === undefined || qi === null){
    questionEl.textContent = "次の問題が見つかりません（章を選び直してください）";
    nextBtn.style.display = "none";
    return;
  }

  const q = questions[qi];

  // 問題文
  questionEl.textContent = q.question;

  // 選択肢（次の問題に進むたびにリセット）
  choiceBtns.forEach((b, i) => {
    b.textContent = q.choices[i] ?? "";
    b.disabled = false;
    b.classList.remove("correct", "wrong");
  });

  // 結果・解説リセット
  resultEl.textContent = "";
  explainEl.textContent = "";
  explainEl.classList.add("hidden");
  nextBtn.style.display = "none";

  // 進捗テキスト
  const total = (mode === "normal") ? quizOrder.length : reviewQueue.length;
  const idx = (mode === "normal") ? current : reviewIndex;
  progressEl.textContent = `${idx + 1} / ${total} 問`;

  // 進捗バー（progressFillがあるときだけ）
  if (progressFill) {
    const percent = ((idx + 1) / total) * 100;
    progressFill.style.width = percent + "%";
  }
}

  choiceBtns.forEach((btn,i)=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();
      const qi = getQi();
      const q = questions[qi];

      // 連打防止：押したら他も含めて無効化
choiceBtns.forEach(b => {
  b.disabled = true;
  b.classList.remove("correct", "wrong");
});
      if (i===q.answer){
        resultEl.textContent="〇 正解";
        if (mode==="normal") correctCount++;
        if (mode==="review"){ wrongSet.delete(qi); saveWrong(currentChapter, wrongSet); }
         btn.classList.add("correct");
      } else {
        resultEl.textContent="× 不正解";
        wrongSet.add(qi); saveWrong(currentChapter, wrongSet);
         btn.classList.add("wrong");
  // 正解の選択肢も見せる（学習効果UP）
  choiceBtns[q.answer].classList.add("correct");
      }
      explainEl.textContent="解説： "+q.explain;
      explainEl.classList.remove("hidden");
      reviewBtn.style.display="none";
      nextBtn.style.display="block";
    });
  });

  nextBtn.addEventListener("click", ()=>{
    nextBtn.style.display="none";
    if (mode==="normal"){
      current++;
      if (current>=quizOrder.length){
        if (wrongSet.size>0){ mode="review"; reviewQueue=[...wrongSet]; reviewIndex=0; }
        else { const r=Math.round(correctCount/quizOrder.length*100); saveRate(r); questionEl.textContent=`終了！ 正答率 ${r}%`; return; }
      }
    } else {
      reviewQueue=[...wrongSet];
      if (reviewQueue.length===0){
        const r=Math.round(correctCount/quizOrder.length*100); saveRate(r); clearWrong(currentChapter);
        questionEl.textContent=`復習完了！ 正答率 ${r}%`; return;
      }
      reviewIndex = (reviewIndex+1)%reviewQueue.length;
    }
    
    show();
  });

  reviewBtn.addEventListener("click", ()=>{
    if (!isPro() || wrongSet.size===0) return alert("Pro限定／保存された間違いがありません");
    mode="review"; reviewQueue=[...wrongSet]; reviewIndex=0;
    reviewBtn.style.display="none"; show();
  });

  startChapter(localStorage.getItem("selectedChapter")||"be");

}









