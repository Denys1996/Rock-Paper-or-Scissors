// Arrow function syntax for the user choose
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      return "Error, either Rock, Paper or Scissors";
    }
  };
  // Computer Make a Choice
  const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (number === 0) {
      computerChoice = "rock";
      return computerChoice;
    } else if (number === 1) {
      computerChoice = "paper";
      return computerChoice;
    } else if (number === 2) {
      computerChoice = "scissors";
      return computerChoice;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game is a Tie!!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The COMPUTER Won!!";
      }
      return "The USER Won!!";
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The COMPUTER Won!!";
      }
      return "The USER Won!!";
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "The COMPUTER Won!!";
      }
      return "The USER Won!!";
    }
  
    if(userChoice === "bomb") {
      return "The USER Always Wins with a BOMB!!"
    }
  };
  
  const playGame = function() {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  //console.log(getUserChoice("gskhsj"));
  //console.log(getComputerChoice());
  //console.log(determineWinner("paper", "rock"));
  