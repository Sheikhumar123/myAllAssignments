

var sub1 = +prompt("Enter first subject number");
var sub2 = +prompt("Enter second subject number");
var sub3 = +prompt("Enter third subject number");

if (sub1 <= 100 && sub2 <= 100 && sub3 <= 100) {
    var average = (sub1 + sub2 + sub3) / 3
    if (average >= 80) {
        alert("You are above standard , admission granted");

    } else {
        alert("better luck next time ");

    }
} else {
    alert("Enter marks In right format")

}
