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
];  // define um array chamado produtos com uma lista do nosso cardápio  

function pesquisar() {
    // é chamada sempre que o usuário digitar no campo e verifica se o nome de cada produto tem o texto da busca 
    
    let termo = document.getElementById('urlInput').value;
    // captura oq foi inserido pelo usuário com campo de entrada id URL input
    
    let resultados = produtos.filter(item => item.toLowerCase().includes(termo));    
     // filtra os produtos e encontra os que tem o termo digitado
    
    let resultadoDiv = document.getElementById('resultados');
   //  onde os resultados vão ser exibidos 
    
    if (resultados.length > 0) {
        // ver se tem produtos correspondentes 
        
       resultados.map(item => document.getElementById(item.split(" ").join("-")).style.display = "flex"); // p cada produto que for encontrado muda o estilo do elemento correspondente p ser exibido 
    } else {
        resultadoDiv.innerHTML = "<h3>Nenhum produto encontrado</h3>";
    }
} 
// se nada for encontrado vai exibir uma mensagem mostrando que não tem resultados

window.addEventListener("keydown", function (event) {
    if(event.key == "Enter"){
        pesquisar();
    }
});
// detectar quando apertar uma tecla, se o enter for pressionado chama a ficar pesquisar e realiza a busca 
