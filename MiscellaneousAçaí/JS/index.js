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

function produto(item){
    localStorage.setItem("produto", item);
}

/*
Const ctx = seleciona o gráfico
new Chart = cria um novo gráfico
type, data, options são configurações do grafico, sendo:
    type: tipo de gráfico
    data: os dados do gráfico
    options: configurações gerais do gráfico.
*/
const ctx = document.getElementById('graficoMelhorAvaliados');

new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Copo simples', 'Copo com morango', 'Copo com banana', 'Combo', 'Combo com leite condensado', 'Barca', 'Vitamina de açai'],
        datasets: [
        {
            label: 'Rio de Janeiro',
            data: [3,4.8,5,4.5,5,3.5,3],
            backgroundColor: 'rgba(200,0,100,0.2)',
            borderWidth: 1
        },
        {
            label: 'São Paulo',
            data: [4.5,4,4,5,3,5,2],
            backgroundColor: 'rgba(100,0,200,0.2)',
            borderWidth: 1
        },
        {
            label: 'Espirito Santo',
            data: [3.5,5,4,4,3,2,1],
            backgroundColor: 'rgba(200,0,0,0.2)',
            borderWidth: 1
        },
        {
            label: 'Minas Gerais',
            data: [1,4,5,3,5,4.8,3],
            backgroundColor: 'rgba(0,0,200,0.5)',
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

