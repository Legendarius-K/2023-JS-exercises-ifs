// don't touch the window.addEventListener line, or the closing }); at the end of the file
window.addEventListener('load', function () {  

/*   
Complete each exercise, test by running if.html, then comment out the code to stop it running again when you move on to subsequent exercises. 

If you don't the prompts and alerts from previous exercises will run whenever you reload the page

Use the exercise number as the variable for the prompt.

Eg:
let exercise1 = prompt("Enter a number");
*/

});
/*EXERCISE 1
let userInput=prompt("Please guess a number, we will check if it greater than 5");
if (userInput > 5) {
    console.log(userInput + " is greater than 5");
    document.querySelector(".exercise-1").textContent = (userInput + " is greater than 5");
}
*/
/* EXERCISE 2
let userInput=prompt("Please guess a number, we will check if it greater than 5");
if (userInput > 5) {
    console.log(userInput + " is greater than 5");
    document.querySelector(".exercise-2").textContent = userInput + " is greater than 5";
} else if (userInput < 5) {
    console.log (userInput + " is lower than 5")
    document.querySelector(".exercise-2").textContent = userInput + " is lower than 5";
}
*/
/*EXERCISE 3
let userInput=prompt("Please guess a number, we will check if it greater than 5");
if (userInput > 5) {
    console.log(userInput + " is greater than 5");
    document.querySelector(".exercise-3").textContent = userInput + " is greater than 5";
} else if (userInput < 5) {
    console.log (userInput + " is lower than 5")
    document.querySelector(".exercise-3").textContent = userInput + " is lower than 5";
} else {
    console.log(userInput + " is equal 5")
    document.querySelector(".exercise-3").textContent = userInput + " is equal 5";
}
*/
/*EXERCISE 4-version 1
let userInputNoParse=prompt("insert a number you want tobe displayed 10 times","write here");
console.log(userInputNoParse.repeat(10));
console.log(typeof userInputNoParse);
document.querySelector(".exercise-4").textContent = userInputNoParse.repeat(10);

let userInputParse=prompt("PARSED number");
console.log(parseInt(userInputParse.repeat(10)));
console.log(typeof userInputParse);
document.querySelector(".exercise-4").textContent = userInputParse.repeat(10);
*/
/*EXERCISE 4-version 2 - parse in moved to prompt
let userInputNoParse=prompt("insert a number you want tobe displayed 10 times","write here");
console.log(userInputNoParse.repeat(10));
console.log(typeof userInputNoParse);
document.querySelector(".exercise-4").textContent = userInputNoParse.repeat(10);

let userInputParse=parseInt(prompt("PARSED number"));
console.log(""+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse);
console.log(typeof userInputParse);
document.querySelector(".exercise-4").textContent = ""+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse+userInputParse;
*/
/*EXERCISE 5-ask the user to enter a number and show if it is between 5 and 10, inclusive
let userGuess= parseFloat(prompt("please insert anumber? the program will check if it is between 5 and 10 inclusive"));
if (!userGuess) {
    console.log("input emty or not valid");
    document.querySelector(".exercise-5").textContent= "input emty or not valid";
} else {
    if (userGuess >= 5 && userGuess<=10) {
        console.log(userGuess + " is a number between 5 and 10- inclusive");
        document.querySelector(".exercise-5").textContent= userGuess + " is a number between 5 and 10- inclusive";
    } else {
        console.log(userGuess + " is NOT a number between 5 and 10 - inclusive");
        document.querySelector(".exercise-5").textContent= userGuess + " is NOT a number between 5 and 10- inclusive";
    }
}
*/

