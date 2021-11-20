let soundSrc = 'sound/laserexp_loud.mp3'
// let musicSrc = 'sound/SpaceRiddle.mp3'

function rocketSound(){	
	let soundForRocket = new Audio(soundSrc);
	soundForRocket.volume = 0.1
	soundForRocket.play()	
}
function musicGame(){	
		let music = new Audio()
		music.src = 'sound/SpaceRiddle.mp3'
		music.volume = 0.3
		music.loop = true
		music.autoplay = true
	  music.play()
}

