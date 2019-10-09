if (inMenu) {
	document.removeEventListener("touchmove", touchMoveHandler, false);
	document.removeEventListener("touchstart", touchHandler, false);
	document.removeEventListener("touchend", touchEndHandler, false);
	var interval = setInterval(drawMenu, 1);
}
if (inGame) {
	document.addEventListener("touchmove", touchMoveHandler, false);
	document.addEventListener("touchstart", touchHandler, false);
	document.addEventListener("touchend", touchEndHandler, false);
	var interval = setInterval(drawGame, 1);
}