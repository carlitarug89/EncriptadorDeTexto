/* Reglas para la encriptación:
e -> enter
o -> ober
i -> imes
a -> ai
u -> ufat */

function encriptar() {
    var texto = document.getElementById("inputtxt").value.toLowerCase(); //para que pase a minusculas
    var txtcifrado = texto.replace(/e/igm, "enter");
    var txtcifrado = txtcifrado.replace(/o/igm, "ober");
    var txtcifrado = txtcifrado.replace(/i/igm, "imes");
    var txtcifrado = txtcifrado.replace(/a/igm, "ai");
    var txtcifrado = txtcifrado.replace(/u/igm, "ufat");

    document.getElementById("muñeco").style.display="none";
    document.getElementById("ningunmsj").style.display="none";
    document.getElementById("texto2").style.display="show";
    document.getElementById("texto2").style.display="inherit";
    document.getElementById("texto2").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}

function desencriptar() {
   var texto = document.getElementById("inputtxt").value.toLowerCase(); //para que pase a minusculas
   var txtcifrado = texto.replace(/enter/igm, "e");
   var txtcifrado = txtcifrado.replace(/ober/igm, "o");
   var txtcifrado = txtcifrado.replace(/imes/igm, "i");
   var txtcifrado = txtcifrado.replace(/ai/igm, "a");
   var txtcifrado = txtcifrado.replace(/ufat/igm, "u");

   document.getElementById("muñeco").style.display="none";
   document.getElementById("ningunmsj").style.display="none";
   document.getElementById("texto2").style.display="show";
   document.getElementById("texto2").style.display="inherit";
   document.getElementById("texto2").innerHTML=txtcifrado;
   document.getElementById("copiar").style.display="show";
   document.getElementById("copiar").style.display="inherit";

}

function copy(){
   var contenido=document.querySelector("#texto2");
   contenido.select();
   document.execCommand("copy");
}


encriptar();
desencriptar();