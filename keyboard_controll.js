let right = false; 
let left = false;
let up = false;
let down = false;
let pause = false
let s = 0; // Переменная в которой задаётся номер стреляемого снаряда
let typeArm = document.querySelectorAll('.block_arm')
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
          // arm.speedArm = arm.speedArm
          arm.arrayClassArm[s].pusk(true)
          // rocketSound()
          // laserSound()
          soundOfArm()
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
      pauseSound()
      pauseAnimation()
      // console.log(window.requestAnimationFrame(tick))
    }

  })
}

function switchScene(){
  loadMenu.addEventListener('click',function(e){
    // if(e.charCode == 122 || e.charCode == 1103){
      console.log(e.target)
      if(e.target.classList == 'playgame'){
        sceneMenu = !sceneMenu;
        sceneGame = !sceneGame;
        // pause = true
        // startBackgroundMusic()
        menu()
        // music.paused = true
        music.pause()
        
        // musicGame()
      }
      // pauseBgGameMenu()
    // }
  })
  gameInterface.addEventListener('click',function(e){
    if(e.target.classList == 'pauseGame'){
      sceneMenu = !sceneMenu;
      sceneGame = !sceneGame;
      menu()
      // music.paused = false
      // music = new Audio
      // console.log(music)
      // musicGame()
      music.duration = 0
      music.play()
    }
  })
}

function switchArm(){
  specialContainer.addEventListener('click',function(e){
  // ///////////////////////////////  // 
    if(e.target.className === 'block_arm lazer'){
      arm.arrayClassArm.length = 0
      arm.numberProjectile = 5
      console.log(arm.numberProjectile)
      soundOfArm = lazerSound
      // arm.accelerationArm = 1
      for (let i = 0; i < arm.numberProjectile; i++) {
        arm.arrayClassArm.push(new Arm())
        arm.clipForArm.push(new Image)
      }
      for (let l in arm.clipForArm) {
        arm.clipForArm[l].src = arm.arrayClassArm[l].lazerSrc
        arm.arrayClassArm[l].armWidth = 10;
        arm.arrayClassArm[l].armHeight = 100;
        arm.arrayClassArm[l].speedArm = 35
      }
    }
  // //////////////////////////////  
    if(e.target.className === 'block_arm rocket'){
      arm.arrayClassArm.length = 0
      arm.numberProjectile = 3
      console.log(arm.numberProjectile)
      arm.accelerationArm = 0
      soundOfArm = rocketSound
      for (let i = 0; i < arm.numberProjectile; i++) {
        arm.arrayClassArm.push(new Arm())
        arm.clipForArm.push(new Image)
      }
      for (let l in arm.clipForArm) {
        arm.clipForArm[l].src = arm.arrayClassArm[l].rocketSrc
        arm.arrayClassArm[l].armWidth = 20;
        arm.arrayClassArm[l].armHeight = 90;
        arm.arrayClassArm[l].speedArm = 10;
      }
    }
  // //////////////////////////////  
    if(e.target.className === 'block_arm mine'){
      arm.arrayClassArm.length = 0
      arm.numberProjectile = 3
      console.log(arm.numberProjectile)
      arm.accelerationArm = 0
      for (let i = 0; i < arm.numberProjectile; i++) {
        arm.arrayClassArm.push(new Arm())
        arm.clipForArm.push(new Image)
      }
      for (let l in arm.clipForArm) {
        arm.clipForArm[l].src = arm.arrayClassArm[l].mineSrc
        arm.arrayClassArm[l].armWidth = 100;
        arm.arrayClassArm[l].armHeight = 100;
        arm.arrayClassArm[l].speedArm = 0.2
      }
    } 
    // arm.arrayClassArm.length = 0
    console.log(arm.arrayClassArm)     
  })
}
