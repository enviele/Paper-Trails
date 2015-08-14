int currentScreen;
PImage frontDoor;
PImage mathRm;

function timer(secs){
  //Input "seconds" as the amount of time you want to wait
  var currentTime = 0;
  if (currentTime < secs){
    currentTime++;
  }
  else {
    currentTime = 0;
  }
}




void setup() {
  size(500, 500);
  noStroke();
  smooth();
  frontDoor = loadImage("lockerRm.png");
  mathRm = loadImage("basicArtbackground.png");
} 
 
void draw() {
	console.log("drawing");
  //depending on the number, a rectangle will draw
	switch(currentScreen) {
		case 0: 
			bigDoor(); 
			break;
		case 1: 
			mathClass(); 
			break;
		case 2: 
			rm3(); 
			break;
		default: 
			background(0); 
			break;
	}
}
 
void mousePressed() {
  currentScreen++;
  if (currentScreen > 2) { 
    currentScreen = 0; 
  }
}
 
void bigDoor() {
  //controls the first room
  image(frontDoor, 0, 0, 500, 500);
}
 
void mathClass() {
  //controls second room
  image(mathRm, 0, 0, 500, 500);
}
 
void rm3() {
  //controls third room
  background(0, 0, 255);
  fill(255, 255, 0);
  triangle(150, 100, 150, 400, 450, 250);
}
