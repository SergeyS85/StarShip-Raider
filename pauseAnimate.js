let requestId
let pauseMenu = document.querySelector('.pause_menu')

function start() {
    if (!requestId) {
       requestId = window.requestAnimationFrame(tick);
    }
}
function stop() {
    if (requestId) {
       window.cancelAnimationFrame(requestId);
       requestId = undefined;
    }
}
// /////////////////
function pauseAnimation(){
	if(!pause){
		start()
    pauseMenu.style.display = 'none'

	}
	if(pause){
		stop()
    pauseMenu.style.display = 'block'
	}
}

