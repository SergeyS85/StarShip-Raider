// Background animate

var bgStars = {
	bgY_1: 0,
	bgY_2: (-h * 2) + 5,
	bgSpeed: 0.8,
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
			if (up){
				this.posY -= this.speedShip + 7;
				monster.speedMonster = 0.4
			}
			if(!up) monster.speedMonster = 0.1
			if (down) this.posY += this.speedShip;
		},
	}
	// Arm ////////////////////////////// 

var arm = {
	speedArm: 0, 
	numberProjectile: 3,
	clipForArm: [],
	arrayClassArm: [],
}
class Arm {
	constructor() {
		this.shut = false
		this.posLy = starShip.posY
		this.posLx = starShip.posX + 70.5
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
			// arm.speedArm = 0
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
// let armas = new Arm();
// Stars //////////////////

var stars = {
		starCount: 220,
		speedStar: 1.7,
		arrStars: [],
		arrSpeed: [],
		arrX: [],
		arrY: [],

	} 
	// Monster ///////////////

var monster = {
	countMonster : 5,
	speedMonster: 0.1,
	shiftFrameX: 0,
  shiftFrameY: 0,
  tickMonstCount: 0,
	arrayImageMonster: [],
	arrayClassMonster: [],
	posMx: [], 
	posMy: [],
}

class Monster {
	constructor() {
		this.shiftFrameX = monster.shiftFrameX;
		this.shiftFrameY = monster.shiftFrameY;
		this.frameRateLength = 192
		this.posMx = Math.random() * w;
		this.posMy = Math.random() * -600;
		this.headShotMonster = false
	}
	drawMonst() {
		for(let m = 0;m < monster.arrayImageMonster.length;m++){
			ctx.drawImage(monster.arrayImageMonster[m],this.shiftFrameX,this.shiftFrameY , 64,64,this.posMx, this.posMy+= monster.speedMonster, 100, 100);			
		}
	}
	flyingAnimMonst(){
		if (monster.tickMonstCount > 5) {
		    this.shiftFrameX = (this.shiftFrameX >= this.frameRateLength) ? 0 : this.shiftFrameX += 64;
		    monster.tickMonstCount = 0
      }
		
		  monster.tickMonstCount++ 
			if(this.posMy > h){
				this.posMy = -100
				this.posMx = Math.random() * w-100
			}
	}
	explosionMonst(){
		if(this.headShotMonster){
			this.frameRateLength = 768
			this.shiftFrameY = 128
			
		}
		if(this.headShotMonster && this.shiftFrameX >= this.frameRateLength){
			this.headShotMonster = false
			this.shiftFrameY = 0
			this.frameRateLength = 192
			this.posMx = Math.random() * w;
			this.posMy = Math.random() * -600;
		}
	}
	rotateMonsterCoordinateXwithiStarShip(){
		if(this.headShotMonster == false){
			if(starShip.posX < this.posMx){
				this.shiftFrameY = 0
			}
			if(starShip.posX > this.posMx){
				this.shiftFrameY = 64
			}
		}
  }
}
// console.dir(monster.posMx,monster.posMy)
