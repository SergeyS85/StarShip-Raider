function tick() {
	ctx.clearRect(0, 0, w, h);
	// ////////////////////

	starShip.limitXY(); // Ограничение передвижения корабля по экрану
	background(); // Задний фон космос
	randStars() // Рандомная отрисовка звёзд
	starShip.move(); // Вызов метода для передвижения корабля с клавиатуры

	// movementMonster()
	theMonster.moveMonster()
	theMonster.drawMonst()
	drawNewArm() // Отрисовка и анимация снаряда
	createShip(); // Создание корабля 
	// theMonster.ddd()


	// ///////////////////
	requestAnimationFrame(tick);
}

function init() {
	createTheNewArm()
	moveShip() // Функция по контролю движения корабля с клавиатуры true/false  
	redrawStars() // Создание объектов изображения звёзд
	armFire() // keyboard стрельба из орудия
	loadImage() // Подгрузка изображений
	tick() // Главная анимация кадры/секунды
}
init() 