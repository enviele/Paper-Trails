
void setup() {
	console.log("setup");
	size(900, 800);
	background(90, 140, 205);
}
if (gameOver == true){
	for (var g = 0; g < idList.lenth; g++){
		$(idList[g]).hide();
	}
	$("#overGame").show();
}