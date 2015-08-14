String myText = "";
 
void setup() {
  size(500, 500);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(0);
}

/* when we make the main door, we have to put a variable in that tests whether we're near the main door.
If the variable is TRUE: we will run the text input code. If the variable is FALSE the input code
does not run*/ 
 
void draw() {
  background(255);
  text(myText, 0, 0, width, height);
  if(myText.length ==4){
	  	if(myText == "59sc"){
	  	console.log("you win");
		}else{
		  	console.log("try again");
		  	myText = "";
		}
  }
  
}
 
void keyPressed() {
	if(myText.length < 4){
		if (keyCode == BACKSPACE) {
		    if (myText.length > 0) {
		      myText = myText.substring(0, myText.length()-1);
		    }
		} else if (keyCode == DELETE) {
			    myText = "";
		} else if (keyCode != SHIFT && keyCode != CONTROL && keyCode != ALT) {
			    myText = myText + String(key);
			}
	}
}