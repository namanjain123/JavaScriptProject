let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const newMessage = function (message) {
  return (document.querySelector(".message").textContent = message);
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    newMessage("Please Write the number");

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number ✅";
    newMessage("Correct Number Congo ");
    score++;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
        newMessage(guess > secretNumber ? "Number is Lower" : "Number is Higher");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost all the Chances";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  // Reset score & secret number
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset Message, secretNumber, Score & Guess in DOM
  newMessage("Start guessing");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "10";
  // document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".guess").value = "";

  // Reset background and width in DOM
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
});