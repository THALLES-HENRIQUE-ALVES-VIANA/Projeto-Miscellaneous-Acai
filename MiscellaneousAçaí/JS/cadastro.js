var email = document.getElementById("email");
var confirmarEmail = document.getElementById("confirmarEmail");
var senha = document.getElementById("senha");
var confirmarSenha = document.getElementById("confirmarSenha");

function elementos(){
  var validado = [];
  validado.push(validacao(email));
  validado.push(validacao(senha));
  validado.push(validacao(confirmarEmail));
  validado.push(validacao(confirmarSenha));
  validado.push(confirmar(email, confirmarEmail));
  validado.push(confirmar(senha, confirmarSenha));
  validado.push(validarSenha());
  for(var i = 0; i<validado.length; i++){
    if(validado[i] == false){
      i = validado.length + 1;
      return false;
    }
  }
  if(i == validado.length){
    return proxima();
  }
  armazenarInfoLogin();
}

function validacao(termo){
  if(termo.value == ""){
    termo.style.borderColor = "red";
    return false;
  }
}

function confirmar(campo1, campo2){
  if(campo1.value != campo2.value){
    campo1.style.borderColor = "red";
    campo2.style.borderColor = "red";
    document.getElementById(campo2.id + "p").style.color = "red";
    document.getElementById(campo2.id + "p").innerHTML = "Os campos são diferentes";
    return false;
  }
}

function validarSenha(){
  var caracteres = senha.value.split("");
  var maiuscula = false;
  const caracteresEspeciais = [".", "!", "#", "$", "%", "&", "/", "-"];
  var especial = false;
  const numeros = ["0","1","2","3","4","5","6","7","8","9"];
  var num = false;
  var x = [];

  if(caracteres.length < 8){
    document.getElementById("totalCaracteres").style.color = "red";
    falso()
  }
  for(var a = 0; a<caracteres.length; a++){
    if(caracteres[a] === caracteres[a].toUpperCase()){
      x.push(caracteres[a]);
    }
    for(var e = 0; e<numeros.length; e++){
      if(caracteres[a] === numeros[e]){
        num = true;
        x.splice(x.indexOf(caracteres[a]));
      }
    }
    for(var u = 0; u<caracteresEspeciais.length; u++){
      if(caracteres[a] === caracteresEspeciais[u]){
        especial = true;
        x.splice(x.indexOf(caracteres[a]));
      }
    }
  }
  if(x > 0){
    maiuscula = true;
  }

  if(maiuscula === false){
    document.getElementById("maiuscula").style.color = "red";
    falso()
  }
  if(especial === false){
    document.getElementById("caractereEspecial").style.color = "red";
    falso()
  }
  if(num === false){
    document.getElementById("numero").style.color = "red";
    falso()
  }

  function falso(){
    senha.style.borderColor = "red";
    return false;
  }
}

/*
  função validacao: verifica se o campo está preenchido, se não retorna falso
  função confirmar: verifica se os campos de confirmação são iguais, se não retorna falso
  função elementos: chama a função valicacao e confirmar para cada campo e puxa para um array
  após isso é verificado se dentro do vetor há algum elemento falso, se tiver
  é chamada a função proxima
  função validarSenha: verifica se a senha do usuário possui letra maiúscula, mais de 8
  caracteres, número e caractere especial
*/ 

var nome = document.getElementById("nome");
var cpf = document.getElementById("cpf");
var tel = document.getElementById("telefone");

function final(){
  var validado2 = [];
  validado2.push(validacao(nome));
  validado2.push(validacao(cpf));
  validado2.push(validacao(telefone));
  for(var r = 0; r<validado2.length; r++){
    if(validado2[r] == false){
      r = validado2.length + 1;
      return false;
    }
  }
  if(r == validado2.length){
    return true;
  }
}

/*
  função final: valida a última parte do cadastro
*/

function proxima(){
    document.getElementById("first-pg").remove();
}

window.addEventListener("keydown", tecla);
function tecla (event) {
    if(event.key == "Enter"){
        armazenarInfoLogin();
    }
};

/*função proxima: segue para as outras informações de cadastro
  função tecla: programa a tecla "enter" do teclado para executar a função proxima;
*/

function armazenarInfoLogin(){
    var puxarEmail = document.getElementById("email").value;    
    var puxarSenha = document.getElementById("senha").value;
    localStorage.setItem("email", puxarEmail);
    localStorage.getItem("email");    
    localStorage.setItem("senha", puxarSenha);
    localStorage.getItem("senha");
}
/*
  Function armazenarInfoLogin: Armazena as informações de login
  digitadas pelo usuario no armazenamento local
*/ 
