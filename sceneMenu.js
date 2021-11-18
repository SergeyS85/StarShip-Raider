let bgMenu = new Image();
let bgMenuShiftX = 0;
let bgMenuShiftY = 0;
let tickBgMenuX = 0;
let tickBgMenuY = 0;

function bgImage(){			
	ctx.drawImage(bgMenu,bgMenuShiftX,bgMenuShiftY,2880,1620,0,0,w,h)
	
	if(tickBgMenuX >= 20){
		bgMenuShiftX = (bgMenuShiftX >= (8640 - 2880)) ? 0 : bgMenuShiftX += 2880;		
		tickBgMenuX = 0
	}
	if(tickBgMenuY >= 60){
		bgMenuShiftY = (bgMenuShiftY >= (6480 - 1620)) ? 0 : bgMenuShiftY += 1620;
		tickBgMenuY = 0
	}
	// if(bgMenuShiftY >= 6480 - 1620 ){
	// 	bgMenuShiftY = 0 
	// }		
	tickBgMenuX++
	tickBgMenuY++
}


function gameMenu(){
	ctx.clearRect(0, 0, w, h);

	bgImage()
	requestAnimationFrame(gameMenu)
}
bgMenu.src = 'img/sprite_menu/index2.png'
// gameMenu()
// bgImage()
