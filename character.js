//images used
PImage forward, right1, right2, left, up;
PImage objectImage, plant, desks, door, singleDoor; 
PImage frontDoor, mathRm, rmThr, rmFor; 
PImage paper, locker, endLocker;



//objects
charlotte myCharlotte;
obj teachTab;
obj pottedPlant;
textBox promptExit;
textBox plantText;
textBox otherNotes = [];
textBox deskText1 = [[],[],[],[]];
obj deskList = [[],[],[],[]];
obj randomPaper = [];
obj lockerList = [];
obj lockerLast;

boolean exitDoor = false;
String codeText = "";
var story = ["Type a four letter code to get out. Press shift to go back to room", 
			"Meet me today after math class. Don't forget your locker combo: 420. You even forgot your locker number! Here: I am the beginning of the end, the end of every place. I am the beginning of eternity, the end of time and space. What am I? the answer will lead to your locker number. :) <3 S.", 
			"There's a test on the table. Name: Charlotte, Grade: F"];

var randomNotes = ["Meet me after school today. I have to talk to you. I know about you and [the note is cut off here]", 
					"Please have this signed by your parents Tuesday.", 
					"Can I copy off your math homework?? :) <3",
					"I'm screwed for the physics test. Didn't study at all last night...",
					"Left a note in the usual spot. Remember this gem from when we were young? You bury me when I'm alive and dig me up only when I die, what am I?",
					"MUN meeting today after school, bring cookies. Also, Super Smash Bros tournament afterwards. Me and my girl Princess Peach are going to kick your ass.",
					"We need to call a meeting for game design club officers. Our budget is severely restricting our individuality"
					];

var deskNotes = [["I'm pretty sure we already went over this stuff. The class is such a waste of time",
				  "Why does he have to be so judge-y about other people's questions? God.",
				  "Hey baby, today under the bleachers? ;)",
				  "Do you wanna watch Juno with me today?"],
				  ["The last episode of the Legend of Korra wrecked me emotionally",
				  "Personal Essay: How I Got a Girlfriend [in red pen] 'this is not an appropriate topic'",
				  "Personal Essay: My battle with the APUSH curriculum",
				  "Personal Essay: My battle with the AMSTED curriculum"],
				  ["Personal Essay: My battle with the IB History curriculum",
				  "Personal Essay: A Change of Scenery - My move when I was 9 years old",	
				  "Personal Essay: Working with Syrian Refugees [in red pen] 'wow!!'",
				  "This is wack. I don't know why my essay was rejected. Ms Coleman doesn't even know what she's doing",
				  "Critical Essay - Yams of Wrath: Okonkwo's anger issues "],
				  ["Critical Essay - Milkboy to Milkman: Milkman's coming of age in the Song of Solomon",
				  "Critical Essay - Is Atticus Finch a Racist?!?!?!",
				  "Critical Essay - The Adventures of a Whiny Rich Boy: the Adventures of Tom Sawyer",
				  "The Journey of the Paper Crane"] 

				]
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
	rmFor = loadImage("elizabethBackground.png");
		
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
	singleDoor = loadImage('singleD.png');
	locker = loadImage('littleLocker.png');
	endLocker = loadImage('bigLocker.png');


	//random paper notes
	for(var i = 0; i < 7; i++){
		randomPaper.push(new obj(paper, random(70, 430), random(90, 430), 30, 30));
	}
	
	//random textBoxes too
	for(var i = 0; i < 7; i++){
		otherNotes.push(new textBox(350, randomNotes[i]));
	}

	//initializing the locker objects
	for(var i = 0; i < 4; i++){
		lockerList.push(new obj(locker, 450, 30*i + 310, 30, 30));

	}


	//textAlign(CENTER, CENTER);
	textSize(15);
	fill(0);
	myCharlotte = new charlotte(forward,right1, left,up, 250, 250, 31, 47);
	doubDoor = new obj(door, 200, 40, 50, 53);
	pottedPlant = new obj(plant, 5, 435, 40, 60);
	singDoor = new obj(singleDoor, 215, 30, 30, 50);
	promptExit = new textBox(350, story[0]);
	plantText = new textBox(350, story[1]);
	teachTab = new obj(desk, 250, 250, 50, 50);
	teachText = new textBox(350, story[2]);
	lockerLast = new obj(endLocker, 450, 430, 30, 40);

	for(var i = 0; i < deskList.length; i++){
		for(var j = 0; j < 5; j++){
			deskList[i].push(new obj(desk, 90*i + 30, 120*j + 70, 40, 40));
			deskText1[i].push(new textBox(350, deskNotes[i][j]));
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
		else if(myCharlotte.ypos < 80){
			myCharlotte.ypos = 80;
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
		lockerList[i].display();
	}
	lockerLast.display();

	for(var i = 0; i < 7; i++){

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
		myCharlotte.ypos = 80;
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
				if(keyPressed == true && key == 'a'){
					deskText1[i][j].display();
				}
				//myCharlotte.xpos = deskList;
			}
			else if(deskList[i][j].checkLeft()){
				myCharlotte.xpos = deskList[i][j].xpos + deskList[i][j].width;
				if(keyPressed == true && key == 'a'){
					deskText1[i][j].display();
				}
			}
			else if(deskList[i][j].checkUp()){	
				myCharlotte.ypos = deskList[i][j].ypos - myCharlotte.height;
				if(keyPressed == true && key == 'a'){
					deskText1[i][j].display();
				}
			}	
			else if(deskList[i][j].checkDown()){
				myCharlotte.ypos = deskList[i][j].ypos + deskList[i][j].height;
				if(keyPressed == true && key == 'a'){
					deskText1[i][j].display();
				} 
			}
		}
	}



	// if(deskList[2][2].checkLeft() && key == 'a'){
	// 	deskText.display();
		
	// }

	if (myCharlotte.xpos + myCharlotte.width >= 500 && myCharlotte.ypos + myCharlotte.height > 185 && myCharlotte.ypos < 255){
		currentScreen = 0;
		myCharlotte.xpos = 1;
	}

}

void rm3() {
	//controls third room
	image(rmThr, 0, 0, 500, 500);
	if (myCharlotte.xpos <= 0 && myCharlotte.ypos + myCharlotte.height > 240 && myCharlotte.ypos < 295){
		currentScreen = 0;
		myCharlotte.xpos = 500 - myCharlotte.width - 1;
	}
	teachTab.display();
	//console.log(deskList[i][j].xpos);
	if(teachTab.checkRight()){
		myCharlotte.xpos = teachTab.xpos - myCharlotte.width;
		if(keyPressed == true && key == 'a'){
			teachText.display();
		}
		//myCharlotte.xpos = deskList;
	}
	else if(teachTab.checkLeft()){
		myCharlotte.xpos = teachTab.xpos + teachTab.width;
		if(keyPressed == true && key == 'a'){
			teachText.display();
		}
	}
	else if(teachTab.checkUp()){	
		myCharlotte.ypos = teachTab.ypos - myCharlotte.height;
		if(keyPressed == true && key == 'a'){
			teachText.display();
		}
	}	
	else if(teachTab.checkDown()){
		myCharlotte.ypos = teachTab.ypos + teachTab.height;
		if(keyPressed == true && key == 'a'){
			teachText.display();
		} 
	}

}

void rm4(){
	//controls forth room
	image(rmFor, 0, 0, 500, 500);
	singDoor.display();
	if (myCharlotte.xpos <= 260 && myCharlotte.xpos + myCharlotte.width > 205 && myCharlotte.ypos <= 80){
		currentScreen = 0;
		myCharlotte.ypos = 500 - myCharlotte.height - 1;
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
		//to figure out the coordinate of the wall
		console.log(doubDoor.ypos + doubDoor.height);
	}
}