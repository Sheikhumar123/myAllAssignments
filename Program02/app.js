

var height = +prompt("Enter height in Inches")

if(typeof height == "number"){
    height = height * 2.54;
    console.log(height);
}else{
    console.log("Enter number only");
};