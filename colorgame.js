var colors = randomColor(6);

var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.querySelector("#message");
var color = document.querySelector("h1");
color.textContent = pickedColor;
var reset = document.querySelector("#reset");
var header =document.querySelector("#header");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");

	colors = randomColor(3);
	pickedColor = pickColor();
	for (var i = 0; i < square.length; i++) {
		if(i < 3){
		square[i].style.background = colors[i];
		}
		else{
			square[i].style.background = "none";
		}
	}
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors = randomColor(6);
	pickedColor = pickColor();
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
		}
	
})

reset.addEventListener("click", function(){
	header.style.background = "steelblue";
	colors = randomColor(10);
	pickedColor = pickColor();
	color.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
	square[i].style.background = colors[i];
}

})

for (var i = 0; i < square.length; i++) {
	square[i].style.background = colors[i];
	square[i].addEventListener("click", function(){
		if(this.style.background === pickedColor){
			message.textContent = "Correct!";
			reset.textContent = "Play Again? "
			for (var j = 0; j < square.length; j++) {
	square[j].style.background = pickedColor;
	header.style.background = pickedColor;
}
			
		}
		else{
			this.style.background = "#232323";
			message.textContent = "Try Again!";
			
		}
	})
}

function randomColor(num){
	var arr = [];
	for (var i = 0; i < num ; i++) {
		arr[i] = "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
	}
	return arr;
		}

function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}