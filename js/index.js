const choiceOptions = {
  "rock": "./assets/img/rock.png",
  "paper": "./assets/img/paper.png",
  "scissors": "./assets/img/scissors.png"
}

let SCORE = 0;

const userChoice = (choice) =>
{
  console.log(choice);
  let choices = document.querySelector(".choices");
  choices.style.display = "none";

  let match = document.querySelector(".match");
  match.style.display = "flex";

  document.getElementById("userPickImg").src = choiceOptions[choice];

  pickComputerHand(choice);
};

const pickComputerHand = (choice) =>
{
  let choices = ["rock", "paper", "scissors"];
  let cpChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("computerChoiceImg").src = choiceOptions[cpChoice]

  result(choice, cpChoice);
};

const result = (userchoice, cpChoice) =>
{
  if (userchoice == "paper" && cpChoice == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (userchoice == "paper" && cpChoice == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userchoice == "paper" && cpChoice == "paper") {
    setDecision("Equalize!!");
  }
  if (userchoice == "rock" && cpChoice == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userchoice == "rock" && cpChoice == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userchoice == "rock" && cpChoice == "rock") {
    setDecision("Equalize!!");
  }
  if (userchoice == "scissors" && cpChoice == "scissors") {
    setDecision("Equalize!");
  }
  if (userchoice == "scissors" && cpChoice == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userchoice == "scissors" && cpChoice == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restart = () =>
{
  let match = document.querySelector(".match");
  match.style.display = "none";

  let choices = document.querySelector(".choices");
  choices.style.display = "flex";
}

const setDecision = (decision) =>
{
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) =>
{
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}
