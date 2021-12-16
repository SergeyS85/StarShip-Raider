let topBodyRocket = arm.posLy
let scoreCount = 0
let numberScore = document.querySelector('.number_score')
function detectRocketXY(){
	for (let i = 0; i < arm.arrayClassArm.length; i++) {
		for(let j = 0;j < monster.arrayClassMonster.length;j++){
			if(arm.arrayClassArm[i].posLy < monster.arrayClassMonster[j].posMy + 100 && arm.arrayClassArm[i].posLy + arm.arrayClassArm[i].armHeight > monster.arrayClassMonster[j].posMy  && arm.arrayClassArm[i].posLx  < monster.arrayClassMonster[j].posMx + 100 && arm.arrayClassArm[i].posLx + arm.arrayClassArm[i].armWidth > monster.arrayClassMonster[j].posMx){
				  // //////////////////////          
			    if(monster.arrayClassMonster[j].headShotMonster){
			      monster.arrayClassMonster[j].blow = true
			    	explosionSound()
			    	dethMonsterSound()
			      countScore()
			      arm.arrayClassArm[i].posLy = starShip.posY
			      arm.arrayClassArm[i].shut = false
			    }
		  }
		}   
	} 
}

function countScore(){
	scoreCount++
	numberScore.innerHTML = scoreCount;
}



