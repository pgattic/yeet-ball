document.addEventListener("pause", pauseHandler);
document.addEventListener("backbutton", backButtonHandler);
document.addEventListener("menubutton", menuButtonHandler);
document.addEventListener("touchmove", touchMoveHandler);
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchend", touchEndHandler);

function pauseHandler() {
	if (gameState == inGame && !isPaused) {
		isPaused = true;
	}
}

function backButtonHandler() {
	if (gameState == inGame && !isPaused) {
		isPaused = true;
	}
}

function menuButtonHandler() {
	
}

function touchMoveHandler(e) {
	if (gameState == inGame) {
		gameTouchMoveHandler(e);
	}
}

function touchHandler(e) {
	if (gameState == inMenu) {
		menuTouchHandler(e);
	}
	if (gameState == inGame) {
		gameTouchHandler(e);
	}
}

function touchEndHandler(e) {
	if (gameState == inGame) {
		gameTouchEndHandler(e);
	}
}

function bigDraw() {
	if (gameState == inSplash) {
		drawSplash();
	}
	if (gameState == inMenu) {
		drawMenu();
	}
	if (gameState == inGame) {
		drawGame();
	}
}

var interval = setInterval(bigDraw, 1);
