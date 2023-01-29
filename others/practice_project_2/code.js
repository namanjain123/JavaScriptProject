//Selecttion of the elements
const score_0 = document.getElementById("score--0");//player 1 score
const score_1 = document.getElementById("score--1");//player 2 score
const current_0 = document.getElementById("current--0");//player 1 current
const current_1 = document.getElementById("current--1");//player 2 current
const player_0 = document.querySelector(".player--0");//player 1
const player_1 = document.querySelector(".player--1");//player 2

// button and other object selector
const diceEl = document.querySelector(".dice");//css ediitor
//buttons
const New = document.querySelector(".btn--new");
const Roll = document.querySelector(".btn--roll");
const Hold = document.querySelector(".btn--hold");

// a score and playing one to be selected on these
let score,currentscore,activePlayer,playing;
// initial steup of the score and others
const init = function () {
    score = [0, 0];
    currentscore = 0;
    activePlayer = 0;
    playing = true;
  
    score_0.textContent = 0;
    score_1.textContent = 0;
    current_0.textContent = 0;
    current_1.textContent = 0;
  
    diceEl.classList.add("hidden");
    player_0.classList.remove("player--winner");
    player_1.classList.remove("player--winner");
    player_0.classList.add("player--active");
    player_1.classList.remove("player--active");
    console.log("new Game");
  };
  //call them
  init();
  
  // switch player function to change the user
  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentscore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // case to switch that is there to other when chnage
    player_0.classList.toggle("player--active");
    player_1.classList.toggle("player--active");
  };
  
  // Rolling dice functionality to the roll function
  Roll.addEventListener("click", function () {
    // see if it is playing
    if (playing) {
      // random roll dies
      const dice = Math.trunc(Math.random() * 6) + 1;
      console.log(dice);
  
      // 2. Display the dice
      diceEl.classList.remove("hidden");
      diceEl.src = `./images/dice-${dice}.png`;
  
      // 3. Check for rolled 1: If true, switch to next player
      if (dice !== 1) {
        // Add dice to current score
        currentscore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentscore;
      } else {
        // Switch to next player
        switchPlayer();
      }
    }
  });
  
  Hold.addEventListener("click", function () {
    if (playing) {
      // 1. Add current score to active player's score
      score[activePlayer] += currentscore;
  
      // scores[1] = scores[1] + currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        score[activePlayer];
  
      // 2. Check if player's score is >= 100
      if (score[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add("hidden");
        // Finish the game
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove("player--active");
      } else {
        // Switch to next player.
        switchPlayer();
      }
    }
  });
  // Reset the game
  New.addEventListener("click", init);
