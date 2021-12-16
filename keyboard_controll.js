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
          arm.arrayClassArm[s].pusk(true)
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
    }
  })
}

function switchScene(){
  loadMenu.addEventListener('click',function(e){
      if(e.target.classList == 'playgame'){
        sceneMenu = !sceneMenu;
        sceneGame = !sceneGame;
        menu()
        music.pause()
      }
  })
  gameInterface.addEventListener('click',function(e){
    if(e.target.classList == 'pauseGame'){
      sceneMenu = !sceneMenu;
      sceneGame = !sceneGame;
      menu()
      music.duration = 0
      music.play()
    }
  })
}

/*Эта функция вешает один обработчик на div .special_container_arm(выбор орудия), при клике
на конкретное орудие обработчик обнуляет длину массива класса Arm, затем задаёт нужное количество зарядов свойству
arm.numberProjectile,задаёт переменной soundOfArm соответствующий звук орудия, затем
через цикл пушатся в массивы new Arm и new Image, затем снова через цикл каждому снаряду задаётся
соответственная картинка, ширина,высота и скорость(и всё это делается с каждым кликом по иконке орудия)*/
function switchArm(){
  specialContainer.addEventListener('click',function(e){
  // ///////////////////////////////  // 
    if(e.target.className === 'block_arm lazer'){
      arm.arrayClassArm.length = 0 // Обнуление массива
      arm.numberProjectile = 5 // Количество зарядов в обойме(длина массива arm.arrayClassArm)
      soundOfArm = lazerSound // Переменной присваивается ссылка на соответствующую функцию
      for (let i = 0; i < arm.numberProjectile; i++) { // Цикл пушит в два массива новый класс и новые избражения
        arm.arrayClassArm.push(new Arm())
        arm.clipForArm.push(new Image)
      }
      for (let l in arm.clipForArm) {
        arm.clipForArm[l].src = arm.arrayClassArm[l].lazerSrc // Цикл обрабатывает те два массива и задаёт нужные значения
        arm.arrayClassArm[l].armWidth = 10;
        arm.arrayClassArm[l].armHeight = 100;
        arm.arrayClassArm[l].speedArm = 35
      }
    }
  // //////////////////////////////  
    if(e.target.className === 'block_arm rocket'){
      arm.arrayClassArm.length = 0
      arm.numberProjectile = 3
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
      arm.numberProjectile = 30
      arm.accelerationArm = 0
      soundOfArm = mineSound
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
  })
}
