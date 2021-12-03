let loadMenu = document.querySelector('.load_menu')
let gameInterface = document.querySelector('.game_interface')


function menu(){
	if(sceneGame){
		initGame()
		loadMenu.classList.toggle('off',true)
		gameInterface.classList.toggle('off',false)
		pause = false
		
	}
	if(sceneMenu){
		// gameMenu()
		// startBgImage()
		// startBackgroundMusic()
		loadMenu.classList.toggle('off',false)
		gameInterface.classList.toggle('off',true)
		pause = true
	}

}
menu()
switchScene()
// requestAnimationFrame(menu)
// switchSceneInterface()


