
function tick() {
	ctx.clearRect(0, 0, w, h);  
	// ////////////////////
  requestId = undefined // Переменная для остановки requestAnimationFrame
  starShip.move();  // Вызов метода для передвижения корабля с клавиатуры
	starShip.limitXY(); // Ограничение передвижения корабля по экрану
	background(); // Задний фон космос
	randStars() // Рандомная отрисовка звёзд
	drawNewArm() // Отрисовка и анимация снаряда
	createShip(); // Создание корабля 
  detectRocketXY() // Коллизия ракеты с монстром(столкновение)
  redrawMonster() // Отрисовка монстра(методы монстра) 
  if(lifeCount.looselife == 0) return
	// ///////////////////
	start() // Старт и пауза игры с появлением меню 
}

function initGame() {

	moveShip() // Функция по контролю движения корабля с клавиатуры true/false 
	
	createTheNewArm() // Создание выбранного орудия 
	switchArm() // Переключение типа орудий в панели орудий с права в низу
	redrawStars() // Создание объектов изображения звёзд
	armFire() // keyboard стрельба из орудия	
	createArrayMonster() // Создание массива объектов монстра(new Image)
	loadImage() // Подгрузка изображений
	pauseStart() // Пауза игры нажатием клавиши 'P' или 'З'
	// ////////////////
	tick() // Главная анимация кадры/секунды
	
}
// menu()
// bgImage()
// initGame() 
// let onOfGame = false 
// if(onOfGame == false) gameMenu()
// window.addEventListener('keypress',function(e){
// 	if(e.key == 'z'){
// 		onOfGame = !onOfGame
// 		// if(onOfGame) init()
//     if(onOfGame == false){
    	
//     	gameMenu()
//     	musicGame()
//     } 
// 	}
// })
// gameMenu()
// musicGame()
// startBackgroundMusic()

// switchScene() // Переключение сцены клавишей 'z'
// console.log(typeArm.dataset.lazer)
for (let j of stars.arrStars) {
		console.log(j)
	}
// console.log(stars.arrStars)
