const tip = parseFloat(document.getElementById("tip").value);
const sum = parseFloat(document.getElementById("sum").value);
const numberOfFriends = parseFloat(document.getElementById("numberOfFriends").value);
function calculateTip(sum, tip) {
    const total = sum * tip;
    return total;
}
//calculateTip(sum, tip);
const calculatedTip = calculateTip(sum, tip);
const total = sum + calculatedTip;
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}
//divideTotal(total, numberOfFriends);
const friendSum = divideTotal(total, numberOfFriends);
function showDividedSum(sum) {
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
