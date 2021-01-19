


function validuid() {

    var id = document.getElementById("uid").value.length;
    console.log(id);
    if (id >= 5 && id <= 12) {
        console.log("sucess")
        var euid = document.getElementById("euid");
        euid.innerHTML = ""

    } else {
        var euid = document.getElementById("euid");
        euid.innerHTML = "please enter right user ID"
    }

}
function validpass() {
    var id = document.getElementById("pass").value.length;
    console.log(id);
    if (id >= 6 && id <= 12) {
        console.log("sucess");
        var epass = document.getElementById("epass");
        epass.innerHTML = ""

    } else {
        console.log("fail");
        var epass = document.getElementById("epass");
        epass.innerHTML = "please enter right password"
    }
}

function validname() {
    var id = document.getElementById("name").value;
    var letters = /^[A-Za-z]+$/;
    console.log(id);
    if (id.match(letters)) {
        console.log("sucess");
        var epass = document.getElementById("ename");
        epass.innerHTML = ""

    } else {
        console.log("fail");
        var epass = document.getElementById("ename");
        epass.innerHTML = "please enter alphabets only";
    }
}

function validzip() {
    var id = document.getElementById("zip").value;
    var numbers = /^[0-9]+$/;
    console.log(id);
    if (id.match(numbers)) {
        console.log("sucess");
        var ezip = document.getElementById("ezip");
        ezip.innerHTML = ""

    } else {
        console.log("fail");
        var ezip = document.getElementById("ezip");
        ezip.innerHTML = "please enter numbers only";
    }
}

function validemail() {
    var id = document.getElementById("email").value;
    console.log(id);
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (id.match(mailformat)) {
        console.log("sucess");
        var eemail = document.getElementById("eemail");
        eemail.innerHTML = ""

    } else {
        console.log("fail");
        var eemail = document.getElementById("eemail");
        eemail.innerHTML = "please enter right email address";
    }
}

function validall() {


    validuid();
    validpass();
    validname();
    validemail();


    function validsex() {




        var id = document.getElementsByName("sex");

        console.log(id)
        if ((id[0].checked == false) && (id[1].checked == false)) {
            console.log("bye");
            var esex = document.getElementById("esex");
            esex.innerHTML = "please select your gender";
        }else{
            console.log("hy");
            var esex = document.getElementById("esex");
            esex.innerHTML = "";

        }
        // if (id.value. == "male" || id.value || "female") {
        //     console.log("hy");
        //     var esex = document.getElementById("esex");
        //     esex.innerHTML = "";


        // } else {
        //     console.log("bye");
        //     var esex = document.getElementById("esex");
        //     esex.innerHTML = "please select ";

        // }

    }
    validsex()

}

function validsex() {

    var id = document.getElementsByName("sex");

        console.log(id)
        if ((id[0].checked == false) && (id[1].checked == false)) {
            console.log("bye");
            var esex = document.getElementById("esex");
            esex.innerHTML = "please select your gender";
        }else{
            console.log("hy");
            var esex = document.getElementById("esex");
            esex.innerHTML = "";

        }

}

