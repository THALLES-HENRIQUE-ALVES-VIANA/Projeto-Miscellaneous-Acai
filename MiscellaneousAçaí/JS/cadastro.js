function armazenarInfoLogin() {
    var puxarEmail = document.getElementById("email").value;    
    var puxarSenha = document.getElementById("senha").value;
    localStorage.setItem("email", puxarEmail);
    localStorage.getItem("email");    
    localStorage.setItem("senha", puxarSenha);
    localStorage.getItem("senha");
}
