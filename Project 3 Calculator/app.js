

function getNumber(num) {
    var result = document.getElementById('result');
    result.value += num

}
function clearResult() {
    var clear = document.getElementById('result');

    result.value = ""
     

}
function getResult(){
    var result = document.getElementById('result');
    result.value = eval(result.value);
    console.log(result.value)
}
// function backOneStep(){
//     var result = document.getElementById('result');
//     result.value = result.value.length -1;
//     // result.value = result.value.chop(result.value); 
//     // var b = result.value.toString();
//     // var c = pop(b);
//     console.log(result.value)

// }