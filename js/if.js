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
//Exercise 3: ask the user to enter a number and show if it is greater than, less than or equal to 5
let numberInput= parseInt(prompt("insert a number"));
(numberInput>5) ? console.log(numberInput + " is greater than 5"): (numberInput<5) ? console.log(numberInput + " is NOT greater than 5"): console.log(numberInput + " is EQUAL to 5");