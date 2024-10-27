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

function verificarInfoLogin(){
    var puxarEmail = document.getElementById("email").value;    
    var puxarSenha = document.getElementById("senha").value;
    if(puxarEmail == localStorage.getItem("email") & puxarSenha == localStorage.getItem("senha")){
        window.location = "../HTML/index.html"
    } else if(puxarEmail != localStorage.getItem("email") & puxarSenha == localStorage.getItem("senha")){
        document.getElementById("verificacaoEmail").style.display = 'block';
        document.getElementById("verificacaoSenha").style.display = 'none';
        document.getElementById("verificacaoEmailESenha").style.display = 'none';
    } else if(puxarEmail == localStorage.getItem("email") & puxarSenha != localStorage.getItem("senha")){
        document.getElementById("verificacaoEmail").style.display = 'none';
        document.getElementById("verificacaoSenha").style.display = 'block';
        document.getElementById("verificacaoEmailESenha").style.display = 'none';
    } else if(puxarEmail != localStorage.getItem("email") & puxarSenha != localStorage.getItem("senha")){
        document.getElementById("verificacaoEmail").style.display = 'none';
        document.getElementById("verificacaoSenha").style.display = 'none';
        document.getElementById("verificacaoEmailESenha").style.display = 'block';
    }
}

/*
Function verificarInfoLogin: Pega o e-mail e senha digitados nos campos respectivos, e compara se estão de acordo com os e-mail e senha armazenados no localStorage.
Caso esteja certo redireciona o usuario para a tela ínicial novamente.
Caso não esteja exibe uma mensagem diferente para cada erro (errar senha, errar e-mail e errar os dois).
*/