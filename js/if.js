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

// let userNumber = prompt("Enter any number");

// console.log(10 * userNumber);

// let secondUserNumber = prompt("Enter a new number");

// console.log(typeof secondUserNumber);

// let thirdUserNumber = prompt("Enter a third number");

// console.log(typeof (parseInt (thirdUserNumber)));

// EXERCISE 5:

// let exercise5 = prompt("Enter any number");

// if (exercise5 >= 5 && exercise5 <= 10) {
//     alert("yes"); 
// } else { alert ("no") } 


// EXERCISE 6:

// let exercise6 = prompt("Enter a number");

// if (exercise6 < 5 || exercise6 > 10) {
//     alert("yes");
// } else { alert("no") }


// EXERCISE 7:

// let exercise7 = prompt("Enter a number");

// if (exercise7 < 5) {
//     alert ("Your number is less than five!");
// } else if (exercise7 >= 5 && exercise7 <= 10) {
//     alert ("Your number is neither less than five or greater than ten");
// } else if (exercise7 > 10) {
//     alert("Your number is greater than ten!")
// }

// EXERCISE 8:

// let userNumber1 = prompt("enter a number");

// let userNumber2 = prompt("Enter another number");

// if (userNumber1 > userNumber2) {
//     alert(userNumber1 + " is greater than " + userNumber2);
// } else if (userNumber2 > userNumber1) {
//     alert (userNumber2 + " is greater than " + userNumber1);
// } else if (userNumber1 == userNumber2) {
//     this.alert("Number " + userNumber1 + " number " + userNumber2 + " are equal.");
// }

//breaks sometimes, e.g. when userNumber1 = 45 and userNumber2=345, result is "45 is greater than 345"
//after restarting it works a few times then it breaks 

// EXERCISE 9:

let userInput = prompt ("Enter any three numbers");
let numbersArray = userInput.split(' ');

console.log(numbersArray);

let descendingNumbers = numbersArray.sort((a,b)=>b-a);

console.log(descendingNumbers);

alert("Your numbers in descending order: " + descendingNumbers);

});

