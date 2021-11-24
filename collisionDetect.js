let topBodyRocket = arm.posLy
let scoreCount = 0
let numberScore = document.querySelector('.number_score')
function detectRocketXY(){
	for (let i = 0; i < arm.arrayClassArm.length; i++) {
		for(let j = 0;j < monster.arrayClassMonster.length;j++){
			if(arm.arrayClassArm[i].posLy <= monster.arrayClassMonster[j].posMy + 90 && arm.arrayClassArm[i].posLy + 90 > monster.arrayClassMonster[j].posMy + 90 && arm.arrayClassArm[i].posLx + 5 > monster.arrayClassMonster[j].posMx && arm.arrayClassArm[i].posLx + 25 < monster.arrayClassMonster[j].posMx+100){
				  // //////////////////////
				  monster.arrayClassMonster[j].headShotMonster = true
          explosionSound()
			    countScore()
			    if(monster.arrayClassMonster[j].headShotMonster){
			    	arm.arrayClassArm[i].posLy = starShip.posY
			      arm.arrayClassArm[i].shut = false
			    }
			    
		  }
		}   
	}
}
function detectStarShipXYforMonsters(){

}
function countScore(){
	scoreCount++
	numberScore.innerHTML = scoreCount;
}



