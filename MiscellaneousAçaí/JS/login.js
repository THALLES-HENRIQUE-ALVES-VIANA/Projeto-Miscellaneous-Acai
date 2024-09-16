function validacao() {
    let x = document.forms["formLogin"]["email"].value;
    let y = document.forms["formLogin"]["senha"].value;
    if (x == "") {
        document.getElementById("email").style.borderColor = "red";
        if (y == ""){
            document.getElementById("senha").style.borderColor = "red";
            return false;
        }
        return false;
    }
    else{
        if (y == ""){
            document.getElementById("senha").style.borderColor = "red";
            return false;
        }
    }
}
