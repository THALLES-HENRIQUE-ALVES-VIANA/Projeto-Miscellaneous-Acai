document.querySelector('.btn').addEventListener("click", problema);
function problema(){
    var problema = document.getElementById('problem').value;
    if(problema == ""){
        return false;
    }
    else{
        var text = "<h1>Agradecemos o feedback!</h1>";
        document.querySelector(".formAjuda").innerHTML = text;
    }
}
