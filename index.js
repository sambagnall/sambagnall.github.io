var numbers = document.getElementsByClassName("number");

var multiply = document.getElementById("multiply")
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var plus = document.getElementById("plus");


var display = document.getElementsByClassName("display")[0];
var eq = document.getElementsByClassName("equals")[0];
var clear = document.getElementsByClassName("clear")[0];

var firstNumber = 0;
var secondNumber = 0;
var displayNumber = "";
var operator = "";
var answer;
var runningTotal = 0;
var buttonValue = 0;
var thingsToDo = [];

multiply.addEventListener("click", timesNumbers);
divide.addEventListener("click", divideNumbers);
plus.addEventListener("click", addNumbers);
minus.addEventListener("click", subtractNumbers);

function addNumbers() {
	if(display.innerHTML !== "0") {
		thingsToDo.push(parseFloat(display.innerHTML));
		thingsToDo.push("+")
		displayNumber = "";
	}
}

function subtractNumbers() {
	if(display.innerHTML !== "0") {
		thingsToDo.push(parseFloat(display.innerHTML));
		thingsToDo.push("-");
		displayNumber = "";
	}
}

function divideNumbers() {
	if(display.innerHTML !== "0") {
		thingsToDo.push(parseFloat(display.innerHTML));
		thingsToDo.push("/");
		displayNumber = "";
	}
}

function timesNumbers() {
	if(display.innerHTML !== "0") {
		thingsToDo.push(parseFloat(display.innerHTML));
		thingsToDo.push("*");
		displayNumber = "";
	}
}

for(var i = 0; i < numbers.length; i++){
	numbers[i].addEventListener("click", upDateDisplay);
	console.log(numbers[i] + "}");
}

eq.addEventListener("click", function(){ 
		thingsToDo.push(parseFloat(display.innerHTML));
		answer = thingsToDo.join("");
		eval(answer);
		console.log(answer);
		console.log(eval(answer));
		answer1 = (eval(answer));
		displayNumber = "";
		display.innerHTML = answer1;
		thingsToDo = [];
		answer = "";
	})

clear.addEventListener("click", function(){
	displayNumber = "";
	display.innerHTML = "";
	thingsToDo = [];
})

function upDateDisplay() {
	buttonValue = this.value;
	displayNumber = displayNumber + buttonValue;
	display.innerHTML = displayNumber;	
}
