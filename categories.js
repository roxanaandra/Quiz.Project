let mathematics = document.getElementById("mathematics");

mathematics.addEventListener("click", onClickMathematics);

function onClickMathematics() {
  window.location.href = "quiz.html?category=mathematics";
}

let generalKnowledge = document.getElementById("generalknowledge");

generalKnowledge.addEventListener("click", onClickGeneralKnowledge);

function onClickGeneralKnowledge() {
    window.location.href = "quiz.html?category=generalKnowledge";
}


let history = document.getElementById("history");

history.addEventListener("click", onClickHistory);

function onClickHistory() {
    window.location.href = "quiz.html?category=history";
}


let astronomy = document.getElementById("astronomy");

astronomy.addEventListener("click", onClickAstronomy);

function onClickAstronomy() {
    window.location.href = "quiz.html?category=astronomy";
}