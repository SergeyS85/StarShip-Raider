var canvas     = document.getElementById("canvas");
var ctx        = canvas.getContext('2d');
var w          = canvas.width  = innerWidth;
var h          = canvas.height = innerHeight;

// Событие отзывчивый экран, сробатываемый при изменении размера экрана. 
window.addEventListener('resize',function() {
	 w           = canvas.width  = innerWidth;
   h           = canvas.height = innerHeight;
})
