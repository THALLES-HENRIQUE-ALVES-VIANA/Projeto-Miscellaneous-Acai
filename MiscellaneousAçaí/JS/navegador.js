const produtos = [
    "tradicional no copo",
    "complementos personalizados",
    "para presentear",
    "trufado",
    "açaí puro",
    "açaí com sorvete",
    "zero açúcar",
    "Sorvete com complementos",
    "suco de açaí",
    "vitamina de açaí",
    "tigela de 1L",
    "barca",
    "copo simples",
    "copo com morango",
    "copo com banana",
    "combo"
];
function pesquisar() {
    let termo = document.getElementById('urlInput').value;
    
    let resultados = produtos.filter(item => item.toLowerCase().includes(termo));    
    
    let resultadoDiv = document.getElementById('resultados');
    
    if (resultados.length > 0) {
       resultados.map(item => document.getElementById(item.split(" ").join("-")).style.display = "flex");
    } else {
        resultadoDiv.innerHTML = "<h3>Nenhum produto encontrado</h3>";
    }
}

window.addEventListener("keydown", function (event) {
    if(event.key == "Enter"){
        pesquisar();
    }
});
