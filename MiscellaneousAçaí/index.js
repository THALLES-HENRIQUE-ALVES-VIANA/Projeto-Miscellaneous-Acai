var banner = document.querySelector('.carrossel');
var banners = [
    'imagens/img_carrossel1.png',
    'imagens/img_carrossel2.png'
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
