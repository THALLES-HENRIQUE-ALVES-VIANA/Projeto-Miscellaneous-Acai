document.querySelector('.btn').addEventListener("click", problema);
function problema(){
    var x = document.getElementById('problem').value;
    if(x == ""){
        return false;
    }
    else{
        var text = "<h1>Agradecemos o feedback!</h1>";
        document.querySelector(".formAjuda").innerHTML = text;
    }
}