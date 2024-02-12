const GuessingNumber = document.getElementById("guess");
const CheckButton = document.getElementById("Check__btn");
const TextOutput = document.getElementById("Guess__text");
const TotalTrial = document.getElementById("Total__Trial");
const CloseEvent = document.getElementById("Close__popup");
const AgainEvent = document.getElementById("Again__event");

let NumberLimit = 20;
//Creating A Random Number
let RandomNumber = Math.floor(Math.random() * NumberLimit + 1);
console.log(RandomNumber);
//
let TrialValue = 10;
let NewTrialValue = TrialValue;
TotalTrial.textContent = NewTrialValue;
let HighScore;

// Check button event
CheckButton.addEventListener("click", function () {
  const NumberInputValue = document.getElementById("Num__input").value;
  CheckValueEquality(NumberInputValue);
  if (NewTrialValue > HighScore) {
    document.getElementById("Highest_Score").textContent = HighScore;
  }
  NewTrialValue === 0
    ? ((CheckButton.disabled = true),
      (AgainEvent.disabled = true),
      (document.getElementById("Pop__up").style.display = "block"))
    : (CheckButton.disabled = false);
});

function CheckValueEquality(value) {
  NewTrialValue -= 1;
  TotalTrial.textContent = NewTrialValue;
  if (value === RandomNumber.toString()) {
    GuessingNumber.textContent = RandomNumber;
    GuessingNumber.style.background = "green";
    HighScore = NewTrialValue;
    document.getElementById("Highest_Score").textContent = HighScore;
    TextOutput.textContent = "Congratulations 👍...";
    TextOutput.style.color = "green";
  } else if (value > RandomNumber) {
    GuessingNumber.textContent = "?";
    TextOutput.textContent = "Too High...!";
    TextOutput.style.color = "white";
  } else if (value < RandomNumber) {
    GuessingNumber.textContent = "?";
    TextOutput.textContent = "Too Low...!";
    TextOutput.style.color = "white";
  } else if (value === "") {
    GuessingNumber.textContent = "?";
    TextOutput.textContent = "No Number...!";
  }
}

// Popup close button
CloseEvent.addEventListener("click", function () {
  document.getElementById("Pop__up").style.display = "none";
  AgainEvent.disabled = false;
});

// Game restart button

AgainEvent.addEventListener("click", function () {
  RestartGame();
});

function RestartGame() {
  TextOutput.textContent = "Start Guessing...!";
  TextOutput.style.color = "white";
  CheckButton.disabled = false;
  RandomNumber = Math.floor(Math.random() * NumberLimit + 1);
  console.log(RandomNumber);
  GuessingNumber.textContent = "?";
  GuessingNumber.style.background = "rgb(205, 53, 53)";
  NewTrialValue = 10;
  TotalTrial.textContent = NewTrialValue;
  document.getElementById("Num__input").value = "";
  // console.log(RandomNumber);
}
