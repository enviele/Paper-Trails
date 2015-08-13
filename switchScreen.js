int currentScreen;
 
void setup() {
  size(500, 500);
  noStroke();
  smooth();
}
 
void draw() {
	console.log("drawing");
  //depending on the number, a rectangle will draw
	switch(currentScreen) {
		case 0: 
			drawScreenZero(); 
			break;
		case 1: 
			drawScreenOne(); 
			break;
		case 2: 
			drawScreenTwo(); 
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
 
void drawScreenZero() {
  background(255, 0, 0);
  fill(255);
  ellipse(100, 100, 400, 400);
}
 
void drawScreenOne() {
  background(0, 255, 0);
  fill(0);
  rect(250, 40, 250, 400);
}
 
void drawScreenTwo() {
  background(0, 0, 255);
  fill(255, 255, 0);
  triangle(150, 100, 150, 400, 450, 250);
}
