var produto = document.getElementById("nome-produto");
var imagem = document.getElementById("imagem-produto");
var preco = document.getElementById("preco");

document.addEventListener("DOMContentLoaded", pagina());

function pagina(){
    switch(localStorage.getItem("produto")){
        case "combo":
            produto.innerHTML = "Combo";
            imagem.src = "../imagens/combo.jpg";
            preco.innerHTML = "R$50,00";
        break;
        case "barca":
            produto.innerHTML = "Barca";
            imagem.src = "../imagens/barca.jpeg";
            preco.innerHTML = "R$65,00";
        break;
        case "leiteCondensado":
            produto.innerHTML = "Combo Com Leite Condensado";
            imagem.src = "../imagens/combo leitecondensado.png";
            preco.innerHTML = "R$40,00";
        break;
    }
}
