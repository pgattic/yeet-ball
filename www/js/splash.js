var splashImg = document.getElementById("splash");
function drawSplash() {
	ctx.drawImage(splashImg, 0, -(canvas.width - canvas.height) / 2, canvas.width, canvas.width);
	splashFrames--;
	if (splashFrames <= 0) {
		gameState = inMenu;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}
