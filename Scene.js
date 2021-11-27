let loadMenu = document.querySelector('.load_menu')
let gameInterface = document.querySelector('.game_interface')
let sceneMenu = true;
let sceneGame = false;
function menu(){
	if(sceneGame){
		initGame()
		loadMenu.classList.remove('off')
		gameInterface.classList.add('on')
		pause = false
	}
	if(sceneMenu){
		gameMenu()
		loadMenu.classList.add('on')
		gameInterface.classList.remove('off')
		pause = true
	}

}
function switchSceneInterface(){
		loadMenu.classList.add('on')
		gameInterface.classList.add('off')
		// gameMenu()	
}

switchScene()
// requestAnimationFrame(menu)
// switchSceneInterface()


