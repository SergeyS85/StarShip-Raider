let requestId

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
function pauseAnimation(){
	if(!pause){
		start()
	}
	if(pause){
		stop()
	}
}

