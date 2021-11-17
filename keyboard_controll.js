let right = false; 
let left = false;
let up = false;
let down = false;
let pause = false
let s = 0;

function moveShip() {
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 39) {
      right = true;
    }
    if (e.keyCode == 37) {
      left = true; 
    }
    if (e.keyCode == 38) {
      up = true;
    }
    if (e.keyCode == 40) {
      down = true;
    }


  })
  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 39) {
      right = false;
    }
    if (e.keyCode == 37) {
      left = false;
    }
    if (e.keyCode == 38) {
      up = false;
    }
    if (e.keyCode == 40) {
      down = false;
    }
  })
}

function armFire() {
  document.addEventListener('keypress', function(e) {

    if(pause === false){
      if (e.keyCode == 32) {
        if (s < arm.arrayClassArm.length) {
          s++
          arm.speedArm = 15
          arm.arrayClassArm[s].pusk(true)
          rocketSound()
        } 
        if(s >= arm.arrayClassArm.length-1) s = 0
      }
    }
  })
}
function pauseStart(){
  document.addEventListener('keypress',function(e){
    if(e.charCode == 112 || e.charCode == 1079){
      pause = !pause
    }
    console.log(e)
    // menu()
    pauseAnimation()
  })
}

