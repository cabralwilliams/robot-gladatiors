var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney= 10
// You can also log multiple values at once like this


var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var fight = function(enemyName){} //*
/*
There is an issue at line 11.  Since you have closed the curly braces right away here, your fight function is not actually doing anything.
I think that what you are likely supposed to do is move the while loop that is below this at line 20 to inside of your fight function curly braces.
Then, move everything from the if statement at line 30 -> if (promptFight === "fight" || promptFight === "FIGHT") all the way to the end of that block (line 72)
to inside of the while loop that is currently at line 20, or you can move the if clause first.  This would then have the fight function running the fight code and give
the break statement a loop to break from.  I think this might solve the issue.
*/
   // repeat and execute as long as the enemy-robot is alive
   while(enemyHealth >0) {
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'to choose");
    } 
    
  

  
 

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // if no (false), ask question again by running fight() again
  else {

  }
}


for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
  console.log(enemyNames.length [i]);
  console.log(i);
  console.log(enemyNames[i] + "is at" + i + "index");
}

