
//get the canvas, canvas context, and dpi
let canvas = document.getElementById('GWar'),
    ctx = canvas.getContext('2d'),
    dpi = window.devicePixelRatio;
function fix_dpi() {
//create a style object that returns width and height
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
    }
  }
//set the correct attributes for a crystal clear image!
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}

const
	playerColor = "tomato"
	playerOutlineColor = "red"
	enemyColor = "lightgreen"
	enemyOutlineColor = "green"
	bulletColor = "blue"
	lineColor = "black"
	powerUpColor = "lightblue"
	powerUpOutlineColor = "blue"
	bgColor = "white"
	miniMapColor = "blue"
	gridColor = "lightgray"

	screenWidth = 600
	screenHeight = 600

	pauseWidth = 40
	pauseX = canvas.width / 2
	pauseY = canvas.height - pauseWidth

	superWidth = 40
	superX = canvas.width / 2 - superWidth
	superY = canvas.height - superWidth

	dPadRadius = 75
	dPadX = dPadRadius + 30
	dPadY = canvas.height - dPadRadius - 30

	dPad2Radius = 75
	dPad2X = canvas.width - (dPad2Radius + 30)
	dPad2Y = canvas.height - dPad2Radius - 30

	playerRadius = 10
	playerStartX = screenWidth / 2
	playerStartY = screenHeight / 2
	playerAccel = 0.07
	playerSlowRate = 1.04
	playerHitBoxRadius = playerRadius

	bulletRadius = 10
	bulletSpeed = 5
	gapBetweenSuperBullets = 30

	enemyRadius = 10
	enemySpeed = 0.5
	enemyHitBoxRadius = enemyRadius * 1.5
	enemySpawnConstant = 300
	enemyPtValue = 100
	enemyWaitLimit = 80

	kToPowerUp = 40
	powerUpSize = 20
	
var
	mouseX = canvas.width / 2
	mouseY = canvas.height / 2
	mouseUIX = 0
	mouseUIY = 0
	upPressed = false
	downPressed = false
	leftPressed = false
	rightPressed = false
	dTouchX = dPadX
	dTouchY = dPadY

ctx.translate((canvas.width - screenWidth) / 2, (canvas.height - screenHeight) / 2);

	player = {
		x : playerStartX,
		y : playerStartY,
		xVel : 0,
		yVel : 0,
	}
	powerUp = {
		x : [0],
		y : [0],
		alive : [false],
		numSpawned : 0,
		wait : 0,
	}

	superBulletSpeed = 20
	
	bulletX = [0]
	bulletY = [0]
	bulletDX = [0]
	bulletDY = [0]
	bulletTimer = [0]
	bulletsLoaded = 0
	bulletAlive = [false]
	bulletSuper = [false]
	superTimer = -1
	
	enemyX = [5]
	enemyY = [5]
	enemysLoaded = 1
	enemysKilled = 1
	enemyAlive = [false]
	enemySpawnRate = 0
	enemyWait = 500
	
	isPaused = false
	playerLives = 3
	powerUpsLeft = 3
	playerPoints = 0		

	inGame = true
	inMenu = false