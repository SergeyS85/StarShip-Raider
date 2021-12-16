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
let specialContainer = document.querySelector('.special_container_arm')
var arm = {	 
	numberProjectile: 3,
	accelerationArm: 0,
	clipForArm: [],
	arrayClassArm: [],	
	typeArmSrc: './img/rocet-export.png',
	
}
class Arm {
	constructor() {
		this.lazerSrc =  './img/lazer.png'
	  this.rocketSrc = './img/rocet-export.png' 
	  this.mineSrc = './img/mine.png'
		this.speedArm = 10
		this.armWidth = 20
	  this.armHeight = 90
		this.shut = false
		this.posLy = starShip.posY
		this.posLx = starShip.posX + (starShip.wShip/2) - (this.armWidth / 2)+5
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
			this.posLx = starShip.posX + (starShip.wShip/2) - (this.armWidth / 2)+5
		}
		if (this.shut) this.posLy -= this.speedArm += arm.accelerationArm
		else {
			this.posLy = starShip.posY
		}

	}
	drawArm() {
		ctx.drawImage(arm.clipForArm[s], this.posLx, this.posLy, this.armWidth , this.armHeight);
	}
}

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
		this.posMx = Math.random() * (w-100);
		this.posMy = Math.random() * -600;
		this.headShotMonster = true
		this.blow = false
	}
	drawMonst() {
		for(let m = 0;m < monster.arrayImageMonster.length;m++){
			ctx.drawImage(monster.arrayImageMonster[m],this.shiftFrameX,this.shiftFrameY , 50,50,this.posMx, this.posMy+= monster.speedMonster, 100, 100);
						
		}
	}
	flyingAnimMonst(){
		if (monster.tickMonstCount > 5) {
		    this.shiftFrameX = (this.shiftFrameX >= this.frameRateLength) ? 0 : this.shiftFrameX += 64;
		    monster.tickMonstCount = 0
      }
			   
		if(this.posMy > h){
			looseLifeSound()
			lifeCount.loosingOneLife()
			lifeCount.gameOver()
			this.posMy = -100
			this.posMx = Math.random() * (w-100)
		}

		monster.tickMonstCount++
	}
	explosionMonst(){
		if(this.blow){
			this.headShotMonster = false
			this.frameRateLength = 768
			this.shiftFrameY = 128
			
		}
		if(this.blow && this.shiftFrameX >= this.frameRateLength){
			this.blow = false
			this.headShotMonster = true
			this.shiftFrameY = 0
			this.frameRateLength = 192
			this.posMx = Math.random() * (w-100);
			this.posMy = Math.random() * -600;
		}
	}
	AIMonster(){
		if(this.blow == false){
			if(starShip.posX < this.posMx){
				this.shiftFrameY = 0
			}
			if(starShip.posX > this.posMx){
				this.shiftFrameY = 64
			}
		}
  }
}
// LifeCount and GameOver ////////////////////

let lifeCount = {
	looselife: 20,
	pauseMenuClass: document.querySelector('.pause_menu'),
	numberLife: document.querySelector('.number_life'),
	gameOver: function(){
			if(this.looselife === 0){
				this.pauseMenuClass.innerHTML = `<h1>Game Over</h1>`
			}		
	},
	loosingOneLife: function(){
		this.numberLife.innerHTML = --this.looselife
	}, 
}

