function menuTouchHandler(e) {
	var touches = e.changedTouches;
	for(var i = 0; i < e.changedTouches.length; i++) {
		var touchId = e.changedTouches[i].identifier;
		var touchX = e.changedTouches[i].pageX;
		var touchY = e.changedTouches[i].pageY;
	}
	if (touchX >= menuPlayButtonX - menuPlayButtonRadius && touchX <= menuPlayButtonX + menuPlayButtonRadius && touchY >= menuPlayButtonY - menuPlayButtonRadius && touchY <= menuPlayButtonY + menuPlayButtonRadius) {
		gameState = inGame;
		ctx.translate((canvas.width - screenWidth) / 2, (canvas.height - screenHeight) / 2);
	}
}

function clearMenuCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawMenuBG() {
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = bgColor;
	ctx.fill();
	ctx.closePath();
	for (let i = 1; i < 8; i++) {
		ctx.beginPath();
		ctx.moveTo((canvas.width / 8) * i, 0);
		ctx.lineTo((canvas.width / 8) * i, canvas.height);
		ctx.lineWidth = 3;
		ctx.strokeStyle = gridColor;
		ctx.stroke();
		ctx.closePath();
	}
	for (let i = 1; i < 8; i++) {
		ctx.beginPath();
		ctx.moveTo(0, (canvas.width / 8) * i);
		ctx.lineTo(canvas.width, (canvas.width / 8) * i);
		ctx.lineWidth = 3;
		ctx.strokeStyle = gridColor;
		ctx.stroke();
		ctx.closePath();
	}

}

function drawPlayButton() {
	ctx.beginPath();
	ctx.arc(menuPlayButtonX, menuPlayButtonY, menuPlayButtonRadius, 0, Math.PI * 2, false);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(menuPlayButtonX - menuPlayButtonRadius / 3, menuPlayButtonY - menuPlayButtonRadius / 2);
	ctx.lineTo(menuPlayButtonX - menuPlayButtonRadius / 3, menuPlayButtonY + menuPlayButtonRadius / 2);
	ctx.lineTo(menuPlayButtonX + menuPlayButtonRadius / 2, menuPlayButtonY);
	ctx.closePath;
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
}

function drawLogo() {
	ctx.drawImage(saveState, canvas.width / 2 - 355 / 2, canvas.height - 40);
}

function drawTitle() {
	ctx.font = "64px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("YEET BALL", menuPlayButtonX, menuPlayButtonRadius);
}

function drawMenu() {
	clearMenuCanvas();
	drawMenuBG();
	drawPlayButton();
	drawTitle();
	drawLogo();
}
