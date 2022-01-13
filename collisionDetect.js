let topBodyRocket = arm.posLy
let scoreCount = 0
let numberScore = document.querySelector('.number_score')
function detectRocketXY(){
	for (let i = 0; i < arm.arrayClassArm.length; i++) {
		for(let j = 0;j < monster.arrayClassMonster.length;j++){


			if(arm.arrayClassArm[i].posLy < monster.arrayClassMonster[j].posMy + 85 && arm.arrayClassArm[i].posLy + arm.arrayClassArm[i].armHeight > monster.arrayClassMonster[j].posMy  && arm.arrayClassArm[i].posLx  < monster.arrayClassMonster[j].posMx + 77 && arm.arrayClassArm[i].posLx + arm.arrayClassArm[i].armWidth > monster.arrayClassMonster[j].posMx+20){
				  // ////////////////////// 

		    if(monster.arrayClassMonster[j].headShotMonster){
		      monster.arrayClassMonster[j].blow = true
		      if(mine){
            
		      	arm.arrayClassArm[i].shut = true
		      	arm.arrayClassArm[i].blowMine = true
		      }
		      if(!mine){
		      	arm.arrayClassArm[i].posLy = starShip.posY
		        arm.arrayClassArm[i].shut = false
		      }
		      
		    	explosionSound()
		    	dethMonsterSound() 
		      countScore()
		      
		    }
		  }
		  if(mine){
				// arm.arrayClassArm[i].detectRedLine(monster.arrayClassMonster[j].posMx,monster. arrayClassMonster[j].posMy)
				arm.arrayClassArm[i].detectAttractionMine(monster.arrayClassMonster[j].posMx,monster. arrayClassMonster[j].posMy)
			}
		}   
	} 
}

function countScore(){
	scoreCount++
	numberScore.innerHTML = scoreCount;
}



