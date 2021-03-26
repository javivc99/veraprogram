var beep = new Audio('src/beep.mp3');
var audioterminado = new Audio('src/terminado.mp3');
var repeticion = 1;
var div = document.getElementById("reps");
var exname = document.getElementById('exname')
var textodescanso = document.getElementById('resttime')
var i = 0;
var rest = true;


let intervalID;
let contador = 0;
let tiempolimite = 10;


var newsfeed = [
  {
    exercise_name: "Sentadilla con KTB",
    videosrc: "src/sentadilla.mp4",
    limitrep: 5,
    tiempopreparacion: 3,
  },
  {
    exercise_name: "Flexiones mal hechas",
    videosrc: "src/flexion.mp4",
    limitrep: 12,
    tiempopreparacion: 8,
  },
  {
    exercise_name: "Increible este ejercicio",
    videosrc: "src/flexion.mp4",
    limitrep: 6,
    tiempopreparacion: 20,
  },
];

function ChangeSrc(Src) {
    document.getElementById('my_video').src = Src + '.mp4';
}

function carga(fuentevideo) {
  document.getElementById('video-player').setAttribute("src", fuentevideo); 
  div.innerHTML ="Repeticion " + repeticion + " de " + newsfeed[i].limitrep;
  exname.innerHTML = newsfeed[i].exercise_name;

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
}
}

function clearAlert() {
  clearTimeout(intervalID);
}











