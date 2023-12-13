function calculateTip(sum, tip) {
    const total = sum * tip;
    return total;
}
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}
function showDividedSum(sum) {
    console.log(sum);
    document.getElementById("showSum").classList.toggle("hide");
    document.getElementById("inputForm").classList.toggle("hide");
    document.getElementById("friendSum").innerHTML = sum + " kr";
}
document
    .getElementById("calculateButton")
    .addEventListener("click", function () {
    const tip = parseFloat(document.getElementById("tip").value);
    const sum = parseFloat(document.getElementById("sum").value);
    const numberOfFriends = parseFloat(document.getElementById("numberOfFriends").value);
    const calculatedTip = calculateTip(sum, tip);
    const total = sum + calculatedTip;
    const friendSum = divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);
});
