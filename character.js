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
			textBox myText;
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

					if(myCharlotte.xpos >= myObj.xpos - myCharlotte.width
						&& myCharlotte.xpos < myObj.xpos
						&& myCharlotte.ypos + myCharlotte.height >= myObj.ypos 
						&& myCharlotte.ypos<= myObj.ypos + myObj.height){
						isRight = true;
						//console.log("charlotte is to the right of me");
						return isRight;
					}
				}

				void checkLeft(){
					//console.log(myCharlotte.width);
					if(myCharlotte.xpos <= myObj.xpos + myObj.width
						&& myCharlotte.xpos > myObj.xpos + myObj.width -20
						&& myCharlotte.ypos + myCharlotte.height >= myObj.ypos 
						&& myCharlotte.ypos<= myObj.ypos + myObj.height){
						isLeft = true;
						//console.log("charlotte is to the left of me");
						return isLeft;
					}
				}
				void checkUp(){
					if(myCharlotte.ypos >= myObj.ypos - myCharlotte.height
						&& myCharlotte.ypos < myObj.ypos - myCharlotte.height + 20
						&& myCharlotte.xpos >= myObj.xpos
						&& myCharlotte.xpos <= myObj.xpos + myObj.width){
						isUp = true;
						//console.log("charlotte is up");
						return isUp;

					}
				}

				void checkDown(){
					if(myCharlotte.ypos <= myObj.ypos + myObj.height
						&& myCharlotte.ypos > myObj.ypos + myObj.height - 20 
						&& myCharlotte.xpos >= myObj.xpos
						&& myCharlotte.xpos <= myObj.xpos + myObj.width){
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
				forward = loadImage('charlotteF.png');
				right1 = loadImage('charlotteR.png');
				//right2 = loadImage('charlotteR2.png');
				left = loadImage('charlotteL.png');
				up = loadImage('charlotteB.png');
				objectImage = loadImage('kitty.jpg');
				myCharlotte = new charlotte(forward,right1, left,up, 0, 0, 31, 47);
				myObj = new obj(objectImage, 200, 200, 100, 100);
				myText = new textBox(300, "this is a text box");

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
					myCharlotte.ypos = myObj.ypos + myObj.height; 

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
			void draw(){
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