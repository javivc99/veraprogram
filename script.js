var beep = new Audio('src/beep.mp3');
var audioterminado = new Audio('src/terminado.mp3');
var repeticion = 1;
var div = document.getElementById("reps");
var exname = document.getElementById('exname')
var i = 0;

var newsfeed = [
  {
    exercise_name: "Sentadilla con KTB",
    videosrc: "src/sentadilla.mp4",
    limitrep: 5
  },
  {
    exercise_name: "Flexiones mal hechas",
    videosrc: "src/flexion.mp4",
    limitrep: 6
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

document.querySelector('video').addEventListener('ended', function () {
  if (repeticion == newsfeed[i].limitrep) {
    div.innerHTML ="COMPLETADO!!!";
    audioterminado.play();
    i++;
    carga(newsfeed[i].videosrc);
    repeticion = 1;
    div.innerHTML ="Repeticion " + repeticion + " de " + newsfeed[i].limitrep;
    exname.innerHTML = newsfeed[i].exercise_name;
  } else {
    beep.play();
    this.play();
    ++repeticion;
    div.innerHTML ="Repeticion " + repeticion + " de " + newsfeed[i].limitrep;
    exname.innerHTML = newsfeed[i].exercise_name;
  }
})







