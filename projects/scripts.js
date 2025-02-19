// set up text to print, each item in array is new line
var textToWrite = new Array(
"<div class='terminal'>> Loading demo projects...</div>",
"<div class='terminal' id='cd'>> cd </div>",
'<a href="https://beesybumblebee.github.io/DigitReaderNeuralNetwork/" class="cd-select" id="neural-net">.\\neural-network\\</a>',
'<a href="../index.html" class="cd-select" id="home-button">..\\</a>',
""
);
 
var writeDelay = 15;
var newLineDelay = 60;
var scrollAt = 20;
var currIndex = 0;
var endIndex;

var currTextPos = 0;
var contents = ' ';
var currRow;

function typewriter()
{
	contents =  ' ';
	currRow = Math.max(0, currIndex - scrollAt);
	var destination = document.getElementById("typedtext");
	if ( endIndex === undefined ) { endIndex = textToWrite.length }

	while ( currRow < currIndex ) {
		contents += textToWrite[currRow++] + '<br />';
	}

	destination.innerHTML = contents + textToWrite[currIndex].substring(0, currTextPos) + (currIndex+1 < endIndex ? "_" : "");
	if ( currTextPos++ == textToWrite[currIndex].length ) {
		currTextPos = 0;
		currIndex++;
		if ( currIndex != endIndex ) {
			setTimeout("typewriter()", newLineDelay);
		}
	} else {
		if (textToWrite[currIndex][currTextPos] == '<' || currIndex >= 4) { writeDelay = 0; newLineDelay = 10 }
		if (textToWrite[currIndex][currTextPos] == '>') { writeDelay = 15; newLineDelay= 60 }
		setTimeout("typewriter()", writeDelay);
	}
	cdListeners();
}


typewriter();

function cdListeners()
{
	const cd_sel = document.getElementsByClassName("cd-select");
	const cd = document.getElementById("cd");

	for (var i = 0; i < cd_sel.length; i++) {
		cd_sel[i].addEventListener(
			"mouseenter",
			(event) => {
				cd.innerHTML = "> cd " + event.target.innerHTML;
			},
			false,
		);
		cd_sel[i].addEventListener(
			"mouseover",
			(event) => {
				cd.innerHTML = "> cd ";
			},
			false,
		);
	}
}


