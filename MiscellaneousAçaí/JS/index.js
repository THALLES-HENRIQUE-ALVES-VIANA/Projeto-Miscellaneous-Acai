var banner = document.querySelector('.carrossel');
var banners = [
    '../imagens/img_carrossel1.png',
    '../imagens/img_carrossel2.png'
];

var bannerAtual = 0;
var bannerAtual2 = banners.length - 1;

function trocaBanner(){
    bannerAtual++;
    if(bannerAtual == banners.length){
        bannerAtual = 0;
    }
    banner.src = banners[bannerAtual];
    bannerAtual2 = bannerAtual;
}

function voltaBanner(){
    bannerAtual2--;
    if(bannerAtual2 == -1){
        bannerAtual2 = banners.length - 1;
    }
    banner.src = banners[bannerAtual2];
    bannerAtual = bannerAtual2;
}

function popup(){
    document.querySelector(".pop-up").remove();
}

/*aceito() = Aceita os cookies e junto com a função apagar(), faz com que a mensagem não apareça mais
  nego() = Nega os cookies e junto com a função apagar(), faz com que a mensagem não apareça mais
  apagar() = Remove a mensagem de cookies*/
function aceitar(){  
    localStorage.setItem("cookies", "apagado");
    apagar();
}

function negar(){
    localStorage.clear()
    localStorage.setItem("cookies", "apagado");
    apagar();
}

function apagar(){
    if(localStorage.getItem("cookies") == "apagado"){
        document.querySelector(".cookies-contorno").remove();
    }
}

document.addEventListener("DOMContentLoaded", apagar());
