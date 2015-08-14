			PImage forward;
			PImage right1;
			PImage right2;
			PImage left;
			PImage up;
			PImage objectImage;
			charlotte myCharlotte;
			obj myObj;
			//switching images for up, down, left, right
			var valueImage = 0;
			var xpos = 0;
			var ypos = 0;

			//class for main character 
			//includes functions for moving up, moving down, etc. Also a function for interactions
			class charlotte{
				var xpos;
				var ypos;
				var forward;
				var right1;
				var right2;
				var left;
				var up;
				var width;
				var height;

				charlotte(tmpforward, tmpright1, tmpright2, tmpLeft, tmpUp, tmpXpos, tmpYpos, tmpwidth, tmpheight){
					forward = tmpforward;
					right1 = tmpright1;
					right2 = tmpright2;
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

				// void interact(xParam, yParam, textParam){
				// 	//console.log(xpos);
				// 	//console.log(ypos);
				// 	if(xpos >= xParam - 58 && ypos >= yParam - 108 &&  ypos <= yParam && xpos <= xParam + 58){
				// 		//stop when hit this xpos
				// 		 if(xpos >= xParam -58 && xpos < xParam + 58){

				// 		 	xpos = xpos-5;
				// 		 // 	if(ypos >= yParam - 108 && ypos < yParam + 108){
				// 			// 	ypos = ypos -5;
				// 			// }
				// 			// else if(ypos <= yParam + 108){
				// 			// 	ypos = ypos + 5;
				// 			// }		
							
				// 		 }else if(xpos <= xParam + 58){
				// 		 		console.log()
				// 				xpos = xpos + 5;
				// 			}

						
				// 		if(keyPressed == true && keyCode == ALT){
				// 			console.log(textParam);
				// 		}
				// 	}
				// }

				
			}

			/*a class for an objects. 
			for functions: sensing left, right, up, down with the character
				return booleans*/

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
			//make functions for switching to different screens
			void setup(){
				size(400, 400);
				//background(0);
				//console.log("i'm now loading the image");
				forward = loadImage('charlotteF.png');
				right1 = loadImage('charlotteR.png');
				right2 = loadImage('charlotteR2.png')
				left = loadImage('charlotteL.png');
				up = loadImage('charlotteB.png');
				objectImage = loadImage('kitty.jpg');
				myCharlotte = new charlotte(forward,right1, right2, left,up, 0, 0, 31, 47);
				myObj = new obj(objectImage, 200, 200, 100, 100);

			}
			void draw(){
				background(255);
				fill(255, 0, 0);
				rect(200, 200, 58, 108);
				myObj.display();

				myCharlotte.display();
				myCharlotte.moveRight();
				myCharlotte.moveLeft();
				myCharlotte.moveUp();
				myCharlotte.moveDown();
				if(myObj.checkRight()){
					console.log(myCharlotte.xpos);
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
				//myCharlotte.interact(200, 200, "this is an ellipse");
				
			}