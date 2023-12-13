const tip: number = parseFloat(
  (<HTMLInputElement>document.getElementById("tip")).value
);
const sum: number = parseFloat(
  (<HTMLInputElement>document.getElementById("sum")).value
);

const numberOfFriends: number = parseFloat(
  (<HTMLInputElement>document.getElementById("numberOfFriends")).value
);

function calculateTip(sum: number, tip: number) {
  const total = sum * tip;

  return total;
}
//calculateTip(sum, tip);
const calculatedTip: number = calculateTip(sum, tip);
const total = sum + calculatedTip;

function divideTotal(total: number, numberOfFriends: number) {
  const sumDivided = total / numberOfFriends;
  return sumDivided;
}
//divideTotal(total, numberOfFriends);
const friendSum = divideTotal(total, numberOfFriends);

function showDividedSum(sum: number) {
  console.log(sum);
  document.getElementById("showSum").classList.toggle("hide");
  document.getElementById("inputForm").classList.toggle("hide");
  document.getElementById("friendSum").innerHTML = sum + " kr";
}
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    calculateTip(sum, tip);
    divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);
  });
