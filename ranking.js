const chapters = ["be", "tense", "modal", "progressive", "question_negative"];

const names = {
  be: "be動詞",
  tense: "三単現",
  modal: "時制",
  progressive: "進行形",
  question_negative: "疑問文 / 否定文"
};

const result = [];

chapters.forEach(ch => {
  const count = Number(localStorage.getItem("weakCount_" + ch) || "0");
  result.push({
    chapter: ch,
    count: count
  });
});

result.sort((a, b) => b.count - a.count);

const div = document.getElementById("ranking");
div.innerHTML = "";

if (result.every(r => r.count === 0)) {
  const p = document.createElement("p");
  p.textContent = "まだ弱点データはありません";
  div.appendChild(p);
} else {
  result.forEach((r, i) => {
    const p = document.createElement("p");
    p.textContent = `${i + 1}位 ${names[r.chapter]} : ${r.count}回ミス`;
    div.appendChild(p);
  });
}
