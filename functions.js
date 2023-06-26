//create a variable to track jon's health
let jonSnowHealth = 100;

//Data-type conversion
// let jonSnowHealthString = String(jonSnowHealth)
// let jonSnowHealthString = toString(jonSnowHealth)
// let jonSnowHealthString = jonSnowHealth + ''
// let jonSnowBool = Boolean(jonSnowHealth)

//String Methods

//Lets create a string that declares a winner, and the winner should be Jamie

let theWinnerIs = "Jamie is the winner";
// console.log(theWinnerIs)

//lets replace Jamie with Jon

let newWinnerIs = theWinnerIs.replace("Jamie", "Jon");

// console.log(newWinnerIs)

//lets just confirm if our new string contains 'Jon'

if (newWinnerIs.includes("Jon")) {
  console.log("Jon replaced successfully");
}

//lets convert our string to kebab-case
let newWinnerLower = newWinnerIs.toLowerCase();
// 'jon is the winner'
let newWinnerSplit = newWinnerLower.split(" ");
// ['jon','is','the','winner']
let newWinnerKebab = newWinnerSplit.join("-");
//jon-is-the-winner
console.log(newWinnerKebab);

//Functions

//create a simple function that will check to see if Jon is alive or not

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log("jon is alive!");
  } else {
    console.log("RIP Jon Snow");
  }
}

// isJonAlive()

//create a function that can be used every time Jon is attacked

function surpriseAttack(attack) {
  jonSnowHealth -= attack;
  //a function can be called from anywhere
  console.log(`Jon has ${jonSnowHealth} remaining`);
  isJonAlive();
}

surpriseAttack(20);
surpriseAttack(25);
surpriseAttack(34);
surpriseAttack(26);

//create a function that will allow two people to greet each other
//when you create a function you add parameters/placeholders
// function greeting(person1,person2){
//     console.log(`${person1} says hello to ${person2}`)
// }

//arrow function
const greeting = (person1, person2) =>
  console.log(`${person1} says hi to ${person2}`);

//when you invoke/call a function you pass arguments/actual values
greeting("Jon Snow", "Ned Stark");

//lets create a function that represents a diceRoll and returns a value to the call location
function diceRoll() {
  //possible values in a 6 side dice
  let possibleRoles = [1, 2, 3, 4, 5, 6];
  //randomise an index so that we can send a random value from the possibleRoles
  //Math.random returns a number between 0 & .99(not including 1)
  let randomNumber = Math.floor(Math.random() * possibleRoles.length);
  return possibleRoles[randomNumber];
}

// let firstRoll = diceRoll();
// let secondRoll = diceRoll();

function diceMultiplier() {
    let firstRoll = diceRoll();
    let secondRoll = diceRoll();
    console.log(firstRoll);
    console.log(secondRoll);
    return firstRoll * secondRoll
}


let multipliedValue = diceMultiplier()
console.log(multipliedValue)

