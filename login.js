var x = document.getElementById("email").value;
var y = document.getElementById("senha").value;
function verificacao(){
    if(x == "" || y == ""){
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("senha").style.borderColor = "red";
    }
}
