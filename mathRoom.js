//Math classroom
void setup() {
	console.log("setup equation");
	size(1000, 800);
	background(0, 255, 0);
	$('#mathClass').hide();
}
void draw(){
	console.log("draw ellipse");
	noLoop();
}
void mousePressed(){
	console.log("failing math");
	noLoop();
	$(idList[rmNum]).show();
}