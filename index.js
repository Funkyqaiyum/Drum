var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

document.addEventListener("keydown",function(event){makeSound(event.key);});  //anonymous function with event as parameter

var crash = new Audio('sounds/crash.mp3');
var kickbass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');


function handleclick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
}

function makeSound(key){
  buttonAnimation(key);
  switch (key) {
    case "q":
      crash.play();
      break;
    case "w":
      kickbass.play();
      break;
    case "e":
      snare.play();
      break;
    case "r":
      tom1.play();
      break;
    case "t":
      tom2.play();
      break;
    case "y":
      tom3.play();
      break;
    case "u":
      tom4.play();
      break;

    default: console.log(key);
  }
}

function buttonAnimation(curkey){
  var activeButton=document.querySelector("."+curkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
