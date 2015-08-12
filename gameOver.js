
void setup() {
	console.log("setup yourself to fail");
	size(900, 800);
	background(255, 0, 0);
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