 var numberofbtns = document.querySelectorAll('.drum').length;
  var tom_audio = new Audio("sounds/tom-1.mp3");
 for (var i = 0; i < numberofbtns; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click',tom);
 }
 function tom(){

 tom_audio.play();

 }
