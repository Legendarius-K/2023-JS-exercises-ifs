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
let userInput=prompt("Please guess a number, we will check if it greater than 5");
if (userInput > 5) {
    console.log(userInput + "is greater than 5");
} else if (userInput < 5) {
    console.log (userInput + "is lower than 5")
} else {
    console.log(userInput + "is equal 5")
}
