
let bgMenu = new Image();
bgMenu.src = 'img/sprite_menu/index2.png'
let bgMenuShiftX = 0;
let bgMenuShiftY = 0;
let tickBgMenuX = 0;
let tickBgMenuY = 0;
let requestId_2
let sceneMenu = true;
let sceneGame = false;
function startBackgroundMusic(){
	console.log(sceneMenu)
	
		// window.addEventListener('load',function(){
			setTimeout(function(){
				// if(sceneMenu){
			    musicGame()
			  // }  
		  },4000)
		// })
	
}

// /////////////////////////
// function stopBgImage(){
// 	if (requestId_2) {
//        window.cancelAnimationFrame(requestId_2);
//        requestId_2 = undefined;
//     }
// }
// function startBgImage(){
// 	if (!requestId_2) {
//        requestId_2 = window.requestAnimationFrame(gameMenu);
//     }
// }

// function pauseBgGameMenu(){
// 	if(!sceneMenu){
// 		startBgImage()
// 	}
// 	if(sceneMenu){
// 		stopBgImage()
// 	}
// }
// function bgImage(){			
// 	ctx.drawImage(bgMenu,bgMenuShiftX,bgMenuShiftY,2880,1620,0,0,w,h)
	
// 	if(tickBgMenuX >= 10){
// 		bgMenuShiftX = (bgMenuShiftX >= (8640 - 2880)) ? 0 : bgMenuShiftX += 2880;		
// 		tickBgMenuX = 0
// 	}
// 	if(tickBgMenuY >= 30){
// 		bgMenuShiftY = (bgMenuShiftY >= (6480 - 1620)) ? 0 : bgMenuShiftY += 1620;
// 		tickBgMenuY = 0
// 	}		
// 	tickBgMenuX++
// 	tickBgMenuY++
// }

// ////////////////////////////
// function gameMenu(){
// 	// ctx.clearRect(0, 0, w, h);
//   requestId_2 = undefined;
// 	bgImage()
// 	// requestAnimationFrame(gameMenu)
// }
// startBgImage()
startBackgroundMusic()
// musicGame()
