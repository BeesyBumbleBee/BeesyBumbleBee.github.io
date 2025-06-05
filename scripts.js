// set up text to print, each item in array is new line
const textToWrite = new Array(
"<div class='terminal'>> Loading user info...</div>",
"<div class='terminal' id='user'>Name: Szymon Oleśkiewicz</div>",
"<div class='terminal' id='user'>Profession: Software Engineer (in making) </div>",
"<div class='terminal' id='contact'>Email:<a class='terminal' href='mailto:sz.oleskiewicz@gmail.com' id='email' style='display:inline'>sz.oleskiewicz@gmail.com</a></div>",
"<div class='terminal' id='cd'>> cd </div>",
'<a href="https://github.com/BeesyBumbleBee" class="cd-select" id="github"> .\\github\\</a>',
'<a href="https://www.linkedin.com/in/szymon-oleskiewicz/" class="cd-select" id="linkedin">.\\linkedin\\</a>',
'<a href="#" class="cd-select" id="cv" download="CV">.\\CV\\</a>',
'<a href="./projects/index.html" class="cd-select" id="projects">.\\projects-demo\\</a>',
""
);

const TEXT_WRITEDELAY = 8;
const TEXT_NEWLINEDELAY = 30;
const CODE_WRITEDELAY = 1;
const CODE_NEWLINEDELAY = 5;


let writeDelay = TEXT_WRITEDELAY;
let newLineDelay = TEXT_NEWLINEDELAY;
let scrollAt = 20;
let currIndex = 0;
let endIndex;

let currTextPos = 0;
let contents = ' ';
let currRow;

function typewriter()
{
	contents =  ' ';
	currRow = Math.max(0, currIndex - scrollAt);
	let destination = document.getElementById("typedtext");
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
		if (textToWrite[currIndex][currTextPos] == '<' || currIndex >= 4) { writeDelay = CODE_WRITEDELAY; newLineDelay = CODE_NEWLINEDELAY }
		if (textToWrite[currIndex][currTextPos] == '>') { writeDelay = TEXT_WRITEDELAY; newLineDelay= TEXT_NEWLINEDELAY }
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


