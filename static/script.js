const nextCardBtn = document.getElementById("nextCardBtn");
const prevCardBtn = document.getElementById("prevCardBtn");
const card = document.getElementById("card");
const body = document.querySelector("body");

let currentCardIndex = 0;
var cardData;

function fetchToBack() {
  const response = fetch("http://127.0.0.1:8000/get_data");
  return response.then((res) => res.json());
}

async function getDate() {
  try {
    cardData = await fetchToBack();
    updateCard();
  } catch (error) {
    console.log(error);
  }
}

function updateCard() {
  var currentCard = cardData[currentCardIndex];
  document.getElementById("word").innerText = currentCard.word;
  document.getElementById("meaning").innerText = currentCard.meaning;
}

function flipCard() {
  var cardInner = document.querySelector(".card-inner");
  cardInner.style.transform =
    cardInner.style.transform === "rotateY(180deg)"
      ? "rotateY(0deg)"
      : "rotateY(180deg)";
}

function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % cardData.length;
  updateCard();
  var cardInner = document.querySelector(".card-inner");
  cardInner.style.transform = "rotateY(0deg)";
}

function prevCard() {
  currentCardIndex = (currentCardIndex - 1 + cardData.length) % cardData.length;
  updateCard();
  var cardInner = document.querySelector(".card-inner");
  cardInner.style.transform = "rotateY(0deg)";
}

function keyPressHandler(e) {
  if (e.keyCode === 37 || e.key == "ArrowRight") {
    prevCard();
  } else if (e.keyCode === 39 || e.key == "ArrowLeft") {
    nextCard();
  } else if (e.key == " " || e.key == "Spacebar" || e.keyCode === 32) {
    flipCard();
  }
}

getDate();

body.addEventListener("keydown", keyPressHandler);

nextCardBtn.addEventListener("click", nextCard);

prevCardBtn.addEventListener("click", prevCard);

card.addEventListener("click", flipCard);

updateCard();
