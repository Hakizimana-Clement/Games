//1.This is for ask user name
var yourName = prompt("Enter Your Name??");
if ((yourName = yourName)) {
  alert("Hello " + yourName + " Welcome.");
} else {
  console.log("no name written here.");
}

//2.This is for making the all button act or run.
var allPianoKey = document.querySelectorAll(".piano").length;

for (var i = 0; i < allPianoKey; i++) {
  document.querySelectorAll(".piano")[i].addEventListener("click", function () {
    var pianoButton = this.innerHTML;

    pianoSound(pianoButton);

    animatedButton(pianoButton);
  });
}

//3. This is for listening the the key pressed.
document.addEventListener("keypress", function (event) {
  pianoSound(event.key);
  animatedButton(event.key);
});

//4.This is for choosing the button pressed using switch and give every key unique key.
function pianoSound(key) {
  switch (key) {
    case "a":
      var ckey = new Audio("sounds/C - 4 Piano Key Note.mp3");
      ckey.play();
      break;

    case "w":
      var cSharpkey = new Audio("sounds/CSharp - 4 Piano Key Note.mp3");
      cSharpkey.play();
      break;

    case "s":
      var Dkey = new Audio("sounds/D - 4 Piano Key Note.mp3");
      Dkey.play();
      break;

    case "e":
      var DSharpkey = new Audio("sounds/DSharp - 4 Piano Key Note.mp3");
      DSharpkey.play();
      break;

    case "d":
      var ekey = new Audio("sounds/E - 4 Piano Key Note.mp3");
      ekey.play();
      break;

    case "h":
      var fkey = new Audio("sounds/F - 4 Piano Key Note.mp3");
      fkey.play();
      break;

    case "u":
      var fSharpkey = new Audio("sounds/Fsharp - 4 Piano Key Note.mp3");
      fSharpkey.play();
      break;

    case "j":
      var gkey = new Audio("sounds/G - 4 Piano Key Note.mp3");
      gkey.play();
      break;

    case "i":
      var gSharpkey = new Audio("sounds/GSharp - 4 Piano Key Note.mp3");
      gSharpkey.play();
      break;

    case "k":
      var akey = new Audio("sounds/A - 4 Piano Key Note.mp3");
      akey.play();
      break;

    case "o":
      var aSharpkey = new Audio("sounds/ASharp - 4 Piano Key Note.mp3");
      aSharpkey.play();
      break;

    case "l":
      var bkey = new Audio("sounds/B - 4 Piano Key Note.mp3");
      bkey.play();
      break;

    default:
      console.log("You press wrong key.");
      break;
  }
}

//5.This is for animation key.
function animatedButton(currentKey) {
  var keyButton = document.querySelector("." + currentKey);
  keyButton.classList.add("pressed");

  setTimeout(function () {
    keyButton.classList.remove("pressed");
  }, 100);
}
