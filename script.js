"use strict";
var str = "";
const buttons = document.querySelectorAll("button");
const label = document.querySelector(".txt");
const updateStr = function () {
  label.innerHTML = str;
};
//////////////////////
// playsound()
const playsound = function () {
  var audio = new Audio("maudio.wav");
  audio.play();
};
///////////////////////
//Add eventlistener to each button
function addToStr(event) {
  // playsound();
  const name = event.target.value;
  if (name == "Backspace") str = str.slice(0, -1);
  else if (name == "Clear") str = "";
  else if ((name >= "a" && name <= "z") || (name >= "A" && name <= "Z")) {
    console.log("A block executed");
    str += name;
  } else if (name >= "0" && name <= "9") {
    console.log("Num block executed");
    str += name;
  } else if (name == " " || name == "." || name == "/") str += name;
  updateStr();
}
buttons.forEach(function (button) {
  button.addEventListener("click", addToStr);
});
///////////////////////////////
// Handle keyboard press
const showText = function (event) {
  let name = event.key;
  //  playsound();
  console.log(name);
  if ( name == "CapsLock" || name == "Tab" || name == "Control" || name == "Meta" || name == "Alt")
    str += "";
  else if ( name == "Enter" || name == " " || name == "Clear" || name == "Backspace" || name == "Shift") {
    switch (name) {
      case "Clear":
        str = "";
        break;
      case " ":
        str += " ";
        break;
      case "Backspace":
        console.log("Insied backspace");
        str = str.slice(0, -1);
        updateStr();
        break;
      case "Enter":
        console.log("Insied Enter");
        str += "\n";
        break;
      case "Shift":
        console.log("Insied Shift");
        str += "";
        break;
      default:
        str += "";
    }
  } else if ((name >= "a" && name <= "z") || (name >= "A" && name <= "Z")) {
    str += name;
    const g = document.querySelector(`.${name.toUpperCase()}`);
    g.style.backgroundColor = "red";
  } else if (name >= "0" && name <= "9") {
    str += name;
    let nums = getNums(name); 
    const g = document.querySelector(`.${nums}`);
    g.style.backgroundColor = "red";
  } else if (name == "/" || name == "-" || name == "+" || name == "*" || name == "!" || name == "@" || name == "#" || name == "$" || name == "%" || name == "^" || name == "&" || name == "(" || name == ")" || name == "<" || name == ">" || name == "." || name == "," || name == "=" || name == "{" || name == "}" || name == "[" || name == "]" || name == "|" || name == "'" || name == ":" || name == ";" || name == '"' || name == "?" || name == "\\" || name == "_") str += name;
   else {}
  updateStr();
};

const noshow = function (event) {
  let name = event.key;
  if ( name == "Enter" || name == "Clear" || name == "Backspace" || name == "Shift") {} 
  else if ((name >= "a" && name <= "z") || (name >= "A" && name <= "Z")) {
    const g = document.querySelector(`.${name.toUpperCase()}`);
    g.style.background = "#152923";
  } else if (name >= "0" && name <= "9") {
    let nums = getNums(name); 
    const g = document.querySelector(`.${nums}`);
    g.style.backgroundColor = "#152923";
  }
};
function getNums(name){
  let nums = new Map([
    ["0", "zero"],
    ["1", "one"],
    ["2", "two"],
    ["3", "three"],
    ["4", "four"],
    ["5", "five"],
    ["6", "six"],
    ["7", "seven"],
    ["8", "eight"],
    ["9", "nine"],
  ]);
  return nums.get(name);
}
//Keydown and keyup events
const keyD = document.addEventListener("keydown", showText, false);
const keyUp = document.addEventListener("keyup", noshow, false);
