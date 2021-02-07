





function buttonAnimation(currentKey){

var buttonTouch = document.querySelector("." + currentKey);

buttonTouch.classList.add("pressed");

setTimeout (function(){

buttonTouch.classList.remove("pressed");

},100);
/*buttonTouch.style.cssText = "box-shadow: 0 3px 4px 0 #DBEDF3;opacity: 0.5";*/

}


function happens(take){


    switch (take) {

      case "w":
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;



      case "a":
        var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;



      case "s":
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;



      case "d":
        var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;




      case "j":
        var audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        break;


      case "k":
        var audio6 = new Audio("sounds/crash.mp3");
        audio6.play();
        break;



      case "l":
        var audio7 = new Audio("sounds/kick-bass.mp3");
        audio7.play();
        break;


      default:

    }
}




var long = document.querySelectorAll(".drum").length;
for (i = 0; i < long; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function(){


happens(this.innerHTML);

buttonAnimation(this.innerHTML);
});
}


document.addEventListener("keydown", function(event){

happens(event.key);


buttonAnimation(event.key);

});
