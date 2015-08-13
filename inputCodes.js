String myText = "";
 
void setup() {
  size(500, 500);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(0);
}
 
void draw() {
  background(255);
  text(myText, 0, 0, width, height);
  if(myText == "59sc"){
  	console.log("you win!");
  }
}
 //implement a variable to see whether you're near the door
 //so if you're 20 away from door, make variable true
void keyPressed() {
	//if variable is true, run this code on keyPressed
	if(myText.length < 4){
  	 	//if (keyCode == DELETE) {
   			// myText = "";
  		//} else 
  		if (keyCode != SHIFT && keyCode != CONTROL && keyCode != ALT) {
    		myText = myText + String(key);
  		}
	}
	if(keyCode == DELETE){
		myText = "";
	}
  
}