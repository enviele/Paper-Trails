//Setting up the canvas for the first scene
/*var idList = ["#bigDoor", "mathClass"];
var rmNum = 0;*/
void setup() {
	console.log("setup");
	size(1000, 800);
	background(0, 235, 255);
	//$('#bigDoor').show();
}
void draw(){
	console.log("draw loop");
	noLoop();
}
/*void mousePressed(){
	console.log("where am I?");
	noLoop();
	//when the person hits a specific spot in the room, the rmNum changes
	//when the rmNum changes, it shows the new room and hides all the other ones
	$(idList[rmNum]).show();
	for(var elem = 0; elem < idList.length; elem++){
		if (elem != rmNum){
			$(idList[elem]).hide();
		}
	}

}
*/