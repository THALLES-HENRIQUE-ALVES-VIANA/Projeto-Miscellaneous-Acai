function validacaoprenchido() {
    let x = document.forms["email"].value;
    let y = document.forms["senha"].value;
    let z = document.forms["email-confirmar"];
    let w = document.forms["senha-confirmar"];

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

   function verificacao () {
     if (x == z) {
        return true;
     }
else {
    alert ("Os emails não estão iguais.")
}
        
   }

   document.getElementById('button').addEventListener('click', function verificacao)

