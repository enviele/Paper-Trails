//images used
PImage forward, right1, right2, left, up;
PImage objectImage, plant, desks, door; 
PImage frontDoor, mathRm, rmThr; 
PImage paper;



//objects
charlotte myCharlotte;
obj myObj;
obj pottedPlant;
textBox promptExit;
textBox plantText;
textBox otherNotes = [];
obj deskList = [[],[],[],[]];
obj randomPaper = [];

boolean exitDoor = false;
String codeText = "";
var story = ["Type a four letter code to get out. Press shift to go back to room", "Looks like there's a piece of paper in here", 
			"There's a peice of paper in the desk. It reads: 'do you want to study today after class?'"];

var randomNotes = ["meet me after school today", 
					"Please have this signed by Tuesday", 
					"Can I copy off your math homework?? :) <3",
					"I'm screwed for the physics test. F U C K"
					];
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
	rmThr = loadImage("background2.png");
		
	//sprites for character 
	forward = loadImage('charlotteF.png');
	right1 = loadImage('charlotteR.png');
	left = loadImage('charlotteL.png');
	up = loadImage('charlotteB.png');

	//holder for the objects. Use for loops in order to fill class with classrooms
	plant = loadImage('plant.png');
	desk = loadImage('desk2.png');
	door = loadImage('greyD.png');
	paper = loadImage('Paper.png');

	//random paper notes
	for(var i = 0; i < 4; i++){
		randomPaper.push(new obj(paper, random(20, 460), random(50, 450), 30, 30));
	}
	
	//random textBoxes too
	for(var i = 0; i < 4; i++){
		otherNotes.push(new textBox(350, story[i]));
	}


	//textAlign(CENTER, CENTER);
	textSize(15);
	fill(0);
	myCharlotte = new charlotte(forward,right1, left,up, 250, 250, 31, 47);
	doubDoor = new obj(door, 200, 55, 50, 50);
	pottedPlant = new obj(plant, 5, 435, 40, 60);
	promptExit = new textBox(350, story[0]);
	plantText = new textBox(350, story[1]);
	deskText = new textBox(350, story[2]);

	for(var i = 0; i < deskList.length; i++){
		for(var j = 0; j < 5; j++){
			deskList[i].push(new obj(desk, 90*i + 30, 120*j + 70, 40, 40));
		}
	}
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
		case 3:
			rm4();
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
		else if(myCharlotte.ypos < 50){
			myCharlotte.ypos = 50;
		}
		else if(myCharlotte.ypos + myCharlotte.height >= 500){
			myCharlotte.ypos = 500 - myCharlotte.height;
		}
	}
}

void bigDoor() {
	//controls the first room
	image(frontDoor, 0, 0, 500, 500);
	//Displaying objects
	doubDoor.display();
	pottedPlant.display();
	//double doors 
	if(doubDoor.checkRight()){
				myCharlotte.xpos = doubDoor.xpos - myCharlotte.width;
				//myCharlotte.xpos = deskList;
	}
	else if(doubDoor.checkLeft()){
				myCharlotte.xpos = doubDoor.xpos + doubDoor.width;
	}
	else if(doubDoor.checkUp()){	
				myCharlotte.ypos = doubDoor.ypos - doubDoor.height;
	}	
	else if(doubDoor.checkDown()){
				myCharlotte.ypos = doubDoor.ypos + doubDoor.height;
				if(keyPressed && key =='a'){
					exitDoor = true;
					promptExit.display(); 
				}
				
	}

	for(var i = 0; i < 4; i++){
		randomPaper[i].display();
		if(randomPaper[i].checkRight()){
			if(keyPressed == true && key == 'a'){
				otherNotes[i].display();
			}
				
		}
		else if(randomPaper[i].checkLeft()){
			if(keyPressed == true && key == 'a'){
				otherNotes[i].display();
			}
				
		}
		else if(randomPaper[i].checkUp()){	
			if(keyPressed == true && key == 'a'){
				otherNotes[i].display();
			}
					
		}	
		else if(randomPaper[i].checkDown()){
			if(keyPressed == true && key == 'a'){
				otherNotes[i].display();
			}
					
		}
				
	}


	//potted plant actions
	if(pottedPlant.checkLeft()){
		myCharlotte.xpos = pottedPlant.xpos + pottedPlant.width;
		if(keyPressed == true && key == 'a'){
			plantText.display();
		}
	}
	else if(pottedPlant.checkUp()){	
		myCharlotte.ypos = pottedPlant.ypos - myCharlotte.height;
	}	
	else if(pottedPlant.checkDown()){
		myCharlotte.ypos = pottedPlant.ypos + pottedPlant.height;
	}

	//switching screens
	if (myCharlotte.xpos <= 0 && myCharlotte.ypos + myCharlotte.height > 185 && myCharlotte.ypos < 255){
		currentScreen = 1;
		myCharlotte.xpos = 500 - myCharlotte.width;
	}
	else if (myCharlotte.xpos + myCharlotte.width >= 500 && myCharlotte.ypos + myCharlotte.height > 240 && myCharlotte.ypos < 295){
		currentScreen = 2;
		myCharlotte.xpos = 0;
	}
	else if (myCharlotte.xpos < 260 && myCharlotte.xpos + myCharlotte.width > 205 && myCharlotte.ypos + myCharlotte.height >= 500){
		currentScreen = 3;
		myCharlotte.ypos = 0;
	}

	if (exitDoor) {
		promptExit.display();	
		endingKeyCode(); 
		fill(0);
		textAlign(CENTER, CENTER);
		textSize(20);
		fill(0);
		text(codeText[0], 100, 150); 
		text(codeText[1], 170, 150);
		text(codeText[2], 240, 150);
		text(codeText[3], 310, 150);
		if(codeText.length ==4){
		  	if(codeText == "59sc"){
		  		console.log("you win");
			}
			else{
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
	for(var i = 0; i < deskList.length; i++){
		for(var j = 0; j < 5; j++){
			deskList[i][j].display();
			//console.log(deskList[i][j].xpos);
			if(deskList[i][j].checkRight()){
				myCharlotte.xpos = deskList[i][j].xpos - myCharlotte.width;
				//myCharlotte.xpos = deskList;
			}
			else if(deskList[i][j].checkLeft()){
				myCharlotte.xpos = deskList[i][j].xpos + deskList[i][j].width;
			}
			else if(deskList[i][j].checkUp()){	
				myCharlotte.ypos = deskList[i][j].ypos - myCharlotte.height;
			}	
			else if(deskList[i][j].checkDown()){
				myCharlotte.ypos = deskList[i][j].ypos + deskList[i][j].height; 
			}
		}
	}
	if(deskList[2][2].checkLeft() && key == 'a'){
		console.log("found you!");
		deskText.display();
		//myCharlotte.ypos = pottedPlant.ypos + pottedPlant.height;
	}
}

void rm3() {
	//controls third room
	image(rmThr, 0, 0, 500, 500);
}

void rm4(){
	//controls forth room
	background(0, 0, 255);
	fill(255, 255, 0);
	triangle(150, 100, 150, 400, 450, 250);
}



void mousePressed() {
  currentScreen++;
  if (currentScreen > 3) { 
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
		else if (keyCode == SHIFT) {
			exitDoor = false;
		}
	}
	else if (key == 'q'){
		//to figure out the coordinates of stationary objects
		console.log(myCharlotte.xpos);
		console.log(myCharlotte.ypos);
	}
}