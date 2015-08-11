//Math classroom
void setup() {
	console.log("setup");
	size(1000, 800);
	background(0, 5, 255);
	//$('#bigDoor').show();
}
void draw(){
	console.log("draw loop");
	noLoop();
}
void mousePressed(){
	console.log("failing math");
	noLoop();
	$(idList[rmNum]).show();
}