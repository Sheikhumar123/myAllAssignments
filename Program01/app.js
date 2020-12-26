

var temperature = +prompt("Enter temperature in celsius");
console.log(temperature)
if(typeof temperature == "number" ){
 
    temperature = (9/5) * temperature + 32 ;
    alert(temperature)
}else{
    alert("Enter numbers only");
};
