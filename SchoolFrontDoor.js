//Setting up the canvas for the first scene
/*var idList = ["#bigDoor", "mathClass"];
var rmNum = 0;*/
void setup() {
	console.log("setup");
	size(1000, 800);
	background(0, 0, 255);
}
void draw(){
	console.log("draw loop");
	noLoop();
}
//Mousepressed should be replaced with xy coordinates in the future
//the xy coordinates should correspond to where the doors are in the background image
void mousePressed(){
	rmNum = 1;
	console.log("where am I?");
	noLoop();
	//when the person hits a specific spot in the room, the rmNum changes
	//when the rmNum changes, it shows the new room and hides all the other ones
	$(idList[rmNum]).show();
	for(var elem = 0; elem < idList.length; elem++){
		console.log("for loop");
		if (elem != rmNum){
			$(idList[elem]).hide();
			console.log("phwump!");
		}
	}

}
