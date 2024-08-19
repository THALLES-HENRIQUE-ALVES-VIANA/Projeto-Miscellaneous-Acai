var banner = document.querySelector('.carrossel');
var banners = [
    'imagens/acai.jpg',
    'imagens/suco_acai.jpg'
];

var bannerAtual = 0;

function trocaBanner(){
    bannerAtual++;
    if(bannerAtual == banners.length){
        bannerAtual = 0;
    }
    banner.src = banners[bannerAtual];
}
setInterval(trocaBanner, 2000); 
