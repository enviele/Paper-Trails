
void setup() {
	console.log("setup yourself to fail");
	size(900, 800);
	background(255, 0, 0);
	congrats = loadImage("winScreen.jpg");
	tooBad = loadImage("overScreen.jpg");
	$("#overGame").hide();
}
if (gameOver == true){
	for (var g = 0; g < idList.lenth; g++){
		//hides all rooms
		$(idList[g]).hide();
	}
	//shows the game over/winning screen
	$("#overGame").show();
}
/*void draw(){
	if (gameOver == true){
		if (win == true){
			lose = false;
			image(congrats, 0, 0);		
		}
		if (lose == true){
			win = false;
		}
	}
}*/