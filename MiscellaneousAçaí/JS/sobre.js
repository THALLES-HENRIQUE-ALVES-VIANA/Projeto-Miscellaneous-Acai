let h2 = document.querySelector("h2");// seleciona o elemento h2
function sucesso(pos){//função de sucesso
    console.log(pos.coords.latitude, pos.coords.longitude);//coordenadas
    h2.textContrnt = "Latitude:${pos.coords.latitude} Longitude:${pos.coords.longitude}";//altera o conteudo

    var map = L.map('map').setView([51.505, -0.09], 13);// cria o mapa

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);  //adiciona o mapa

L.marker([51.5, -0.09]).addTo(map)  //adiciona um marcador
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')  //adiciona um pop-up
    .openPopup();           //abre o pop-up

}

function erro(err){  //função de erro      
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(sucesso, erro, { //inicia a localização
    enableHighAccuracy: true,//ativa a precisão
    timeout: 5000 //tempo de espera  
})
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o título e os parágrafos
    const sectionTitle = document.querySelector("h1");
    const paragraphs = document.querySelectorAll("main p");

    // Efeito de fade-in para o título
    sectionTitle.style.opacity = 0;
    setTimeout(() => {
        sectionTitle.style.transition = "opacity 1s";
        sectionTitle.style.opacity = 1;
    }, 100);

    // Efeito de fade-in para os parágrafos
    paragraphs.forEach((p, index) => {
        p.style.opacity = 0;
        setTimeout(() => {
            p.style.transition = "opacity 1s";
            p.style.opacity = 1;
        }, 500 + index * 500);
    });
});
