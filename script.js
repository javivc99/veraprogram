var beep = new Audio('src/beep.mp3');
var audioterminado = new Audio('src/terminado.mp3');
var repeticion = 1;
var div = document.getElementById("reps");
var exname = document.getElementById('exname')
var textodescanso = document.getElementById('resttime')
var frasemotivacion = document.getElementById('motivacion')
var i = 0;
var rest = true;


let intervalID;
let contador = 0;
let tiempolimite = 10;


var holder = document.getElementById("myUl");
for(var e=0; e < newsfeed.length; e++)
  holder.innerHTML += '<li class="itemlista" id="ejercicionumero'+(e+1)+'">'+newsfeed[e].exercise_name+'<div class="numerorepes">'+' x'+newsfeed[e].limitrep+'</div></li>';


function ChangeSrc(Src) {
    document.getElementById('my_video').src = Src + '.mp4';
}

function frases_aleatorias(frases)
{
return frases[Math.floor(Math.random()*frases.length)];
}

function carga(fuentevideo) {
  document.getElementById('video-player').setAttribute("src", fuentevideo); 
  div.innerHTML ="Repeticion " + repeticion + " de " + newsfeed[i].limitrep;
  exname.innerHTML = newsfeed[i].exercise_name;
  document.getElementById('ejercicionumero'+(i+1)).style.backgroundColor = '#d1e1e8';
}
window.onload = carga(newsfeed[i].videosrc)

function playy() {
    if (rest == true){
  repeatEverySecond()
  document.getElementById('botonempezar').style.display = "none"

}
    else {
    document.getElementById('video-player').play();
    document.getElementById('video-player').removeAttribute("loop", "false"); 
    document.getElementById('video-player').removeAttribute("style", "grayscale(100%);");
    document.getElementById('video-player').setAttribute("autoplay", ""); 
    }
  }



document.querySelector('video').addEventListener('ended', function () {
  if (repeticion == newsfeed[i].limitrep) {
    div.innerHTML ="COMPLETADO!!!";
    rest = true;
    audioterminado.play();
    i++;
    repeticion = 1;
    div.innerHTML ="Repeticion " + repeticion + " de " + newsfeed[i].limitrep;
   document.getElementById('ejercicionumero'+(i)).removeAttribute("style", "background-color: #d1e1e8;");
    exname.innerHTML = newsfeed[i].exercise_name;
    console.log("SIGUIENTE")
    carga(newsfeed[i].videosrc);
    contador = 0;
    playy()
  }
  else {
    beep.play();
    this.play();
    ++repeticion;
    div.innerHTML ="Repeticion " + repeticion + " de " + newsfeed[i].limitrep;
    exname.innerHTML = newsfeed[i].exercise_name;
  }
})


function repeatEverySecond() {
  intervalID = setInterval(sendMessage, 1000);
      document.getElementById('video-player').style.filter = "grayscale(100%)"
    document.getElementById('video-player').play();
    textodescanso.innerHTML ="Preparate, empezamos en <br>" + "<div class=\'tiempodescanso\'>"+(newsfeed[i].tiempopreparacion-contador)+"<div>";
    frasemotivacion.innerHTML = frases_aleatorias(frases);

  
}

function sendMessage(){
    if (contador !== newsfeed[i].tiempopreparacion){
    document.getElementById('video-player').setAttribute("loop", "true"); 

    contador++
    textodescanso.innerHTML ="Preparate, empezamos en <br>" + "<div class=\'tiempodescanso\'>"+(newsfeed[i].tiempopreparacion-contador)+"<div>";

}
else {
rest = false
playy()
clearAlert()
    textodescanso.innerHTML ="";
    frasemotivacion.innerHTML = "";
}
}

function clearAlert() {
  clearTimeout(intervalID);
}








