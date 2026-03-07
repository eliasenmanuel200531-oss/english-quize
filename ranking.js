const chapters = ["be","tense","modal","progressive","question_negative"];

const names = {
be:"be動詞",
tense:"三単現",
modal:"時制",
progressive:"進行形",
question_negative:"疑問文 / 否定文"
};

const result = [];

chapters.forEach(ch=>{
const wrong = JSON.parse(localStorage.getItem("wrong_"+ch) || "[]");
result.push({
chapter:ch,
count:wrong.length
});
});

result.sort((a,b)=>b.count-a.count);

const div = document.getElementById("ranking");

result.forEach((r,i)=>{
const p = document.createElement("p");
p.textContent = `${i+1}位 ${names[r.chapter]} : ${r.count}問ミス`;
div.appendChild(p);
});
