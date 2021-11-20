function tick() {
	ctx.clearRect(0, 0, w, h);
	// ////////////////////
  requestId = undefined
  starShip.move();  // Вызов метода для передвижения корабля с клавиатуры
	starShip.limitXY(); // Ограничение передвижения корабля по экрану
	background(); // Задний фон космос
	randStars() // Рандомная отрисовка звёзд
	drawNewArm() // Отрисовка и анимация снаряда
	createShip(); // Создание корабля 
  detectRocketXY() // Коллизия ракеты с монстром(столкновение)
  redrawMonster() // Отрисовка монстра
	// ///////////////////
	start() // Старт и пауза игры с появлением меню

}

function init() {
	createTheNewArm() // Создание выбранного орудия
	moveShip() // Функция по контролю движения корабля с клавиатуры true/false  
	redrawStars() // Создание объектов изображения звёзд
	armFire() // keyboard стрельба из орудия
	createArrayMonster() // Создание массива объектов монстра(new Image)
	loadImage() // Подгрузка изображений
	pauseStart() // Пауза игры нажатием клавиши 'P' или 'З'
	
	tick() // Главная анимация кадры/секунды
	
}
// menu()
// bgImage()
// init() 
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
gameMenu()
// musicGame()
window.addEventListener('load',function(){
	setTimeout(function(){
	musicGame()
	console.log('dsafsdf')
},4000)
})

