const left = document.getElementsByClassName("left");
const word = document.getElementById("word");
const right = document.getElementsByClassName("right");

const front = document.getElementsByClassName("word__front");
const back = document.getElementsByClassName("word__back");

const word_front_list = [단어1, 단어2, 단어3];
const word_back_list = [뜻1, 뜻2, 뜻3];

word.addEventListener("click", onClickWord);

function onClickWord() {
  word.classList.toggle("flip_card");
}
