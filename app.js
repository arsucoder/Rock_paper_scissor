let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // math.random()*n gives the range of random number till (n-1)
    // rock , paper , scissors
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner= (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose!");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genComputerChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissor" ? false : true;
      } else if (userChoice === "scissor"){
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});