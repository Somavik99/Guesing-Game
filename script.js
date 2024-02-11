const GuessingNumber = document.getElementById("guess");
const CheckButton = document.getElementById("Check__btn");
const TextOutput = document.getElementById("Guess__text");
const TotalTrial = document.getElementById("Total__Trial");
const CloseEvent = document.getElementById("Close__popup");

let NumberLimit = 20;
let RandomNumber = Math.floor(Math.random() * NumberLimit);
let TrialValue = 10;
let NewTrialValue = TrialValue;
TotalTrial.textContent = NewTrialValue;

CheckButton.addEventListener("click", function () {
  const NumberInputValue = document.getElementById("Num__input").value;
  CheckValueEquality(NumberInputValue);
  NewTrialValue === 0
    ? ((CheckButton.disabled = true),
      (document.getElementById("Pop__up").style.display = "block"))
    : (CheckButton.disabled = false);
});

CloseEvent.addEventListener("click", function () {
  document.getElementById("Pop__up").style.display = "none";
});

function CheckValueEquality(value) {
  NewTrialValue -= 1;
  TotalTrial.textContent = NewTrialValue;
  if (value === RandomNumber.toString()) {
    GuessingNumber.textContent = RandomNumber;
    GuessingNumber.style.background = "green";
    document.getElementById("Highest_Score").textContent = NewTrialValue;
    TextOutput.textContent = "Congratulations...";
  } else if (value > RandomNumber) {
    GuessingNumber.textContent = "?";
    TextOutput.textContent = "Too High...!";
  } else if (value < RandomNumber) {
    GuessingNumber.textContent = "?";
    TextOutput.textContent = "Too Low...!";
  } else if (value === "") {
    GuessingNumber.textContent = "?";
    TextOutput.textContent = "Start Guessing...!";
  }
}
