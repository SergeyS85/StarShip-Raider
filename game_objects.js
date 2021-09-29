// Background animate

var bgStars = {
	bgY_1: 0,
	bgY_2: (-h * 2) + 5,
	bgSpeed: 0.1,
}

// Star Ship /////////////////////////

var starShip = {
		wShip: 150,
		hShip: 100,
		posX: w / 2,
		posY: h - 180,
		speedShip: 10,
		limitXY: function() {
			if (this.posX < 0) this.posX = 0;
			if (this.posX >= w - this.wShip) this.posX = w - this.wShip;
			if (this.posY < 0) this.posY = 0;
			if (this.posY >= h - this.hShip) this.posY = h - this.hShip;
		},
		move: function() {
			if (right) this.posX += this.speedShip;
			if (left) this.posX -= this.speedShip;
			if (up) this.posY -= this.speedShip + 7;
			if (down) this.posY += this.speedShip;
		},
	}
	// Arm ////////////////////////////// 

var arm = {
	speedArm: 10,
	numberProjectile: 8,
	clipForArm: [],
	arrayClassArm: [],
}

class Arm {
	constructor() {
		this.shut = false
		this.posLy = starShip.posY
		this.posLx = starShip.posX + 70.5
		this.collision = theMonster.posMy
	}
	pusk(bool) {
		this.shut = bool
	}
	createArm() {
		if (this.posLy <= -80) {
			this.shut = false
			this.posLy = starShip.posY
		}
		if (this.shut == false) {
			this.posLy = starShip.posY
			this.posLx = starShip.posX + 70.5
		}
		if (this.posLy == this.collision) this.posLy = this.collision
		if (this.shut) this.posLy -= arm.speedArm
		else {
			this.posLy = starShip.posY
		}

	}
	drawArm() {
		ctx.drawImage(arm.clipForArm[s], this.posLx, this.posLy, 20, 90);
	}

}

// Stars //////////////////

var stars = {
		starCount: 220,
		speedStar: 1.5,
		arrStars: [],
		arrSpeed: [],
		arrX: [],
		arrY: [],

	} 
	// Monster ///////////////

var monster = {
	speedMonster: 2,
	arryaMonster: []
}

class Monster {
	constructor() {
		this.posMx = w / 2
		this.posMy = 0
	}
	moveMonster() {
		this.posMy += monster.speedMonster
		if (this.posMy >= h) this.posMy = 0
	}
	drawMonst() {
		ctx.drawImage(monst, this.posMx, this.posMy, 60, 60);
	}
	ddd() {
		console.log(this.posMy)
	}
}