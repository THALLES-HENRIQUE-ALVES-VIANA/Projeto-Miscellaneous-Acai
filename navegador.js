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
    "barca"
];
function pesquisar() {
    let termo
    
 document.getElementById('urlInput').value.toL
    werCase();
    
    let resultados = produtos.filter(item => item.toLowerCase().includes(termo));    
    
    let resultadoDiv = document.getElementById('resultados');
    
    if (resultados.length > 0) {
        resultadoDiv.innerHTML = "<h3>Produtos encontrados:</h3><ul>" + resultados.map(item => "<li>" + item + "</li>").join('') + "</ul>";
    } else {
    
        resultadoDiv.innerHTML = "<h3>Nenhum produto encontrado</h3>";
    }
}
