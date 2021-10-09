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
    window.alert("Welcome to Robot Gladiators!");

    //prompt user to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    
    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that value to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        //log a message to the console with the result to show it working
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that resulkt to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        //log a resulting message to the console to know it works
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
                window.alert(enemyName + " still has " + enemyHealth + " health left!");
        }
        //check player health
        if (playerHealth <= 0) {
            window.alert(playerName + "has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left!");
        }
        //if player chooses to skip fight
    } else if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip" ) {
        //confirm if user wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit? Enter YES or NO to continue.");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        } 
        //if no (false) ask question again by running fight() again
        else {
            fight();
        }  
    } 
    //if player enters anything other than FIGHT,fight,SKIP, or skip
    else {
        window.alert("You need to choose a valid option.  Try Again!");
    }
    
};



//run fight
for (var i=0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}




