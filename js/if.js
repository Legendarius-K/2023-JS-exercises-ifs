// don't touch the window.addEventListener line, or the closing }); at the end of the file
window.addEventListener('load', function () {  

/*   
Complete each exercise, test by running if.html, then comment out the code to stop it running again when you move on to subsequent exercises. 

If you don't the prompts and alerts from previous exercises will run whenever you reload the page

Use the exercise number as the variable for the prompt.

Eg:
let exercise1 = prompt("Enter a number");
*/

// EXERCISE 1, 2 AND 3:
// let exercise1 = prompt("Enter any number between 1-100");

// if (exercise1 > 5) {
//     alert("Your number is greater than five!");
// } else if (exercise1 < 5) {
//     alert("Your number is less than five!");
// } else if (exercise1 == 5) {
//     alert("Your number is equal to five!");
// }

// EXERCISE 4:

let userNumber = prompt("Enter any number");

console.log(10 * userNumber);

let secondUserNumber = prompt("Enter a new number");

console.log(typeof secondUserNumber);

let thirdUserNumber = prompt("Enter a third number");

console.log(typeof (parseInt (thirdUserNumber)));


});