///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// 1.Select all button and make it clickable ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

//1.1.This variable is for knowing the length of all button we have in order to use it in loop

var numberOfButton = document.querySelectorAll(".buttonimg").length;

//1.2.Here we use loop, for make all button responed whhen user click it.

for (var i = 0; i < numberOfButton; i++) {
  // this is loop for enable all button to run or to be clickable
  document
    .querySelectorAll(".buttonimg")
    [i].addEventListener("click", function () {
      //1.3.this varialbe is for know the message in innerHTML.
      var buttonclicked = this.innerHTML;

      //1.4.this is fro checking of the button clciked and change it to it's number.
      switch (buttonclicked) {
        case "dice1": // this is for dice of as clicked and detected in by this.innerHTML in varialbcalled: "buttonclicked".
          document
            .getElementById("dice_in_playground_1")
            .setAttribute("src", "img/dice1.png"); // this the image going to changed when button clicked

          randomDice(); // this the function from random image.
          break;

        case "dice2":
          document
            .getElementById("dice_in_playground_1")
            .setAttribute("src", "img/dice2.png");
          randomDice();
          break;

        case "dice3":
          document
            .getElementById("dice_in_playground_1")
            .setAttribute("src", "img/dice3.png");
          randomDice();
          break;

        case "dice4":
          document
            .getElementById("dice_in_playground_1")
            .setAttribute("src", "img/dice4.png");
          randomDice();
          break;

        case "dice5":
          document
            .getElementById("dice_in_playground_1")
            .setAttribute("src", "img/dice5.png");
          randomDice();
          break;

        case "dice6":
          document
            .getElementById("dice_in_playground_1")
            .setAttribute("src", "img/dice6.png");
          randomDice();
          break;

        default:
          console.log("dice game");
          break;
      }
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// 2.This is for random  dice image //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function randomDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1; // random number from 1-6
  var imageSource = "img/dice" + randomNumber + "black.png"; // add the var of randonNumber to image source
  document
    .getElementById("dice_in_playground_2")
    .setAttribute("src", imageSource); //this is for change the source attributes(src) and be random images.
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// 3.changing play name //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

var writeYouName = prompt(
  "What is your name????. ⚠ Please write less than 10 character ⚠"
); // this is for ask player (user) to write his/her name.
var youName = writeYouName.slice(0, 9); // this is for limit the word to be write, means you must write less than 9 word(character).

if ((youName == youName)) {
  document.querySelector("h2").innerHTML = youName; // when write his/her name print (write) on screen
} else {
  document.querySelector("h2").innerHTML = "You"; // if not. print(write) You.
}
