document.querySelector('.btn').addEventListener("click", problema);
function problema(){
    var caixaTexto = document.getElementById('problem').value;
    if(caixaTexto == ""){
        return false;
    }
    else{
        var text = "<h1>Agradecemos o feedback!</h1>";
        document.querySelector(".formAjuda").innerHTML = text;
    }
}

window.addEventListener("keydown", function (event) {
    if(event.key == "Enter"){
        problema();
    }
});
