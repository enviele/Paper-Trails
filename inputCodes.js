void setup(){
	size(400, 400);
	background(0);
}
function letterInput(){
	if(keyPressed){
		if(key == 'b'){
			console.log("b");
			console.log(key);
			console.log(key.toString());
			//return(letterNumber);
		}
	}

}

void draw(){
	letterInput();

}