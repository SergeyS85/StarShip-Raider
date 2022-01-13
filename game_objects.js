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
	typeArmSrc: './img/rocket.png',
	lazerSrc :  './img/lazer.png',
	rocketSrc : './img/rocket.png', 
	mineSrc : './img/images/all_sprite_mine.png',
	tickMineCount : 0,
	
}
let mouse;
mouse = {x: w / 2, y: h / 2}
class Arm {
	constructor() {
    this.tickMineCountStep = 30
		this.shiftFrameXArm = 0
		this.shiftFrameYArm = 0
	  this.frameStep = 131
		this.imageWidth  = 47
		this.imageHeight = 117
		this.frameRateLengthArm = 393				
		this.speedArm = 10
		this.armWidth = 20
	  this.armHeight = 90
	  this.blowMine = false
		this.shut = false
		this.radius = 200
		this.colorArc = 'green'
		this.detectMonst = false;
		this.posLy = starShip.posY
		this.posLx = starShip.posX + (starShip.wShip/2) - (this.armWidth / 2)+5
		////// переменные для Притяжение мины /////
    this.vel   = {x: 0, y: 0}
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
	
		ctx.drawImage(arm.clipForArm[s],this.shiftFrameXArm,this.shiftFrameYArm,this.imageWidth,this.imageHeight, this.posLx, this.posLy, this.armWidth , this.armHeight);
	}
	detectRedLine(monstX,monstY){
		let dx = monstX - this.posLx
		let dy = monstY - this.posLy
		let distance = Math.sqrt(dx*dx + dy*dy)
		if(distance < this.radius) this.detectMonst = true
  }
	animationMine(){
		if(mine){
			if(arm.tickMineCount > this.tickMineCountStep){
				this.shiftFrameXArm = (this.shiftFrameXArm >= this.frameRateLengthArm) ? 0 : this.shiftFrameXArm += this.frameStep
				arm.tickMineCount = 0
			}
			if(this.shut){
				ctx.beginPath();
				ctx.strokeStyle = this.colorArc;
        ctx.arc(this.posLx + this.armWidth/2, this.posLy + this.armHeight/2, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
			}
			arm.tickMineCount++
		}
	} 
	explosionMine(){
		if(this.blowMine){
			this.tickMineCountStep = 5
			this.frameRateLengthArm = 2304
			this.frameStep = 128
			this.shiftFrameYArm = 262
			this.imageWidth = 128
			this.imageHeight = 128
			
		}
		if(this.blowMine && this.shiftFrameXArm >= this.frameRateLengthArm){
			this.tickMineCountStep = 30
			this.blowMine = false
			this.shut = false
			this.imageWidth = 131
			this.imageHeight = 131
			this.shiftFrameYArm = 0
			this.frameRateLengthArm = 393
			this.frameStep = 131
		}
	}
	detectAttractionMine(monsterX,monsterY){
			let acc = {x: 0, y: 0}
		let dx = monsterX - this.posLx
		let dy = monsterY - this.posLy
		let distance = Math.sqrt(dx*dx + dy*dy)
		acc.x     += dx 
    acc.y     += dy
    if(distance < this.radius){

    	this.colorArc = 'red'
    	// ctx.strokeStyle = 'red'
  	  this.shiftFrameYArm = 131
  	   this.vel.x = this.vel.x * 0.01 + acc.x * 0.005
  	   this.vel.y = this.vel.y * 0.01 + acc.y * 0.01
       this.posLx = this.posLx + this.vel.x 
       this.posLy = this.posLy + this.vel.y
    }
    // if(distance > this.radius){
    // 	this.colorArc = 'green'
  	  else{
  	  	this.colorArc = 'green'
  	  	// ctx.strokeStyle = 'green'
  	  	this.shiftFrameYArm = 0
  	  }
    // }
    // console.log(distance)
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
		for(let m = 0;m < monster.arrayImageMonster.length;++m){
			ctx.drawImage(monster.arrayImageMonster[m],this.shiftFrameX,this.shiftFrameY , 64,64,this.posMx, this.posMy+= monster.speedMonster, 100, 100);
						
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
				this.pauseMenuClass.style.display = 'block'
				this.pauseMenuClass.innerHTML = `<h1>Game Over</h1>`
			}		
	},
	loosingOneLife: function(){
		this.numberLife.innerHTML = --this.looselife
	}, 
}
