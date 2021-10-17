

//log multiple values at once
/*console.log(playerName, playerAttack, playerHealth);
console.log(enemyNames, enemyAttack, enemyHealth);

for(var i=0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index")
}*/

//create function EXPRESSION
var fight = function(enemy) {
    //alert players they are starting the round
    /*window.alert("Welcome to Robot Gladiators!");*/

    //repeat and execute as long as the enemy-robot and player are alive
    while(enemy.health > 0 && playerInfo.health > 0) {

        //prompt user to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
        
        //if player chooses skip confirm and then stop loop
        if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip" ) {
            //confirm if user wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");
            //if yes to skip, leave fight and lose money
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                //subtract money from playerMoney for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                break;
            } 
        }

        //if player does NOT choose skip, default to fight
        //assign random value between playerAttack value-3 and playerAttack
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);    
        //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that value to update the value in the 'enemyHealth' variable
            enemy.health = Math.max(0, enemy.health - damage);
            //log a message to the console with the result to show it working
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
            //check enemy's health
            if (enemy.health <= 0) {
                //alert enemy has died
                window.alert(enemy.name + " has died!");
                //award payer money for winning
                playerInfo.money = playerInfo.money + 20;
                //leave while() loop since enemy is dead
                break;
            }
            else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left!");
            }
            
            //calculate random number between enemyAttack-3 and enemyAttack
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable - non-negative
            playerInfo.health = Math.max(0,playerInfo.health - damage);
            //log a resulting message to the console to know it works
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    
            
            //check player health
            if (playerInfo.health <= 0) {
                //alert player has died
                window.alert(playerInfo.name + "has died!");
                //leave while loop if player is dead
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left!");
            }
        }
};


//function to start game
var startGame = function() {
    //reset player stats
    playerInfo.reset(); 
    //run fight
    for (var i=0; i < enemyInfo.length; i++) {
        //call fight function with enemy robot
        if (playerInfo.health > 0) {
            //welcome player to game and 
            window.alert("Welcome to Robot Gladiators! Round " + (i+1) );
            //pick new enemy to fight
            var pickedEnemyObj = enemyInfo[i];
            //set new enemy health to 50
            pickedEnemyObj.health= randomNumber(40,60);
                //use debugger to pause script 
                //debugger;
            //pass pickedEnemyNames variable value into fight function
            fight(pickedEnemyObj);
            //if we're not at the last enemy in the array and player is alive
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask if player wants to enter the shop
                var storeConfirm = window.confirm("The fight is over, visit the store before next round?");

                //if yes, go to store() function
                if (storeConfirm) {
                    shop();
                }
            }
        } 
        //if player is not alive, break out of the loop and let endGame Function run
        else {
            window.alert("you have lost your robot in battle.  Game Over!");
            break;
        } 
    }
    //after loop ends, player is out of health or enemies to fight, call endGame function
    endGame();
};

//function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    //if player health is greater than zero congratulat player
    if (playerInfo.health > 0) {
        //notify user of money and health of their robot
        window.alert("Great job! You survived the game.  You now have a score of " + playerInfo.money + " and a health of " + playerInfo.health + ".");
    } else {
        //notify user they've lost the game
        window.alert("You've lost your robot in battle!");
    }
    //ask player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playAgainConfirm) {
        //restart the game if confirmed
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//introduce shop function
var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: REFILL, UPGRADE, or LEAVE to choose.");

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "Refill": //new case
        case "refill": 
        //check if player can purchase health
            playerInfo.refillHealth(); 
            break;
        case "UPGRADE": //new case
        case "Upgrade": //new case
        case "upgrade":
            //check if player can purchase attack
            playerInfo.upgradeAttack();
            break;
        case "LEAVE": //new case
        case "Leave": //new case
        case "leave":
            window.alert("Leaving the Store.");
            //do nothing so function will end
            break;
        default:
            window.alert("You did not pick a valid option.  Try again.");
            //call shop function again to force player to pick a valid option
            shop();
            break;
    }
};

//function to generate a random numeric value
var randomNumber = function (min, max) {
    var value=Math.floor(Math.random() * (max-min + 1) + min);
    return value;
};

//declare player variables
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >=7) {
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
        
    },
    upgradeAttack: function() {
        if (this.money >=7) {
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money");
        }
        
    }
};
//declare enemy variables
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];


//start game on page load
startGame();


