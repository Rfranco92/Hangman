Words = {};
Words.list = [];

Words.list[0] = "swashbuckler";
Words.list[1] = "corsair";
Words.list[2] = "plunder";
Words.list[3] = "cutlass";
Words.list[4] = "cannon";
Words.list[5] = "parley";
Words.list[6] = "doubloon";
Words.list[7] = "ahoy";
Words.list[8] = "avast";
Words.list[9] = "mutiny";
Words.list[10] = "poopdeck";
Words.list[11] = "booty";
Words.list[12] = "seadog";

Words.length = Words.list.length;


Main = {};
var WordArray = [];
var WordUArray = [];
var wins = 0;
document.getElementById("win").innerHTML = wins;
var losses = 0;
document.getElementById("loss").innerHTML = losses;
var guess = 12;
document.getElementById("guesses").innerHTML = guess;
var NumInWordBank = Words.length;
var letter = "";
document.getElementById("letters").innerHTML = letter;

var Word ="Test";
var WordU = "";
document.getElementById("currentword").innerHTML = WordU;


function PullWord(){
	Word = Words.list[(Math.floor(Math.random()*NumInWordBank))];
}

function SetUnderLine(){
	PullWord();
	for (var i = 0; i < Word.length; i++){
		WordArray[i] = Word.charAt(i);
		//Shows characters at console.log
		console.log("charAt: ",Word.charAt(i));
		WordUArray[i] = "-";
	}
	currentword.innerHTML = WordUArray.join("");
}

function reset(){
	currentword.innerHTML = "";
	//Empty Arrays to test for reset
	WordArray = [];
	WordUArray = [];
	guess = 12;
	letters.innerHTML = "";
	letter = "";
	guesses.innerHTML = guess;
	SetUnderLine();
}

function UpdateLetter(pirateletter){
	var Changes = 0;
	for(i = 0; i<Word.length; i++){
		WordArray[i] = Word.charAt(i) 
		if(Word.charAt(i) === pirateletter){
			WordUArray[i] = pirateletter;
			Changes++;
		}
	}

	if(Changes < 1){
		guess--;
		guesses.innerHTML = guess;
	}

	currentword.innerHTML = WordUArray.join("");
			

	var Word1 = WordArray.join("");
	var Word2 = WordUArray.join("");

	if(Word1 === Word2){
		wins++;
		win.innerHTML = wins;
		reset();
		alert("YOU HAVE FOUND ME BURIED TREASURE! YAR HAR!");

	}

	if(guess == 0){
		losses++;
		alert("AVAST! YOU MUST WALK THE PLANK!");
		loss.innerHTML = losses;
		reset();
	}

}

document.onkeypress = function(event) {
	var keytrigger = String.fromCharCode(event.keyCode).toLowerCase();
	letters.innerHTML = keytrigger + letter;
	letter =  letter + keytrigger;
	UpdateLetter(keytrigger);
}

SetUnderLine();