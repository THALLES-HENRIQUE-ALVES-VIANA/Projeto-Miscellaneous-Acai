function armazenarInfoLogin() {
    var puxarEmail = document.getElementById("email").value;    
    var puxarSenha = document.getElementById("senha").value;
    localStorage.setItem("email", puxarEmail);
    localStorage.setItem("senha", puxarSenha);
}
/*
  Function armazenarInfoLogin: Armazena as informações de login
  digitadas pelo usuario no armazenamento local
*/ 
function proxima(){
    document.getElementById("first-pg").remove();
}

window.addEventListener("keydown", tecla);
function tecla (event) {
    if(event.key == "Enter"){
        proxima();
    }
};
/*função proxima: segue para as outras informações de cadastro
  função tecla: programa a tecla "enter" do teclado para executar a função proxima;
*/
