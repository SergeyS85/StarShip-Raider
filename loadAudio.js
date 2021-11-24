function rocketSound(){	
	let soundForRocket = new Audio();
	soundForRocket.src = 'sound/laserexp_loud.mp3'
	soundForRocket.volume = 0.06
	soundForRocket.play()	
}
function musicGame(){	
	let music = new Audio()
	music.src = 'sound/SpaceRiddle.mp3'
	music.volume = 0.1
	music.loop = true
	music.autoplay = true
  music.play()
}
function explosionSound(){
	let explosionMonster = new Audio()
	explosionMonster.src = 'sound/explosion.mp3'
	explosionMonster.volume = 0.5
	explosionMonster.play()
}
function pauseSound(){
	let pauseMenuSound = new Audio()
	pauseMenuSound.src = 'sound/soundPause.wav'
	pauseMenuSound.volume = 0.3
	pauseMenuSound.play()
}
