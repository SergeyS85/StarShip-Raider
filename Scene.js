let loadMenu = document.querySelector('.load_menu')
let gameInterface = document.querySelector('.game_interface')
let sceneMenu = false;
let sceneGame = false;
function menu(){
	if(pause == false){
		initGame()
	}
	if(pause){
		gameMenu()
	} 
}

switchScene()
