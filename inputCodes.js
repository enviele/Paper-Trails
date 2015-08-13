var codeInput = [];

void setup(){
	size(400, 400);
	background(0);
}
function letterInput(){
	if(keyPressed && codeInput.length < 4){
		codeInput.push(String(key));
		console.log(codeInput);
	}

}

void draw(){
	letterInput();
	// if(text[0] == !null){
	// 	console.log("hello");
	// 	if(text1.equals("59sc")){
	// 		console.log("you win!");
	// 		noLoop();
	// 	}
	// 	else {
	// 		console.log("you lose. try again stupid");
	// 		noLoop();
	// 	}
	// }
	//for(var i = 0; i++; i<codeInput.length){
	if(codeInput[0] == 5 && codeInput[1] == 9 && codeInput[2] == "s" && codeInput[3] == "c"){
		console.log("you win");
	}
	// else{
	// 	console.log("lose");
	// }
	//}
	

}
