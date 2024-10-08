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