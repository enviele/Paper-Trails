//images used
PImage forward, right1, right2, left, up;
PImage objectImage, plant, desks, door, singleDoor, paper; 
PImage frontDoor, mathRm, rmThr, rmFor; 
PImage uLose, titleScreen;
PImage paper, locker1, endLocker;



//objects
charlotte myCharlotte;
obj teachTab;
obj pottedPlant;
//textboxes to interact with objects
textBox insideLocker;
textBox promptExit;
textBox promptLock;
textBox plantText;
textBox otherNotes = [];
textBox deskText1 = [[],[],[],[]];
//objects to display desks and papers in the main room
obj deskList = [[],[],[],[]];
obj randomPaper = [];
//obj picturePaper;
//obj lockerList = [];
locker lockerList = [];


boolean exitDoor = false;
boolean gameOver = false;
boolean lockerRoom = false;
boolean startGame = true;
boolean displayTextBox = false;

String codeText = "";
String lockCode = "";

var lockerCodes = ["1666", "2153", "3248", "4206", "5420"];
var assignLock;
// var lockerCodes = new Array();
// lockerCodes["first"] = 1666;
// lockerCodes["second"] = 2153;
// lockerCodes["third"] = 3258;
// lockerCodes["fourth"] = 4206;
// lockerCodes["fifth"] = 1666;

var story = ["Type a four letter code to get out. Press shift to go back to room", 
			"Meet me today after math class. Don't forget your locker combo: 420. You even forgot your locker number! Here: I am the beginning of the end, the end of every place. I am the beginning of eternity, the end of time and space. What am I? the answer will lead to your locker number. :) <3 S.", 
			"There's a test on the table. Name: Charlotte, Grade: F"];

//main room notes

var randomNotes = ["Meet me after school today. I have to talk to you. I know about you and [the note is cut off here]", 
					"[A PICTURE OF TWO GIRLS. THEY'RE OBVIOUSLY QUITE CLOSE. A CAPTION ON THE BACK READS 'SOPHIE LOOKS LIKE AN IDIOT IN THIS PICTURE ;) LOVE HER DUMB FACE THOUGH - C']",
					"Please have this signed by your parents Tuesday.", 
					"Can I copy off your math homework?? :) <3",
					"I'm screwed for the physics test. Didn't study at all last night...",
					"Left a note in the usual spot. Remember this gem from when we were young? You bury me when I'm alive and dig me up only when I die, what am I?",
					"MUN meeting today after school, bring cookies. Also, Super Smash Bros tournament afterwards. Me and my girl Princess Peach are going to kick your butt.",
					"We need to call a meeting for game design club officers. Our budget is severely restricting our individuality"
					];

//desk notes

var deskNotes = [["I'm pretty sure we already went over this stuff. The class is such a waste of time",
				  "Why does he have to be so judge-y about other people's questions? God.",
				  "Hey baby, today under the bleachers? ;)",
				  "Do you wanna watch Juno with me today?"],
				  ["The last episode of the Legend of Korra wrecked me emotionally",
				  "Personal Essay: How I Got a Girlfriend [in red pen] 'this is not an appropriate topic'",
				  "Personal Essay: My battle with the APUSH curriculum",
				  "Personal Essay: My battle with the AMSTED curriculum"],
				  ["Personal Essay: My battle with the IB History curriculum",
				  "Personal Essay: A Change of Scenery - My move when I was 9 years old [written comment] 'I'm glad you moved here though. You should know you've been my best friend since we were 9' -S",	
				  "Personal Essay: Working with Syrian Refugees [in red pen] 'wow!!'",
				  "This is dumb. I don't know why my essay was rejected. Ms Coleman doesn't even know what she's doing",
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

/*

	following functions from smallRect to endingKeyCode is for the ending door code

*/

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

/* 

	function for interactions with objects
	Also displays the objects
	coded on the airplane, so not completely sure it works
	the function takes parameters for objects and text boxes
	the touch_boolParam asks if you want charlotte to bump into the object

*/

function interact(obj_param, text_param, touch_boolParam){

	//var displayTextBox = false; 
	var countingKeyPress = 0;

	obj_param.display();
	
	if(touch_boolParam){

		if(obj_param.checkRight()){
				myCharlotte.xpos = obj_param.xpos - myCharlotte.width;
				if(keyPressed == true && key == 'a'){
				
					displayTextBox = true;
				
				}
				 if(keyPressed == true && key == 'b'){
				 	displayTextBox = false;

				 }
		}

		else if(obj_param.checkLeft()){
				myCharlotte.xpos = obj_param.xpos + obj_param.width;
				if(keyPressed == true && key == 'a'){
					
					displayTextBox = true;
					
				}
				 if(keyPressed == true && key == 'b'){
				 	displayTextBox = false;

				 }

		}

		else if(obj_param.checkUp()){	
				myCharlotte.ypos = obj_param.ypos - myCharlotte.height;
				if(keyPressed == true && key == 'a'){
					//text_param.display();
					displayTextBox = true;
					//countingKeyPress = 1;
				}
				 if(keyPressed == true && key == 'b'){
				 	displayTextBox = false;

				 }
		}

		else if(obj_param.checkDown()){
				myCharlotte.ypos = obj_param.ypos + obj_param.height;
				if(keyPressed == true && key == 'a'){
					//text_param.display();
					displayTextBox = true;
					//countingKeyPress = 1;
				}
				 if(keyPressed == true && key == 'b'){
				 	displayTextBox = false;

				 }
		}

		
	 	if(displayTextBox){
				console.log("displaying text");
				text_param.display();
			 }


	}

	else{
		if(obj_param.checkRight()){
				if(keyPressed == true && key == 'a'){
					text_param.display();
				}
					
		}

		else if(obj_param.checkLeft()){
				if(keyPressed == true && key == 'a'){
					text_param.display();
				}
					
		}

		else if(obj_param.checkUp()){	
				if(keyPressed == true && key == 'a'){
					text_param.display();
				}
						
		}	

		else if(obj_param.checkDown()){
				if(keyPressed == true && key == 'a'){
					text_param.display();
				}
						
		}
	}


}


/*

	This is a class for the main character - charlotte
	Takes in parameters for switching the sprite display as it moves. 
	Also takes in parameters for the x position, y position, width, and height
	class includes functions for display as well as moving right, left, up, and down

*/

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

/*

	class for text boxes that pop up as the sprite interacts with objects
	Takes in parameters for the y position and a string to fill the text box
	includes a display function

*/
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


/*

	a class for an objects. 
	for functions: sensing left, right, up, down with the character
	Each function returns a boolean return booleans
	Parent class of locker class below

*/

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

/*

	Parent/child with main obj class above.
	Takes in one additional parameter for a locker code

*/

class locker extends obj{

	
	var codes;

	locker(tmpImg1, tmpXpos, tmpYpos, tmpwidth, tmpheight, tmpCodes){

		super(tmpImg1, tmpXpos, tmpYpos, tmpwidth, tmpheight);
		codes = tmpCodes;
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
	uLose = loadImage("GameOverScreen.png");
		
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
	locker1 = loadImage('littleLocker.png');
	endLocker = loadImage('bigLocker.png');
	titleScreen = loadImage('openingScreen.png');


	//random paper notes
	for(var i = 0; i < randomNotes.length; i++){
		randomPaper.push(new obj(paper, random(70, 400), random(90, 400), 30, 30));
	}
	
	//random textBoxes too
	for(var i = 0; i < randomNotes.length; i++){
		otherNotes.push(new textBox(350, randomNotes[i]));
	}

	//initializing the locker objects
	//at the moment, checkRight can't tell which locker you are at
	//Therefore, it doesn't know which code is the correct code
	for(var i = 0; i < 4; i++){
		lockerList.push(new locker(locker1, 460, 30*i + 330, 30, 30, lockerCodes[i]));

	}

	lockerList.push(new locker(endLocker, 460, 450, 30, 40, lockerCodes[4]));
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
	insideLocker = new textBox(350, "Inside the locker, there is a birthday card. It reads: 'Happy 9th Birthday from your best friend! -S'")
	//the lockCode is not working because setup only runs once.
	//therefore, at the time, lockCode is an empty string. 
	//Since we never update promptLock, it will keep displaying as if lockCode were an empty string
	//to display, I used a property of textboxes: .s
	promptLock = new textBox(350, "Please enter the locker number and locker combination: " + lockCode);


	for(var i = 0; i < deskList.length; i++){
		for(var j = 0; j < 5; j++){
			deskList[i].push(new obj(desk, 90*i + 30, 120*j + 70, 40, 40));
			deskText1[i].push(new textBox(350, deskNotes[i][j]));
		}
	}

}

void draw(){

	/*

		switches backgrounds as you go into different rooms

	*/
	switch(currentScreen) {
		case 0:
			titleCode();
			break;
		case 1: 
			bigDoor(); 
			break;
		case 2: 
			mathClass(); 
			break;
		case 3: 
			rm3(); 
			break;
		case 4:
			rm4();
			break;
		case 5:
			endScreen();
			break;
		default: 
			background(0); 
			break;
	}

	/* 

	ensures that charlotte is able to move during the entire game
	
	*/
	if (!exitDoor && !startGame && !gameOver){
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

/*

function for displaying the title art at the beginning
courtesy of Elizabeth Viele <3

*/

void titleCode() {

	image(titleScreen, 0, 0, 500, 500);
	if(mousePressed){
		startGame = false;
		currentScreen = 1;
	}
}

/*

function for displaying the first room
Objects in the first room are: the potted plant, the exit door, lockers, and papers littering the floor


*/

void bigDoor() {
	//controls the first room
	image(frontDoor, 0, 0, 500, 500);
	//Displaying objects
	doubDoor.display();
	pottedPlant.display();

	/*
		
		CHECKING THE EXIT DOOR CODE

	*/

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


	/*
		DISPLAYING AND INPUTTING LOCKER CODES
		use a for loop to display and check locker codes
		assign lock saves the current locker that you are at in order to check the correct locker code 


	*/
	for(var i = 0; i < lockerList.length; i++){
		lockerList[i].display();
		if(lockerList[i].checkRight()){
			myCharlotte.xpos = lockerList[i].xpos - myCharlotte.width;
			if(keyPressed && key == 'a' ){
				console.log(i);
				console.log(lockerCodes[i]);
				lockerRoom = true;
				promptLock.display();
				assignLock = i;
			}
		}
		else if(lockerList[i].checkUp()){	
			myCharlotte.ypos = lockerList[i].ypos - lockerList[i].height;
		}	
		else if(lockerList[i].checkDown()){
			myCharlotte.ypos = lockerList[i].ypos + lockerList[i].height;
		}
		
		
	}

	/*

		CHECK THE LOCKER ROOM CODES HERE
		Codes only display permanently with a boolean.
		Consider assigning booleans to all objects to get the text boxes to display permanently until dismissed
		Don't feel like coding it in right now, but it should be put into the interact function

	*/
	if(lockerRoom){
			promptLock.display();
			//for(var i = 0; i < 4; i++){
				//if( assignLock == i){
					if(lockCode.length == 4){
					  	if(lockCode == lockerList[assignLock].codes){
					  		console.log("yatta! I remember my locker combo!");
					  		insideLocker.display();
					  		if(keyPressed && keyCode == SHIFT){
						  		lockerRoom = false;
					  		}
						}
						else{
							console.log("nope wrong number");
						  	lockCode = "";
							promptLock.s = "Please enter the locker number and locker combination: "; 
						}
	  				}
				
			//}
			
		}

	//lockerLast.display();

	for(var i = 0; i < randomNotes.length; i++){
		randomPaper
		interact(randomPaper[i], otherNotes[i], false);
	}

	
	interact(pottedPlant, plantText, true);

	//switching screens
	if (myCharlotte.xpos <= 0 && myCharlotte.ypos + myCharlotte.height > 185 && myCharlotte.ypos < 255){
		currentScreen = 2;
		myCharlotte.xpos = 500 - myCharlotte.width;
	}
	else if (myCharlotte.xpos + myCharlotte.width >= 500 && myCharlotte.ypos + myCharlotte.height > 240 && myCharlotte.ypos < 295){
		currentScreen = 3;
		myCharlotte.xpos = 0;
	}
	else if (myCharlotte.xpos < 260 && myCharlotte.xpos + myCharlotte.width > 205 && myCharlotte.ypos + myCharlotte.height >= 500){
		currentScreen = 4;
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
		if(codeText.length == 4){
		  	if(codeText == "59sc"){
		  		console.log("you win");
			}
			else{
				currentScreen = 5;
				// gameOver = true;
	  	// 		image(uLose, 0, 0, 500, 500);
			  	codeText = "";
			}
  		}
	}
}	

/*

	DISPLAYS THE ROOM WITH ALL THE DESKS
	desks are in a 2D array in the room

*/


void mathClass() {
	//controls second room
	image(mathRm, 0, 0, 500, 500);
	for(var i = 0; i < deskList.length; i++){
		for(var j = 0; j < 5; j++){
			interact(deskList[i][j], deskText1[i][j], true);
		}
	}



	// if(deskList[2][2].checkLeft() && key == 'a'){
	// 	deskText.display();
		
	// }

	if (myCharlotte.xpos + myCharlotte.width >= 500 && myCharlotte.ypos + myCharlotte.height > 185 && myCharlotte.ypos < 255){
		currentScreen = 1;
		myCharlotte.xpos = 1;
	}

}

/*

DISPLAYS THE ROOM WITH THE FAILED MATH TEST

*/

void rm3() {
	//controls third room
	image(rmThr, 0, 0, 500, 500);
	if (myCharlotte.xpos <= 0 && myCharlotte.ypos + myCharlotte.height > 240 && myCharlotte.ypos < 295){
		currentScreen = 1;
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

/*

DISPLAYS THE EMPTY ROOM FOR NOW

*/

void rm4(){
	//controls forth room
	image(rmFor, 0, 0, 500, 500);
	singDoor.display();
	if (myCharlotte.xpos <= 260 && myCharlotte.xpos + myCharlotte.width > 205 && myCharlotte.ypos <= 80){
		currentScreen = 1;
		myCharlotte.ypos = 500 - myCharlotte.height - 1;
	}
}

void endScreen(){
	image(uLose, 0, 0, 500, 500);
	gameOver = true;
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


	if(lockCode.length < 4 && lockerRoom){
		if (keyCode != SHIFT && keyCode != CONTROL && keyCode != ALT) {
		    lockCode = lockCode + String(key);
		    promptLock.s += String(key);
		    console.log(lockCode);
		}
		else if (keyCode == SHIFT) {
			lockerRoom = false;
			promptLock.s = "Please enter the locker number and locker combination: "; 
		}
	}
}