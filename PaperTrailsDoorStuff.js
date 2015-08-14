

//todos los functions for things
function smallRect (xVal, yVal, red, green, blue) {
	fill(red, green, blue);
	rect(xVal, yVal, 60, 150);
}

function bigRect () {
	fill(175, 190, 197);
	rect(57, 70, 290, 200);
}

function endingKeyCode () {
	//biiig rectangle
	bigRect();
	//red rectangle
	smallRect(65, 100, 255, 78, 80);
	//green rectangle
	smallRect(135, 100, 0, 128, 0);
	//yellow rectangle
	smallRect(205, 100, 255, 241, 154);
	//blue rectangle
	smallRect(275, 100, 57, 127, 219);
}

//yeah when you hit that door, win the game!!!
function endingDoor () {

}

// start up processing braaa
void setup() {
	size(400, 400);
}

//draw that shizzz
void draw() {
	noStroke();
	endingKeyCode();  
}
