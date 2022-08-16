var str = "";
const buttons = document.querySelectorAll("button");
const label = document.querySelector(".txt");
const updateStr = function () {
  label.innerHTML = str;
};
///////////////////////////////////
// Changing color on every click

///////////////////////
//Add eventlistener to each button
function addToStr(event) {
  var audio = new Audio("maudio.wav");
  audio.play();
  const clicked = event.target.value;
  switch (clicked) {
    case "A":
      str += "A";
      showColor("A");
      updateStr();
      break;
    case "B":
      str += "B";
      showColor("B");
      updateStr();
      break;
    case "C":
      str += "C";
      updateStr();
      break;
    case "D":
      str += "D";
      updateStr();
      break;
    case "E":
      str += "E";
      updateStr();
      break;
    case "F":
      str += "F";
      updateStr();
      break;
    case "G":
      str += "G";
      updateStr();
      break;
    case "H":
      str += "H";
      updateStr();
      break;
    case "I":
      str += "I";
      updateStr();
      break;
    case "J":
      str += "J";
      updateStr();
      break;
    case "K":
      str += "K";
      updateStr();
      break;
    case "L":
      str += "L";
      updateStr();
      break;
    case "M":
      str += "M";
      updateStr();
      break;
    case "N":
      str += "N";
      updateStr();
      break;
    case "O":
      str += "O";
      updateStr();
      break;
    case "P":
      str += "P";
      updateStr();
      break;
    case "Q":
      str += "Q";
      updateStr();
      break;
    case "R":
      str += "R";
      updateStr();
      break;
    case "S":
      str += "S";
      updateStr();
      break;
    case "T":
      str += "T";
      updateStr();
      break;
    case "U":
      str += "U";
      updateStr();
      break;
    case "V":
      str += "V";
      updateStr();
      break;
    case "W":
      str += "W";
      updateStr();
      break;
    case "X":
      str += "X";
      updateStr();
      break;
    case "Y":
      str += "Y";
      updateStr();
      break;
    case "Z":
      str += "Z";
      updateStr();
      break;
    case "0":
      str += "0";
      updateStr();
      break;
    case "1":
      str += "1";
      updateStr();
      break;
    case "2":
      str += "2";
      updateStr();
      break;
    case "3":
      str += "3";
      updateStr();
      break;
    case "4":
      str += "4";
      updateStr();
      break;
    case "5":
      str += "5";
      updateStr();
      break;
    case "6":
      str += "6";
      updateStr();
      break;
    case "7":
      str += "7";
      updateStr();
      break;
    case "8":
      str += "8";
      updateStr();
      break;
    case "9":
      str += "9";
      updateStr();
      break;
    case "/":
      str += "/";
      updateStr();
      break;
    case " ":
      str += " ";
      updateStr();
      break;
    case ".":
      str += ".";
      updateStr();
      break;
    case "Clear":
      str = "";
      updateStr();
      break;
    case "Backspace":
      console.log("Insied backspace");
      str = str.slice(0, -1);
      updateStr();
      break;
    default:
      str += "";
      updateStr();
  }
}
buttons.forEach(function (button) {
  button.addEventListener("click", addToStr);
});

const showText = function (event) {
  let name = event.key;
  var audio = new Audio("maudio.wav");
  audio.play();

  switch (name) {
    case "A":
      str += "A";
      updateStr();
      break;
    case "B":
      str += "B";
      updateStr();
      break;
    case "C":
      str += "C";
      updateStr();
      break;
    case "D":
      str += "D";
      updateStr();
      break;
    case "E":
      str += "E";
      updateStr();
      break;
    case "F":
      str += "F";
      updateStr();
      break;
    case "G":
      str += "G";
      updateStr();
      break;
    case "H":
      str += "H";
      updateStr();
      break;
    case "I":
      str += "I";
      updateStr();
      break;
    case "J":
      str += "J";
      updateStr();
      break;
    case "K":
      str += "K";
      updateStr();
      break;
    case "L":
      str += "L";
      updateStr();
      break;
    case "M":
      str += "M";
      updateStr();
      break;
    case "N":
      str += "N";
      updateStr();
      break;
    case "O":
      str += "O";
      updateStr();
      break;
    case "P":
      str += "P";
      updateStr();
      break;
    case "Q":
      str += "Q";
      updateStr();
      break;
    case "R":
      str += "R";
      updateStr();
      break;
    case "S":
      str += "S";
      updateStr();
      break;
    case "T":
      str += "T";
      updateStr();
      break;
    case "U":
      str += "U";
      updateStr();
      break;
    case "V":
      str += "V";
      updateStr();
      break;
    case "W":
      str += "W";
      updateStr();
      break;
    case "X":
      str += "X";
      updateStr();
      break;
    case "Y":
      str += "Y";
      updateStr();
      break;
    case "Z":
      str += "Z";
      updateStr();
      break;
    case "a":
      str += "a";
      updateStr();
      break;
    case "b":
      str += "b";
      updateStr();
      break;
    case "c":
      str += "c";
      updateStr();
      break;
    case "d":
      str += "d";
      updateStr();
      break;
    case "e":
      str += "e";
      updateStr();
      break;
    case "f":
      str += "f";
      updateStr();
      break;
    case "g":
      str += "g";
      updateStr();
      break;
    case "h":
      str += "h";
      updateStr();
      break;
    case "i":
      str += "i";
      updateStr();
      break;
    case "j":
      str += "j";
      updateStr();
      break;
    case "k":
      str += "k";
      updateStr();
      break;
    case "l":
      str += "l";
      updateStr();
      break;
    case "m":
      str += "m";
      updateStr();
      break;
    case "n":
      str += "n";
      updateStr();
      break;
    case "o":
      str += "o";
      updateStr();
      break;
    case "p":
      str += "p";
      updateStr();
      break;
    case "q":
      str += "q";
      updateStr();
      break;
    case "r":
      str += "r";
      updateStr();
      break;
    case "s":
      str += "s";
      updateStr();
      break;
    case "t":
      str += "t";
      updateStr();
      break;
    case "u":
      str += "u";
      updateStr();
      break;
    case "v":
      str += "v";
      updateStr();
      break;
    case "w":
      str += "w";
      updateStr();
      break;
    case "x":
      str += "x";
      updateStr();
      break;
    case "y":
      str += "y";
      updateStr();
      break;
    case "z":
      str += "z";
      updateStr();
      break;
    case "0":
      str += "0";
      updateStr();
      break;
    case "1":
      str += "1";
      updateStr();
      break;
    case "2":
      str += "2";
      updateStr();
      break;
    case "3":
      str += "3";
      updateStr();
      break;
    case "4":
      str += "4";
      updateStr();
      break;
    case "5":
      str += "5";
      updateStr();
      break;
    case "6":
      str += "6";
      updateStr();
      break;
    case "7":
      str += "7";
      updateStr();
      break;
    case "8":
      str += "8";
      updateStr();
      break;
    case "9":
      str += "9";
      updateStr();
      break;
    case "/":
      str += "/";
      updateStr();
      break;
    case " ":
      str += " ";
      updateStr();
      break;
    case ".":
      str += ".";
      updateStr();
      break;
    case "Clear":
      str = "";
      updateStr();
      break;
    case "Backspace":
      console.log("Insied backspace");
      str = str.slice(0, -1);
      updateStr();
      break;
    case "Enter":
      console.log("Insied Enter");
      str += "\n";
      updateStr();
      break;
    case "Shift":
      console.log("Insied Shift");
      str += "";
      updateStr();
      break;
    default:
      str += "";
      updateStr();
  }
};
///////////////////////////////
// Handle keyboard press
const keyD = document.addEventListener("keydown", showText, false);

////////////////////////////////////////
