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

    { question:"She ___ my sister.", choices:["am","is","are","be"], answer:1, explain:"She は is" },
    { question:"They ___ in the park.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { question:"I ___ happy today.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"This ___ my book.", choices:["am","is","are","be"], answer:1, explain:"This は is" },
    { question:"We ___ students.", choices:["am","is","are","be"], answer:2, explain:"We は are" },
    { question:"He ___ a teacher.", choices:["am","is","are","be"], answer:1, explain:"He は is" },
    { question:"You ___ very kind.", choices:["am","is","are","be"], answer:2, explain:"You は are" },
    { question:"The dog ___ cute.", choices:["am","is","are","be"], answer:1, explain:"The dog = It → is" },
    { question:"I ___ in Japan.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"They ___ friends.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { question:"She ___ busy today.", choices:["am","is","are","be"], answer:1, explain:"She は is" },
    { question:"We ___ ready.", choices:["am","is","are","be"], answer:2, explain:"We は are" },
    { question:"I ___ not tired.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"He ___ at school.", choices:["am","is","are","be"], answer:1, explain:"He は is" },
    { question:"They ___ very tall.", choices:["am","is","are","be"], answer:2, explain:"They は are" },
    { question:"This ___ a pen.", choices:["am","is","are","be"], answer:1, explain:"This は is" },
    { question:"I ___ a soccer fan.", choices:["am","is","are","be"], answer:0, explain:"I は am" },
    { question:"We ___ in the classroom.", choices:["am","is","are","be"], answer:2, explain:"We は are" },
    { question:"She ___ my friend.", choices:["am","is","are","be"], answer:1, explain:"She は is" },
    { question:"You ___ a good student.", choices:["am","is","are","be"], answer:2, explain:"You は are" },
  { question:"I ___ a student.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ busy today.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ my friends.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"She ___ from Japan.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ ready now.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"It ___ a cat.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"You ___ kind.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"I ___ not tired.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ not a teacher.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ not happy.", choices:["am","is","are","be"], answer:2, explain:"They → are" },

  { question:"This ___ my book.", choices:["am","is","are","be"], answer:1, explain:"This → is" },
  { question:"That ___ your pen.", choices:["am","is","are","be"], answer:1, explain:"That → is" },
  { question:"These ___ my shoes.", choices:["am","is","are","be"], answer:2, explain:"These → are" },
  { question:"Those ___ your bags.", choices:["am","is","are","be"], answer:2, explain:"Those → are" },
  { question:"My name ___ Ken.", choices:["am","is","are","be"], answer:1, explain:"My name → is" },
  { question:"Her name ___ Sara.", choices:["am","is","are","be"], answer:1, explain:"Her name → is" },
  { question:"Their names ___ on the list.", choices:["am","is","are","be"], answer:2, explain:"names → are" },
  { question:"I ___ in Tokyo.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"She ___ at home.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ in the classroom.", choices:["am","is","are","be"], answer:2, explain:"We → are" },

  { question:"He ___ a doctor.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ students.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"You ___ my best friend.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"It ___ cold today.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"I ___ happy now.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"She ___ very busy.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ excited.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"They ___ in the park.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"This ___ a pen.", choices:["am","is","are","be"], answer:1, explain:"This → is" },
  { question:"Those ___ my books.", choices:["am","is","are","be"], answer:2, explain:"Those → are" },

  { question:"I ___ a soccer fan.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ my brother.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"She ___ my sister.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ good friends.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"You ___ a good student.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"It ___ a new phone.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"I ___ in a hurry.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ not at school.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ not hungry.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"She ___ not here.", choices:["am","is","are","be"], answer:1, explain:"She → is" },

  { question:"Are you ___ okay?", choices:["am","is","are","be"], answer:3, explain:"be動詞の原形は be" },
  { question:"I want to ___ a teacher.", choices:["am","is","are","be"], answer:3, explain:"to + 動詞の原形 → be" },
  { question:"I will ___ happy.", choices:["am","is","are","be"], answer:3, explain:"will + 原形 → be" },
  { question:"Can you ___ quiet?", choices:["am","is","are","be"], answer:3, explain:"can + 原形 → be" },
  { question:"She must ___ tired.", choices:["am","is","are","be"], answer:3, explain:"must + 原形 → be" },

  // ---- ここから量産（同じルールで100まで）----
  { question:"I ___ a beginner.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ a nice guy.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ very kind.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"She ___ a singer.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ in the library.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"It ___ my turn.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"You ___ late today.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"I ___ not sleepy.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"He ___ not busy now.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ not alone.", choices:["am","is","are","be"], answer:2, explain:"They → are" },

  { question:"This ___ my desk.", choices:["am","is","are","be"], answer:1, explain:"This → is" },
  { question:"That ___ a dog.", choices:["am","is","are","be"], answer:1, explain:"That → is" },
  { question:"These ___ my keys.", choices:["am","is","are","be"], answer:2, explain:"These → are" },
  { question:"Those ___ your glasses.", choices:["am","is","are","be"], answer:2, explain:"Those → are" },
  { question:"My hobby ___ music.", choices:["am","is","are","be"], answer:1, explain:"hobby → is" },
  { question:"Her favorite food ___ sushi.", choices:["am","is","are","be"], answer:1, explain:"food → is" },
  { question:"Our plans ___ simple.", choices:["am","is","are","be"], answer:2, explain:"plans → are" },
  { question:"I ___ in my room.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"She ___ at the station.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ at the mall.", choices:["am","is","are","be"], answer:2, explain:"We → are" },

  { question:"He ___ a student too.", choices:["am","is","are","be"], answer:1, explain:"He → is" },
  { question:"They ___ from China.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"You ___ my teacher.", choices:["am","is","are","be"], answer:2, explain:"You → are" },
  { question:"It ___ sunny today.", choices:["am","is","are","be"], answer:1, explain:"It → is" },
  { question:"I ___ ready.", choices:["am","is","are","be"], answer:0, explain:"I → am" },
  { question:"She ___ strong.", choices:["am","is","are","be"], answer:1, explain:"She → is" },
  { question:"We ___ hungry.", choices:["am","is","are","be"], answer:2, explain:"We → are" },
  { question:"They ___ tired.", choices:["am","is","are","be"], answer:2, explain:"They → are" },
  { question:"This ___ an apple.", choices:["am","is","are","be"], answer:1, explain:"This → is" },
  { question:"Those ___ new shoes.", choices:["am","is","are","be"], answer:2, explain:"Those → are" }

  // --- 残りは「同じ型」を増やすだけ（あなたの作り方でOK）---
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
    { question:"By next year, I ___ graduate.", choices:["will","will have","have","had"], answer:1, explain:"By + 未来 → 未来完了" },
      // ===== 三単現（追加20問）=====
  { question:"He ___ tennis on Sundays.", choices:["play","plays","played","playing"], answer:1, explain:"He → plays" },
  { question:"She ___ to school by bus.", choices:["go","goes","went","going"], answer:1, explain:"She → goes" },
  { question:"My father ___ dinner at 7.", choices:["eat","eats","ate","eating"], answer:1, explain:"三単現 → eats" },
  { question:"Ken ___ TV every night.", choices:["watch","watches","watched","watching"], answer:1, explain:"watch → watches" },
  { question:"Tom ___ English every day.", choices:["study","studies","studied","studying"], answer:1, explain:"study → studies（y→ies）" },
  { question:"She ___ lunch at noon.", choices:["have","has","had","having"], answer:1, explain:"She → has" },
  { question:"He ___ his homework after dinner.", choices:["do","does","did","doing"], answer:1, explain:"do → does" },
  { question:"My sister ___ the piano well.", choices:["play","plays","played","playing"], answer:1, explain:"三単現 → plays" },
  { question:"The dog ___ fast.", choices:["run","runs","ran","running"], answer:1, explain:"dog(It) → runs" },
  { question:"She ___ coffee every morning.", choices:["drink","drinks","drank","drinking"], answer:1, explain:"三単現 → drinks" },

  { question:"He ___ baseball after school.", choices:["like","likes","liked","liking"], answer:1, explain:"He → likes" },
  { question:"My mother ___ a car.", choices:["have","has","had","having"], answer:1, explain:"mother(She) → has" },
  { question:"Tom ___ to music at night.", choices:["listen","listens","listened","listening"], answer:1, explain:"listen → listens" },
  { question:"She ___ her room every week.", choices:["clean","cleans","cleaned","cleaning"], answer:1, explain:"三単現 → cleans" },
  { question:"He ___ early on weekdays.", choices:["get up","gets up","got up","getting up"], answer:1, explain:"He → gets up" },
  { question:"My brother ___ in Tokyo.", choices:["live","lives","lived","living"], answer:1, explain:"live → lives" },
  { question:"She ___ Japanese.", choices:["teach","teaches","taught","teaching"], answer:1, explain:"teach → teaches（es）" },
  { question:"He ___ the window every day.", choices:["open","opens","opened","opening"], answer:1, explain:"open → opens" },
  { question:"The student ___ questions.", choices:["ask","asks","asked","asking"], answer:1, explain:"student(He/She) → asks" },
  { question:"She ___ to the library often.", choices:["go","goes","went","going"], answer:1, explain:"go → goes（es）" },
    // ===== 三単現追加30問 =====
{ question:"He ___ soccer every Sunday.", choices:["play","plays","played","playing"], answer:1, explain:"He → plays" },
{ question:"She ___ English at school.", choices:["study","studies","studied","studying"], answer:1, explain:"study → studies" },
{ question:"My father ___ coffee every morning.", choices:["drink","drinks","drank","drinking"], answer:1, explain:"father → drinks" },
{ question:"Ken ___ TV after dinner.", choices:["watch","watches","watched","watching"], answer:1, explain:"watch → watches" },
{ question:"Tom ___ to music every night.", choices:["listen","listens","listened","listening"], answer:1, explain:"listen → listens" },

{ question:"She ___ lunch at 12.", choices:["eat","eats","ate","eating"], answer:1, explain:"She → eats" },
{ question:"He ___ his homework every day.", choices:["do","does","did","doing"], answer:1, explain:"do → does" },
{ question:"My sister ___ piano very well.", choices:["play","plays","played","playing"], answer:1, explain:"She → plays" },
{ question:"The dog ___ very fast.", choices:["run","runs","ran","running"], answer:1, explain:"dog(It) → runs" },
{ question:"She ___ tea every morning.", choices:["drink","drinks","drank","drinking"], answer:1, explain:"She → drinks" },

{ question:"He ___ baseball after school.", choices:["like","likes","liked","liking"], answer:1, explain:"He → likes" },
{ question:"My mother ___ a car.", choices:["have","has","had","having"], answer:1, explain:"mother → has" },
{ question:"Tom ___ English every day.", choices:["practice","practices","practiced","practicing"], answer:1, explain:"practice → practices" },
{ question:"She ___ her room every week.", choices:["clean","cleans","cleaned","cleaning"], answer:1, explain:"She → cleans" },
{ question:"He ___ early every morning.", choices:["get up","gets up","got up","getting up"], answer:1, explain:"He → gets up" },

{ question:"My brother ___ in Tokyo.", choices:["live","lives","lived","living"], answer:1, explain:"live → lives" },
{ question:"She ___ math at school.", choices:["teach","teaches","taught","teaching"], answer:1, explain:"teach → teaches" },
{ question:"He ___ the window every day.", choices:["open","opens","opened","opening"], answer:1, explain:"open → opens" },
{ question:"The teacher ___ many questions.", choices:["ask","asks","asked","asking"], answer:1, explain:"teacher → asks" },
{ question:"She ___ to the library often.", choices:["go","goes","went","going"], answer:1, explain:"go → goes" },

{ question:"He ___ rice every day.", choices:["eat","eats","ate","eating"], answer:1, explain:"He → eats" },
{ question:"My friend ___ English well.", choices:["speak","speaks","spoke","speaking"], answer:1, explain:"friend → speaks" },
{ question:"She ___ the guitar.", choices:["play","plays","played","playing"], answer:1, explain:"She → plays" },
{ question:"He ___ the newspaper.", choices:["read","reads","reading","readed"], answer:1, explain:"He → reads" },
{ question:"Tom ___ to school by bike.", choices:["go","goes","went","going"], answer:1, explain:"Tom → goes" },

{ question:"She ___ the dishes.", choices:["wash","washes","washed","washing"], answer:1, explain:"wash → washes" },
{ question:"He ___ his room.", choices:["clean","cleans","cleaned","cleaning"], answer:1, explain:"He → cleans" },
{ question:"My sister ___ very hard.", choices:["study","studies","studied","studying"], answer:1, explain:"study → studies" },
{ question:"Ken ___ his dog.", choices:["walk","walks","walked","walking"], answer:1, explain:"Ken → walks" },
{ question:"She ___ English books.", choices:["read","reads","reading","readed"], answer:1, explain:"She → reads" }
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
    { question:"___ I open the window?", choices:["Can","Will","Must","Do"], answer:0, explain:"許可 → Can I ?" },
      // ===== 時制（追加20問）=====
  { question:"I ___ to school every day.", choices:["go","went","will go","going"], answer:0, explain:"every day → 現在形 go" },
  { question:"I ___ to school yesterday.", choices:["go","went","will go","going"], answer:1, explain:"yesterday → 過去形 went" },
  { question:"I ___ to school tomorrow.", choices:["go","went","will go","going"], answer:2, explain:"tomorrow → will go" },
  { question:"She ___ TV now.", choices:["watch","watched","is watching","will watch"], answer:2, explain:"now → 現在進行形" },
  { question:"They ___ dinner when I arrived.", choices:["eat","ate","were eating","will eat"], answer:2, explain:"when + 過去の途中 → 過去進行" },

  { question:"He ___ already finished his work.", choices:["has","have","is","will"], answer:0, explain:"already → 現在完了 / He → has" },
  { question:"I ___ never been to Osaka.", choices:["have","has","am","will"], answer:0, explain:"I → have been（現在完了）" },
  { question:"We ___ studying for two hours.", choices:["are","were","have been","will be"], answer:2, explain:"for + 時間 → have been" },
  { question:"The meeting ___ start at 10.", choices:["is","was","will","has"], answer:2, explain:"未来の予定 → will" },
  { question:"By next year, I ___ graduate.", choices:["will","will have","have","had"], answer:1, explain:"By + 未来 → 未来完了" },

  { question:"He ___ a book now.", choices:["reads","read","is reading","will read"], answer:2, explain:"now → is reading" },
  { question:"She ___ lunch at 12 every day.", choices:["eat","eats","ate","will eat"], answer:1, explain:"every day → 現在形 / She → eats" },
  { question:"We ___ in Tokyo last year.", choices:["live","lived","will live","living"], answer:1, explain:"last year → 過去形" },
  { question:"I ___ you later.", choices:["call","called","will call","calling"], answer:2, explain:"later → will call" },
  { question:"They ___ soccer at that time.", choices:["play","played","were playing","will play"], answer:2, explain:"at that time → 過去進行" },

  { question:"He ___ in Japan since 2020.", choices:["lives","lived","has lived","will live"], answer:2, explain:"since → 現在完了（継続）" },
  { question:"I ___ my homework yet.", choices:["didn't finish","haven't finished","don't finish","won't finish"], answer:1, explain:"yet → 現在完了（否定）" },
  { question:"She ___ already ___ dinner.", choices:["has / eaten","have / ate","is / eat","will / ate"], answer:0, explain:"already → has eaten" },
  { question:"We ___ to the station now.", choices:["go","went","are going","will go"], answer:2, explain:"now → are going" },
  { question:"They ___ to Kyoto next week.", choices:["go","went","will go","are went"], answer:2, explain:"next week → will go" }
    
  ]
};

// ===== Pro 設定 =====
const PRO_STORAGE_KEY = "isPro";
const PRO_CODE = "P-8F3K-2Q9M";
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
const isMenuPage =
  document.querySelectorAll(".menu-card").length > 0 &&
  !document.getElementById("question");

const isQuizPage = !!document.getElementById("question");

// ===== 成績保存 =====
function saveRate(rate) {
  const history = JSON.parse(localStorage.getItem("rateHistory")) || [];
  history.push({
    chapter: currentChapter,
    date: new Date().toLocaleDateString(),
    rate
  });
  localStorage.setItem("rateHistory", JSON.stringify(history));
}

// ===== Pro用：間違い保存 =====
const wrongKey = (ch) => `wrong_${ch}`;
const loadWrong = (ch) =>
  isPro() ? new Set(JSON.parse(localStorage.getItem(wrongKey(ch)) || "[]")) : new Set();
const saveWrong = (ch, set) =>
  isPro() && localStorage.setItem(wrongKey(ch), JSON.stringify([...set]));
const clearWrong = (ch) => localStorage.removeItem(wrongKey(ch));

// ===== 章選択（一覧ページ）=====
if (isMenuPage) {
  document.querySelectorAll(".menu-card").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("selectedChapter", btn.dataset.chapter);
      location.href = "eigo.html";
    });
  });
}

// ===== クイズ（eigo.html）=====
if (isQuizPage) {
  const questionEl = document.getElementById("question");
  const choiceBtns = document.querySelectorAll(".choices .choice");
  const resultEl = document.getElementById("result");
  const explainEl = document.getElementById("explain");
  const nextBtn = document.getElementById("nextBtn");
  const reviewBtn = document.getElementById("reviewBtn");
  const progressEl = document.getElementById("progress");
  const progressFill = document.getElementById("progressFill");
  const shareBtn = document.getElementById("shareBtn");

  const QUIZ_SIZE = 10;
  let quizOrder = []; // 今日の10問（indexリスト）

  const getQi = () => {
    if (mode === "normal") return quizOrder[current];
    return reviewQueue[reviewIndex];
  };

  // ===== シェア（X）=====
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      const total = QUIZ_SIZE; // 今日の10問
      const text = `英語クイズで ${correctCount} / ${total} 正解！%0Aあなたは何点取れる？`;
      const url = "https://eliasenmanuel200531-oss.github.io/english-quize/";
      const tweet = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      window.open(tweet, "_blank");
    });
  }

  function todayKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function startChapter(ch) {
    currentChapter = ch;
    questions = chapters[ch] || [];

    // ===== 今日の10問（毎日固定）=====
    const dailyKey = `daily_${currentChapter}_${todayKey()}`;
    const saved = localStorage.getItem(dailyKey);

    if (saved) {
      quizOrder = JSON.parse(saved);
    } else {
      const allIdx = [...Array(questions.length).keys()];
      for (let i = allIdx.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allIdx[i], allIdx[j]] = [allIdx[j], allIdx[i]];
      }
      quizOrder = allIdx.slice(0, Math.min(QUIZ_SIZE, questions.length));
      localStorage.setItem(dailyKey, JSON.stringify(quizOrder));
    }

    current = 0;
    correctCount = 0;
    mode = "normal";

    wrongSet = loadWrong(ch);
    reviewQueue = [];
    reviewIndex = 0;

    if (shareBtn) shareBtn.style.display = "none";
    reviewBtn.style.display = (isPro() && wrongSet.size > 0) ? "block" : "none";

    show();
  }

  function show() {
    const qi = getQi();
    if (qi === undefined || qi === null) {
      questionEl.textContent = "次の問題が見つかりません（章を選び直してください）";
      nextBtn.style.display = "none";
      return;
    }

    const q = questions[qi];

    // 問題文
    questionEl.textContent = q.question;

    // 選択肢リセット
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

    // 進捗
    const total = (mode === "normal") ? quizOrder.length : reviewQueue.length;
    const idx = (mode === "normal") ? current : reviewIndex;
    if (progressEl) progressEl.textContent = `${idx + 1} / ${total} 問`;

    if (progressFill) {
      const percent = ((idx + 1) / total) * 100;
      progressFill.style.width = percent + "%";
    }
  }

  // 選択肢クリック
  choiceBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const qi = getQi();
      const q = questions[qi];

      // 連打防止
      choiceBtns.forEach((b) => {
        b.disabled = true;
        b.classList.remove("correct", "wrong");
      });

      if (i === q.answer) {
        resultEl.textContent = "〇 正解";
        if (mode === "normal") correctCount++;
        if (mode === "review") {
          wrongSet.delete(qi);
          saveWrong(currentChapter, wrongSet);
        }
        btn.classList.add("correct");
      } else {
        resultEl.textContent = "× 不正解";
        wrongSet.add(qi);
        saveWrong(currentChapter, wrongSet);
        btn.classList.add("wrong");
        // 正解も表示
        choiceBtns[q.answer].classList.add("correct");
      }

      explainEl.textContent = "解説： " + (q.explain ?? "（解説は準備中）");
      explainEl.classList.remove("hidden");

      reviewBtn.style.display = "none";
      nextBtn.style.display = "block";
    });
  });

  // 次へ
  nextBtn.addEventListener("click", () => {
    nextBtn.style.display = "none";

    if (mode === "normal") {
      current++;

      if (current >= quizOrder.length) {
        if (wrongSet.size > 0) {
          mode = "review";
          reviewQueue = [...wrongSet];
          reviewIndex = 0;
        } else {
          const r = Math.round((correctCount / quizOrder.length) * 100);
          saveRate(r);
          questionEl.textContent = `終了！ 正答率 ${r}%`;
          if (shareBtn) shareBtn.style.display = "block";
          return;
        }
      }
    } else {
      reviewQueue = [...wrongSet];

      if (reviewQueue.length === 0) {
        const r = Math.round((correctCount / quizOrder.length) * 100);
        saveRate(r);
        clearWrong(currentChapter);
        questionEl.textContent = `復習完了！ 正答率 ${r}%`;
        if (shareBtn) shareBtn.style.display = "block";
        return;
      }

      reviewIndex = (reviewIndex + 1) % reviewQueue.length;
    }

    show();
  });

  // 間違いだけ解く（Pro）
  reviewBtn.addEventListener("click", () => {
    if (!isPro() || wrongSet.size === 0) return alert("Pro限定／保存された間違いがありません");
    mode = "review";
    reviewQueue = [...wrongSet];
    reviewIndex = 0;
    reviewBtn.style.display = "none";
    if (shareBtn) shareBtn.style.display = "none";
    show();
  });

  // 初期開始
  startChapter(localStorage.getItem("selectedChapter") || "be");
}

const nextCategoryBtn = document.getElementById("nextCategoryBtn");

if (nextCategoryBtn) {

  const order = ["be", "tense", "modal"];

  const names = {
    be: "be動詞",
    tense: "三人称単数現在",
    modal: "時制"
  };

  let current = localStorage.getItem("selectedChapter") || "be";

  let currentIndex = order.indexOf(current);

  let next = order[(currentIndex + 1) % order.length];

  nextCategoryBtn.textContent = `次は ${names[next]} クイズ`;

  nextCategoryBtn.addEventListener("click", () => {

    localStorage.setItem("selectedChapter", next);

    location.reload();

  });

}

// ===== 問題数を自動表示 =====
const chapterNames = {
  be: "be動詞 / 一般動詞",
  tense: "三人称単数現在",
  modal: "時制"
};

// トップページのタイトル更新
const mainTitle = document.getElementById("mainTitle");
if (mainTitle) {
  const total = Object.values(chapters).reduce((sum, arr) => sum + arr.length, 0);
  mainTitle.textContent = `英語文法クイズ（${total}問）｜間違いだけ復習できる`;
}

// 一覧ページの件数表示
const countBe = document.getElementById("count-be");
const countTense = document.getElementById("count-tense");
const countModal = document.getElementById("count-modal");

if (countBe) {
  countBe.textContent = `${chapters.be.length}問`;
}
if (countTense) {
  countTense.textContent = `${chapters.tense.length}問`;
}
if (countModal) {
  countModal.textContent = `${chapters.modal.length}問`;
}

// 開発用：コンソールで問題数確認
console.log("カテゴリ別問題数", {
  be: chapters.be.length,
  tense: chapters.tense.length,
  modal: chapters.modal.length
});
console.log("合計問題数", Object.values(chapters).reduce((sum, arr) => sum + arr.length, 0));







