
var number = +prompt("Enter any number");

if (number === 1) {
    alert(number + " is a prime number");
}
else if (number === 2) {
    alert(number + " is a prime number");
}
else if (typeof number == "number") {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            alert(number + " is not a prime number");
            break;
        }else{
            alert(number + " Is a prime number")
            break;
        }
    }
}else{
    alert("is a prime number")
}      
        


