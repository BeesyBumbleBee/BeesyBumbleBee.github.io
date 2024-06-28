// set up text to print, each item in array is new line
var aText = new Array(
"\> Loading user info...",
"Name: Szymon Oleśkiewicz",
"Profession: Software Engineer (in making)",
"\> Awaiting input...",
"\> cd",
		'<a href="https://github.com/BeesyBumbleBee" class="cd-select" id="github"> .\\github</a>',
		'<a href="https://www.linkedin.com/in/szymon-oleskiewicz/" class="cd-select" id="linkedin">.\\linkedin</a>',
		'<a href="#" class="cd-select" id="resume">.\\resume</a>',
		'<a href="#" class="cd-select" id="contact">.\\contact</a>',
		'<a href="./projects/index.html" class="cd-select" id="projects">.\\projects-demo</a>'
);
var iSpeed = 50; // time delay of print out
var nlSpeed = 500; //  new line delay
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex == 4) {
    iSpeed = 5;
    nlSpeed = 100;
  }
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", nlSpeed);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();


