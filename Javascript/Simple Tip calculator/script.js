cd /*External JS*/
function tipCalculate() {
    var bill = document.getElementById("billamount").value;
    var performance = document.getElementById("performance_rating").value;
    var numpeople = document.getElementById("people").value;
    var total = (bill * performance) / numpeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    if ()
    document.getElementById("total").innerHTML = total;
    document.getElementById("result").style.display = "block";
}
//Hide the result:
document.getElementById("result").style.display = "none";
//Click button to show result:
document.getElementById("calculate").onclick = function () {
    tipCalculate();
}