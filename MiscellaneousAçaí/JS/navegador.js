const produtos = [
    "copo simples",
    "copo com morango",
    "copo com banana",
    "combo",
    "combo-leite-condensado",
    "barca",
    "vitamina"
];  // define um array chamado produtos com uma lista do nosso cardápio  

function pesquisar() {
    // é chamada sempre que o usuário digitar no campo e verifica se o nome de cada produto tem o texto da busca 
    
    let termo = document.getElementById('urlInput').value;
    // captura oq foi inserido pelo usuário com campo de entrada id URL input
    
    let resultados = produtos.filter(item => item.toLowerCase().includes(termo));    
     // filtra os produtos e encontra os que tem o termo digitado
    
    let resultadoDiv = document.getElementById('resultados');
   //  onde os resultados vão ser exibidos 

    let nenhum = document.getElementById("nenhum-resultado");

    for(var i = 0; i < resultadoDiv.children.length; i++){
        resultadoDiv.children[i].style.display = "none";
    }
    // ciclo de repetição para excluir todos os nós filhos do id "resultados"
    
    if (resultados.length > 0) {
       // ver se tem produtos correspondentes
       document.getElementById("rodape").style.position = "relative";
       nenhum.style.display = "none";
       resultados.map(item => document.getElementById(item.split(" ").join("-")).style.display = "flex"); // p cada produto que for encontrado muda o estilo do elemento correspondente p ser exibido 
    } else {
        document.getElementById("rodape").style.position = "absolute";
        document.getElementById("rodape").style.bottom = 0;
        nenhum.style.display = "flex";
    }
} 
// se nada for encontrado vai exibir uma mensagem mostrando que não tem resultados

window.addEventListener("keydown", function (event) {
    if(event.key == "Enter"){
        pesquisar();
    }
});
// detectar quando apertar uma tecla, se o enter for pressionado chama a ficar pesquisar e realiza a busca 
