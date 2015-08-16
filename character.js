PImage forward;
PImage right1;
PImage right2;
PImage left;
PImage up;
PImage objectImage;
PImage frontDoor;
PImage mathRm;
charlotte myCharlotte;
obj myObj;
textBox promptExit;
boolean exitDoor = false;
String codeText = "";
//switching images for up, down, left, right
var valueImage = 0;
var xpos = 0;
var ypos = 0;
int currentScreen;

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


//class for main character 
//includes functions for moving up, moving down, etc. Also a function for interactions
class charlotte{
	var xpos;
	var ypos;
	var forward;
	var right1;
	var left;
	var up;
	var width;
	var height;

	charlotte(tmpforward, tmpright1,  tmpLeft, tmpUp, tmpXpos, tmpYpos, tmpwidth, tmpheight){
		forward = tmpforward;
		right1 = tmpright1;
		left = tmpLeft;
		up = tmpUp;
		xpos = tmpXpos;
		ypos = tmpYpos;
		width = tmpwidth;
		height = tmpheight;
	}

	void display(){
		if(valueImage == 0){
			image(forward, xpos, ypos, width, height);
		}
	}

	void moveRight(){
		
		//var a = 0;
		
		if(keyPressed == true && keyCode == RIGHT){
			valueImage = 1;
			xpos = xpos+5;
			
		}
		if(valueImage == 1){
			image(right1, xpos, ypos, width, height);
			
		}
		
		
			
	}

	void moveLeft(){
		if(keyPressed == true && keyCode == LEFT){
			valueImage = 2;
			xpos = xpos-5;
			
		}
		if(valueImage == 2){
			image(left, xpos, ypos, width, height);
		}
		

	}

	void moveUp(){
		if(keyPressed == true && keyCode == UP){
			valueImage = 3;
			ypos = ypos-5;
			
		}
		if(valueImage == 3){
			image(up, xpos, ypos, width, height);
		}
	}

	void moveDown(){
		if(keyPressed == true && keyCode == DOWN){
			valueImage = 0;
			ypos = ypos+5;
			

		}
		
	}


	
}

//class for text boxes
//can potentially prompt them with 
class textBox{
	var ypos;
	var s;

	textBox(tmpYpos, tmpS){
		ypos = tmpYpos;
		s = tmpS;
	}

	void display(){
		//console.log(width);
		fill(0);
		rect(0, ypos, width, height);
		fill(255);
		text(s, 10, ypos + 10, width, 100);
	}

}

/*a class for an objects. 
for functions: sensing left, right, up, down with the character
	return booleans*/


//a class for an objects. for functions: sensing left, right, up, down with the character. return booleans


class obj{

	var xpos;
	var ypos;
	var img1;
	var width;
	var height;
	boolean isRight = false;
	boolean isLeft = false;
	boolean isUp = false;
	boolean isDown = false;

	obj(tmpImg1, tmpXpos, tmpYpos, tmpwidth, tmpheight){

		img1 = tmpImg1;
		xpos = tmpXpos;
		ypos = tmpYpos;
		width = tmpwidth;
		height = tmpheight;
	}

	void display(){
		image(img1, xpos, ypos, width, height);
	}

	void checkRight(){
		// console.log(myCharlotte.width);
		// need to constrain so it doesnt activate when its on the left of the image

		if(myCharlotte.xpos >= xpos - myCharlotte.width
			&& myCharlotte.xpos < xpos
			&& myCharlotte.ypos + myCharlotte.height >= ypos 
			&& myCharlotte.ypos<= ypos + height){
			isRight = true;
			//console.log("charlotte is to the right of me");
			return isRight;
		}
	}

	void checkLeft(){
		//console.log(myCharlotte.width);
		if(myCharlotte.xpos <= xpos + width
			&& myCharlotte.xpos > xpos + width -20
			&& myCharlotte.ypos + myCharlotte.height >= ypos 
			&& myCharlotte.ypos<= ypos + height){
			isLeft = true;
			//console.log("charlotte is to the left of me");
			return isLeft;
		}
	}
	void checkUp(){
		if(myCharlotte.ypos >= ypos - myCharlotte.height
			&& myCharlotte.ypos < ypos - myCharlotte.height + 20
			&& myCharlotte.xpos >= xpos
			&& myCharlotte.xpos <= xpos + width){
			isUp = true;
			//console.log("charlotte is up");
			return isUp;

		}
	}

	void checkDown(){
		if(myCharlotte.ypos <= ypos + height
			&& myCharlotte.ypos > ypos + height - 20 
			&& myCharlotte.xpos >= xpos
			&& myCharlotte.xpos <= xpos + width){
			isDown = true;
			//console.log("charlotte is down");
			return isDown;
		}
	}

}
void setup(){
	//size(400, 400);
	//background(0);
	//console.log("i'm now loading the image");
	size(500, 500);
	noStroke();
	smooth();
	frontDoor = loadImage("lockerRm.png");
	mathRm = loadImage("basicArtbackground.png");
		
	//sprites for character 
	forward = loadImage('charlotteF.png');
	right1 = loadImage('charlotteR.png');
	left = loadImage('charlotteL.png');
	up = loadImage('charlotteB.png');

	//holder for the objects. Use for loops in order to fill class with classrooms
	objectImage = loadImage('kitty.jpg');

	textAlign(CENTER, CENTER);
	textSize(20);
	fill(0);
	myCharlotte = new charlotte(forward,right1, left,up, 0, 0, 31, 47);
	myObj = new obj(objectImage, 200, 200, 100, 100);
	promptExit = new textBox(350, "type a four letter code to get out");

}

void draw(){
	//switching the screens/backgrounds
	//level switching
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
	if (!exitDoor){
		myCharlotte.display();
		myCharlotte.moveRight();
		myCharlotte.moveLeft();
		myCharlotte.moveUp();
		myCharlotte.moveDown();
		if (myCharlotte.xpos < 0){
			myCharlotte.xpos = 0;
		}
		else if(myCharlotte.xpos + myCharlotte.width > 500){
			myCharlotte.xpos = 500 - myCharlotte.width;
		}
		else if(myCharlotte.ypos < 0){
			myCharlotte.ypos = 0;
		}
		else if(myCharlotte.ypos + myCharlotte.height >= 500){
			myCharlotte.ypos = 500 - myCharlotte.height;
		}
	}
}

void bigDoor() {
	//controls the first room
	image(frontDoor, 0, 0, 500, 500);
	fill(255, 0, 0);
	rect(200, 200, 58, 108);
	myObj.display();
	if(myObj.checkRight()){
		//console.log(myCharlotte.xpos);
		myCharlotte.xpos = myObj.xpos - myCharlotte.width;
	}
	else if(myObj.checkLeft()){
		myCharlotte.xpos = myObj.xpos + myObj.width;
	}
	else if(myObj.checkUp()){	
		myCharlotte.ypos = myObj.ypos - myCharlotte.height;
	}	
	else if(myObj.checkDown()){
		exitDoor = true;
		myCharlotte.ypos = myObj.ypos + myObj.height; 

	}
	if (exitDoor) {
		promptExit.display();	
		endingKeyCode(); 
		fill(0);
		text(codeText[0], 100, 150); 
		text(codeText[1], 170, 150);
		text(codeText[2], 240, 150);
		text(codeText[3], 310, 150);
		if(codeText.length ==4){
		  	if(codeText == "59sc"){
		  		console.log("you win");
			}else{
			  	console.log("try again");
			  	codeText = "";
			}
  		}
	}
}	

	// fill(0);
	// rect(0, 300, width, height);
	// fill(255);
	// text("hello this is a text box", 10, 310, width, 100);

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



void mousePressed() {
  currentScreen++;
  if (currentScreen > 2) { 
    currentScreen = 0; 
  }
}

void keyPressed(){
	if(codeText.length < 4 && exitDoor){
		console.log("keyPressed");
		if (keyCode == BACKSPACE) {
		    if (codeText.length > 0) {
		      codeText = codeText.substring(0, codeText.length()-1);
		    }
		} 
		else if (keyCode == DELETE) {
			    codeText = "";
		} 
		else if (keyCode != SHIFT && keyCode != CONTROL && keyCode != ALT) {
			    codeText = codeText + String(key);
		}
	}
}