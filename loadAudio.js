let music = new Audio()
let soundOfArm = rocketSound

function lazerSound(){	
	let soundForRocket = new Audio();
	soundForRocket.src = 'sound/Sound_ArcaneDesintegrate.mp3'
	soundForRocket.volume = 0.6
	soundForRocket.play()	
}
function rocketSound(){	
	let soundForRocket = new Audio();
	soundForRocket.src = 'sound/rocket.mp3'
	soundForRocket.volume = 0.4
	soundForRocket.play()	
}
function musicGame(){		
	music.src = 'sound/SpaceRiddle.mp3'
	music.volume = 0.3
	music.loop = true
	music.autoplay = true	
	music.play()  
}
function explosionSound(){
	let explosionMonster = new Audio()
	explosionMonster.src = 'sound/Sound_Bomb1.mp3'
	explosionMonster.volume = 0.4
	explosionMonster.play()
}
function pauseSound(){
	let pauseMenuSound = new Audio()
	pauseMenuSound.src = 'sound/soundPause.wav'
	pauseMenuSound.volume = 0.3
	pauseMenuSound.play()
}
function dethMonsterSound(){
	let dethMonster = new Audio()
	dethMonster.src = 'sound/deth_monster.mp3'
	dethMonster.volume = 0.9
	dethMonster.play()
}
function looseLifeSound(){
	let looseLife = new Audio()
	looseLife.src = 'sound/looseLife.mp3'
	looseLife.volume = 0.8
	looseLife.play()
}
