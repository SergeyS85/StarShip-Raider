let topBodyRocket = arm.posLy
let headShotMonster = false;
let scoreCount = 0
let numberScore = document.querySelector('.number_score')
function detectRocketXY(){
	for (var i = 0; i < arm.arrayClassArm.length; i++) {
		for(let j = 0;j < monster.arrayMonster.length;j++){
			if(arm.arrayClassArm[i].posLy <= monster.coordinateMy[j] + 100 && arm.arrayClassArm[i].posLy + 90 > monster.coordinateMy[j] + 100 && arm.arrayClassArm[i].posLx + 10 > monster.coordinateMx[j] && arm.arrayClassArm[i].posLx + 20 < monster.coordinateMx[j]+100){
			    monster.coordinateMy[j] = -100
			    monster.coordinateMx[j] = Math.random() * (w - 100)
			    countScore()
			    // arm.arrayClassArm[s].pusk(false)
			    // arm.speedArm = 0
			    // arm.arrayClassArm[i].posLy = starShip.posY

			    
		  }
		}   
	}
}

function countScore(){
	scoreCount++
	numberScore.innerHTML = scoreCount;
}
