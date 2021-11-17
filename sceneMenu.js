let bgMenu = new Image();

function bgImage(){	
	ctx.drawImage(bgMenu,0,0,w,h)	
}


function gameMenu(){
	ctx.clearRect(0, 0, w, h);

	bgImage()
	requestAnimationFrame(gameMenu)
}
bgMenu.src = 'img/preload-export1.png'
// gameMenu()
// bgImage()
