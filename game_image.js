let ship = new Image(); 
let bg = new Image();
// let monst = new Image() 
let shiftX = 0;
// let typeArmSrc = arm.rocketSrc
let shiftMonsterExplosionX = 0;
let tickCount = 0;

// Загрузка изображений
function loadImage() {
	ship.src = 'img/sprites_ship.png'
	bg.src = 'img/cosmos.png'
	for (let j in stars.arrStars) {
		stars.arrStars[j].src = 'img/moveCosmos/star' + Math.ceil(Math.random() * 10) + '.png'
	}
	for (let l in arm.clipForArm) { 
		  arm.clipForArm[l].src = arm.typeArmSrc
	}
	for(let j in monster.arrayImageMonster){
		monster.arrayImageMonster[j].src = 'img/the_new_sprite_monster/all_sprite_monster.png'
	}
}
// Создание массива звёзд и их координат
function redrawStars() {
	for (let i = 0; i < stars.starCount; i++) {
		stars.arrStars.push(new Image)
		stars.arrX.push(Math.random() * w)
		stars.arrY.push(Math.random() * h)
		stars.arrSpeed.push(Math.random() * stars.speedStar)
	}
}


// Отрисовка звёзд на canvas
function randStars() {
	for (let i = 0; i < stars.arrStars.length; i++) {
		let nitro = stars.arrSpeed[i]
		up ? nitro *= 4 : stars.speedStar[i]
		ctx.drawImage(stars.arrStars[i], stars.arrX[i], stars.arrY[i] += nitro, 5, 5)
		if (stars.arrY[i] >= h) stars.arrY[i] = 0
	}
}


// Отрисовка background	
function background() {
	if (bgStars.bgY_1 >= h) bgStars.bgY_1 = (-h * 2) + 2
	if (bgStars.bgY_2 >= h) bgStars.bgY_2 = (-h * 2) + 2
	ctx.drawImage(bg, 0, bgStars.bgY_1 += bgStars.bgSpeed, w, h * 2)
	ctx.drawImage(bg, 0, bgStars.bgY_2 += bgStars.bgSpeed, w, h * 2)
}


// Создание и отрисовка корабля
function createShip() {
	ctx.drawImage(ship, shiftX, 0, 214, 244, starShip.posX, starShip.posY, 160, 180)
	if (tickCount > 7) {
		shiftX = (shiftX >= (1075 - 215)) ? 0 : shiftX += 215
		tickCount = 0
	}
	tickCount++
}

// Создание выбранного орудия
function createTheNewArm() {
	for (let i = 0; i < arm.numberProjectile; i++) {
		arm.arrayClassArm.push(new Arm())
		arm.clipForArm.push(new Image)
	}
}

// Отрисовка орудия
function drawNewArm() { 
	for (let i = 0; i < arm.arrayClassArm.length; i++) {
		arm.arrayClassArm[i].createArm()
		arm.arrayClassArm[i].drawArm()
		arm.arrayClassArm[i].animationMine()
		arm.arrayClassArm[i].explosionMine()
	}
}

// Создание массива монстров
function createArrayMonster(){
   for(let i = 0;i < monster.countMonster;i++){  	
   	monster.arrayClassMonster.push(new Monster())
   	monster.arrayImageMonster.push(new Image)
   	monster.posMx.push(Math.random() * w)
   	monster.posMy.push(Math.random() * -600)
   }
}

// Отрисовка монстра
function redrawMonster(){
	for(let i = 0;i < monster.arrayClassMonster.length;i++){
		monster.arrayClassMonster[i].drawMonst()
		monster.arrayClassMonster[i].flyingAnimMonst()									
		monster.arrayClassMonster[i].explosionMonst()			
		monster.arrayClassMonster[i].AIMonster()					
	}
}
