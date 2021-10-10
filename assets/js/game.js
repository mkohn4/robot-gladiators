//declare player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



//set enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//log multiple values at once
/*console.log(playerName, playerAttack, playerHealth);
console.log(enemyNames, enemyAttack, enemyHealth);

for(var i=0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index")
}*/

//create function EXPRESSION
var fight = function(enemyName) {
    //alert players they are starting the round
    /*window.alert("Welcome to Robot Gladiators!");*/

    //repeat and execute as long as the enemy-robot and player are alive
    while(enemyHealth > 0 && playerHealth > 0) {

        //prompt user to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
        
        //if player chooses skip confirm and then stop loop
        if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip" ) {
            //confirm if user wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");
            //if yes to skip, leave fight and lose money
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } 
        }

        //if player does NOT choose skip, default to fight

            //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that value to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;
            //log a message to the console with the result to show it working
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            //check enemy's health
            if (enemyHealth <= 0) {
                //alert enemy has died
                window.alert(enemyName + " has died!");
                //award payer money for winning
                playerMoney = playerMoney + 20;

                //leave while() loop since enemy is dead
                break;
            }
            else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left!");
            }
            
            //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that resulkt to update the value in the 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;
            //log a resulting message to the console to know it works
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
            
            //check player health
            if (playerHealth <= 0) {
                //alert player has died
                window.alert(playerName + "has died!");
                //leave while loop if player is dead
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left!");
            }
        }
};



//run fight
for (var i=0; i < enemyNames.length; i++) {
    //call fight function with enemy robot
    if (playerHealth > 0) {
        //welcome player to game and 
        window.alert("Welcome to Robot Gladiators! Round " + (i+1) );
        //pick new enemy to fight
        var pickedEnemyName = enemyNames[i];
        //set new enemy health to 50
        enemyHealth=50;
        //use debugger to pause script 
        debugger;
        //pass pickedEnemyNames variable value into fight function
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}




