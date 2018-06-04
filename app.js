

var saludo = document.getElementById("saludo")
var solicitarNombre = document.getElementById("solicitarNombre");
var juegas = document.getElementById("juegas");
var pregunta1 = document.getElementById("pregunta-uno");
var pregunta2 = document.getElementById("pregunta-dos");
var pregunta3 = document.getElementById("pregunta-tres");
var respuestas = document.getElementById("respuestas");
var respuestasCorrectas = document.getElementById("headerCorrectas");
var respuestasIncorrectas = document.getElementById("headerIncorrectas");

//Solicitar el nombre al usuario
function enviarName() {
  var name = document.getElementById("myName").value;
  document.getElementById("solicitarNombre").innerHTML = "Bienvenid@ " + name.toUpperCase();
  saludo.style.display = "none";
  juegas.style.display = "block";
}

//Preguntar al usuario si quiere jugar
function siJuegas (e) {
  event.preventDefault(e);
  juegas.style.display = "none";
  pregunta1.style.display ="block";
}

//Serie de preguntas
function preguntaUno (e) {
  event.preventDefault(e);
  if (document.getElementById("respuesta1p1").checked) {var firstQuestion1 = document.getElementById("respuestaunoi");
    respuestaunoi.innerHTML= "¡Fallaste aquí! :c <br> La torre Eiffel se encuentra en Francia, no en Italia";
    document.getElementById("preguntaunoc").style.display="none";
    } else {
      respuestaunoc.innerHTML= " ";}
  if (document.getElementById("respuesta2p1").checked) {var firstQuestion2 = document.getElementById("respuestaunoc");
    respuestaunoc.innerHTML= "¡Acertaste! <br> La torre Eiffel se encuentra en Francia";
    document.getElementById("preguntaunoi").style.display="none";
    } else {
      respuestaunoi.innerHTML= " ";}
  if (document.getElementById("respuesta3p1").checked) {var firstQuestion3 = document.getElementById("respuestaunoi");
    respuestaunoi.innerHTML= "¡Fallaste aquí! :c <br> La torre Eiffel se encuentra en Francia, no en Austria";
    document.getElementById("preguntaunoc").style.display="none";
    } else {
      respuestaunoc.innerHTML= " ";}

    pregunta1.style.display = "none";
    pregunta2.style.display ="block";
    }


function preguntaDos (e) {
  event.preventDefault(e);
  if (document.getElementById("respuesta1p2").checked) {var secondQuestion1 = document.getElementById("respuestadosi");
    respuestadosi.innerHTML= "¡Fallaste aquí! :c <br> La samba se baila en Brasil, no en Cuba";
    document.getElementById("preguntadosc").style.display="none";
    } else {
      respuestadosc.innerHTML= " ";}
  if (document.getElementById("respuesta2p2").checked) {var secondQuestion2 = document.getElementById("respuestadosc");
    respuestadosc.innerHTML=  "¡Acertaste! <br> La samba se baila en Brasil";
    document.getElementById("preguntadosi").style.display="none";
    } else {
      respuestadosi.innerHTML= " ";}
  if (document.getElementById("respuesta3p2").checked) {var secondQuestion3 = document.getElementById("respuestadosi");
    respuestadosi.innerHTML= "¡Fallaste aquí! :c <br> La samba se baila en Brasil, no en Perú";
    document.getElementById("preguntadosc").style.display="none";
    } else {
      respuestadosc.innerHTML= " ";}

    pregunta2.style.display = "none";
    pregunta3.style.display ="block";
    }

function preguntaTres (e) {
  event.preventDefault(e);
  if (document.getElementById("respuesta1p3").checked) {var thirdQuestion1 = document.getElementById("respuestatresc");
    respuestatresc.innerHTML= " ¡Acertaste! <br> El mejor país de América Latina es México";
    document.getElementById("preguntatresi").style.display="none";
    } else {
      respuestatresi.innerHTML= " ";}
  if (document.getElementById("respuesta2p3").checked) {var thirdQuestion2 = document.getElementById("respuestatresi");
    respuestatresi.innerHTML= " ¡Fallaste aquí! :c <br> El mejor país de América Latina es México, no El Salvador";
    document.getElementById("preguntatresc").style.display="none";
    } else {
      respuestatresc.innerHTML= " ";}
  if (document.getElementById("respuesta3p3").checked) {var thirdQuestion3 = document.getElementById("respuestatresi");
    respuestatresi.innerHTML= " ¡Fallaste aquí! :c <br> El mejor país de América Latina es México, no Trinidad y Tobago";
    document.getElementById("preguntatresc").style.display="none";
    } else {
      respuestatresc.innerHTML= " ";}

    pregunta3.style.display = "none";
    respuestas.style.display = "block";
    }


function noJuegas () {
  juegas.innerHTML = "Nos vemos para la proxima";
}
