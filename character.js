			PImage forward;
			PImage right1;
			PImage right2;
			PImage left;
			PImage up;
			charlotte myCharlotte;
			//switching images for up, down, left, right
			var valueImage = 0;

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

				charlotte(tmpforward, tmpright1, tmpright2, tmpLeft, tmpUp, tmpXpos, tmpYpos){
					forward = tmpforward;
					right1 = tmpright1;
					right2 = tmpright2;
					left = tmpLeft;
					up = tmpUp;
					xpos = tmpXpos;
					ypos = tmpYpos;
				}

				void display(){
					if(valueImage == 0){
						image(forward, xpos, ypos);
					}
				}

				void moveRight(){
					
					//var a = 0;
					
					if(keyPressed == true && keyCode == RIGHT){
						valueImage = 1;
						xpos = xpos+5;
						
					}
					if(valueImage == 1){
						image(right1, xpos, ypos);
						
					}
					
					
						
				}

				void moveLeft(){
					if(keyPressed == true && keyCode == LEFT){
						valueImage = 2;
						xpos = xpos-5;
						
					}
					if(valueImage == 2){
						image(left, xpos, ypos);
					}
					

				}

				void moveUp(){
					if(keyPressed == true && keyCode == UP){
						valueImage = 3;
						ypos = ypos-5;
						
					}
					if(valueImage == 3){
						image(up, xpos, ypos);
					}
				}

				void moveDown(){
					if(keyPressed == true && keyCode == DOWN){
						valueImage = 0;
						ypos = ypos+5;
						
					}
					
				}

				void interact(xParam, yParam, textParam){
					//console.log(xpos);
					//console.log(ypos);
					if(xpos >= xParam - 100 && xpos <= xParam && ypos >= yParam - 100 && ypos <= yParam + 50 ){
						//console.log("i'm in range rn");
						console.log(keyPressed);
						console.log(keyCode);
						console.log(ALT);
						if(keyPressed == true && keyCode == ALT){
							console.log(textParam);
						}
					}
				}

				
			}
			//make functions for switching to different screens
			void setup(){
				size(400, 400);
				//background(0);
				console.log("i'm now loading the image");
				forward = loadImage('charlotteFL.png');
				right1 = loadImage('charlotteR1.png');
				right2 = loadImage('charlotteR2.png')
				left = loadImage('leftCat.jpg');
				up = loadImage('catUp.jpg');
				myCharlotte = new charlotte(forward,right1, right2, left,up, 0, 0);

			}
			void draw(){
				background(255);
				fill(255, 0, 0);
				ellipse(200, 200, 20, 20);
				myCharlotte.display();
				myCharlotte.moveRight();
				myCharlotte.moveLeft();
				myCharlotte.moveUp();
				myCharlotte.moveDown();
				myCharlotte.interact(200, 200, "this is an ellipse");
				
			}