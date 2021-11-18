let soundSrc = 'sound/laserexp_loud.mp3'
let musicSrc = 'sound/SpaceRiddle.mp3'

function rocketSound(){	
	let soundForRocket = new Audio(soundSrc);
	soundForRocket.volume = 0.1
	soundForRocket.play()
	
}
function musicGame(){	
	window.addEventListener('load',function(e){
		
		let music = new Audio(musicSrc)
		music.volume = 0.3
		music.loop = true
		music.autoplay = true
	  music.play()

	  console.log('asdfasdf')
	})
}

