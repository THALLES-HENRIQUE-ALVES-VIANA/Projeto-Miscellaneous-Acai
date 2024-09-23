function validacao() {
    let email = document.forms["formLogin"]["email"].value;
    let senha = document.forms["formLogin"]["senha"].value;
    if (email == "") {
        document.getElementById("email").style.borderColor = "red";
        if (senha == ""){
            document.getElementById("senha").style.borderColor = "red";
            return false;
        }
        return false;
    }
    else{
        if (senha == ""){
            document.getElementById("senha").style.borderColor = "red";
            return false;
        }
    }
}

window.addEventListener("keydown", function (event) {
    if(event.key == "Enter"){
        validacao();
    }
});
