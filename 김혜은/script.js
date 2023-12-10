var currentCardIndex = 0;
var cardData = [
  { word: "한자1", meaning: "뜻1" },
  { word: "한자2", meaning: "뜻2" },
  { word: "한자3", meaning: "뜻3" },
  { word: "한자4", meaning: "뜻4" },
  { word: "한자5", meaning: "뜻5" },
];

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

updateCard();
