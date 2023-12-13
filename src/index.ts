function calculateTip(sum: number, tip: number) {
  const total = sum * tip;

  return total;
}

function divideTotal(total: number, numberOfFriends: number) {
  const sumDivided = total / numberOfFriends;
  return sumDivided;
}
function showDividedSum(sum: number) {
  console.log(sum);
  document.getElementById("showSum").classList.toggle("hide");
  document.getElementById("inputForm").classList.toggle("hide");
  document.getElementById("friendSum").innerHTML = sum + " kr";
}

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const tip: number = parseFloat(
      (<HTMLInputElement>document.getElementById("tip")).value
    );
    const sum: number = parseFloat(
      (<HTMLInputElement>document.getElementById("sum")).value
    );

    const numberOfFriends: number = parseFloat(
      (<HTMLInputElement>document.getElementById("numberOfFriends")).value
    );

    const calculatedTip: number = calculateTip(sum, tip);
    const total = sum + calculatedTip;
    const friendSum = divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);
  });
