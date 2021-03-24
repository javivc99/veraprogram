var beep = new Audio('src/beep.mp3');
var audioterminado = new Audio('src/terminado.mp3');
var repeticion = 1;
var div = document.getElementById("reps");
var limitrep = 10;


var newsfeed = [
  {
    videosrc: "",
    limitrep: 5
  },
  {
    videosrc: "Bobby",
    limitrep: 5
  },
  {
    videosrc: "Bobby",
    limitrep: 5
  }
];


  div.innerHTML ="Repeticion " + repeticion + " de " + limitrep;

  document.querySelector('video').addEventListener('ended', function () {
    if (repeticion == limitrep) {
  div.innerHTML ="COMPLETADO!!!";
  audioterminado.play();

  } else {
  beep.play();
  this.play();
  ++repeticion;
  div.innerHTML ="Repeticion " + repeticion + " de " + limitrep;

  }
})



