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
/*Exercise 1: ask the user to enter a number and show if it is greater than 5
let userNumber= parseInt(prompt("please insert a number"));
(userNumber> 5) ? console.log(userNumber + " is greater than 5"): console.log("not higher than 5");
*/
/*Exercise 2: ask the user to enter a number and show if it is greater or less than 5

let userNumber2= parseInt(prompt("CHECK IF NUMBER IS greater or equal"));
(userNumber2>=5) ? console.log(userNumber2 + " is equal or greatern than 5"): console.log(userNumber2 + " is  NOT equal or greatern than 5");
*/
/*Exercise 3: ask the user to enter a number and show if it is greater than, less than or equal to 5
let numberInput= parseInt(prompt("insert a number"));
(numberInput>5) ? console.log(numberInput + " is greater than 5"): (numberInput<5) ? console.log(numberInput + " is NOT greater than 5"): console.log(numberInput + " is EQUAL to 5");

*//*
Exercise 4: JS oddity: ask the user to enter a number and show 10 times that number</p>
    <p>Do it again, but also show the datatype of the user's input. Do this without parsing the input, then again with parsing.</p>

let userInput= prompt("put a number");
console.log(typeof userInput)
console.log(userInput*10);

let userParse= parseInt(prompt("Parsew here anumber"));
console.log(typeof userParse)
console.log(userParse*10);
*/
/*Exercise 5: ask the user to enter a number and show if it is between 5 and 10, inclusive
let userInput= parseInt(prompt("insert a number between 5 and 10 inclusive"));
(userInput >=5 && userInput<=10) ? console.log(userInput + " is between 5 and 10 inclusive"): console.log(false);
*/
/*Exercise 6: ask the user to enter a number and show if it is less than 5 or greater than 10 - just a yes or no answer is required
let userInput=parseInt(prompt("insert a number-show if it is less than 5 or greater than 10 "));
(userInput=5 || userInput>10) ? console.log("yes"): console.log("No");
*/
/*Exercise 7: ask the user to enter a number and show if it is less than 5 or greater than 10 or neither - show which one it is
let userNumber= parseInt(prompt("insert a number - show if it is less than 5 or greater than 10 or neither"));
(userNumber<5) ? console.log(userNumber + " is less than 5"): (userNumber>10) ? console.log(userNumber +" is more than 10"): console.log("Neither");
*/
//Exercise 8: ask the user to enter two numbers and show which is larger
let userNumber1= parseInt(prompt("number 1"));
let userNumber2= parseInt(prompt("number 2"));
( userNumber1>userNumber2) ? console.log( userNumber1 + " is greater " + userNumber2): console.log(userNumber2 + " is greater " + userNumber1 );