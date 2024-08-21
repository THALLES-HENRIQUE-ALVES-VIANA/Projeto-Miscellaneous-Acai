function validacao() {
    let x = document.forms["formLogin"]["email"].value;
    if (x == "") {
      document.getElementById("email").style.borderColor = "red";
      return false;
    }
}
function validacao2() {
    let y = document.forms["formLogin"]["senha"].value;
    if (y == "") {
      document.getElementById("senha").style.borderColor = "red";
      return false;
    }
}
