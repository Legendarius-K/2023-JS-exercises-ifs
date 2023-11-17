// don't touch the window.addEventListener line, or the closing }); at the end of the file
window.addEventListener('load', function () {

    /*   
    Complete each exercise, test by running if.html, then comment out the code to stop it running again when you move on to subsequent exercises. 
    
    If you don't the prompts and alerts from previous exercises will run whenever you reload the page
    
    Use the exercise number as the variable for the prompt.
    
    Eg:
    let exercise1 = prompt("Enter a number");
    */

    //Exercise 1,2,3 
   /*
    let userInput = prompt("Enter a number");

    if (userInput > 5) {
        alert("Your number was greater than 5");
    } else if (userInput < 5) {
        alert("Your number was less than 5");
    } else if (userInput === 5) {
        alert("Your number was equal to 5");
    }
    //Exercise 4
    let exercise4_1 = prompt("Enter a number");

    if (exercise4_1) {
        alert(10 * exercise4_1);
    }

    let exercise4_2 = prompt("Enter a new number");

    if (exercise4_2) {
        alert(typeof exercise4_2);
    }

    let exercise4_3 = prompt("Enter a new number");

    if (exercise4_3)
        alert(typeof (parseInt(exercise4_3)));

    //Exercise 5
    let exercise5 = prompt("Enter a number")

    if (exercise5 >= 5 && exercise5 <= 10)
        alert("Your number was between 5 and 10")

    //Exercise 6
    let exercise6 = prompt("Enter a number")
    if (exercise6 < 5) {
        alert("Yes")
    } else if (exercise6 > 10) {
        alert("No")
    }


    //Exercise 7
    let exercise7 = prompt("Enter a number")
    if (exercise7 < 5) {
        alert("Your number is less than 5")
    } else if (exercise7 > 10) {
        alert("Your number was greater than 5")
    }

    //Exercise 8
    let exercise8_1 = prompt("Enter your first number")
    let exercise8_2 = prompt("Enter your second number")
    if (exercise8_1 > exercise8_2) {
        this.alert("Your first number was larger than second number")
    } else if (exercise8_1 < exercise8_2) {
        alert("Your second number was larger than your first number")
    }

    //Exercise 9
 */  
    let exercise9_1 = prompt("Enter your first number");
    let exercise9_2 = prompt("Enter your second number");
    let exercise9_3 = prompt("Enter your third number");

  // Convert input to numbers
    exercise9_1 = parseInt(exercise9_1);
    exercise9_2 = parseInt(exercise9_2);
    exercise9_3 = parseInt(exercise9_3);
    
        if (exercise9_1 > exercise9_2 && exercise9_3 ){
        if (exercise9_2 > exercise9_3) {
            alert("Your first number was the largest, and the second number was second largest and the third number was smallest")
        } else if (exercise9_3 > exercise9_2) {
            alert("Your first number was the largest, and the third number was second largest and the second number was smallest")
        }
    } else if (exercise9_2 > exercise9_1 && exercise9_3 ){
        if (exercise9_1 > exercise9_3) {
            alert("Your second number was the largest, and the first number was second largest and the third number was smallest")
        } else if (exercise9_3 > exercise9_1) {
            alert("Your second number was the largest, and the third number was second largest and the first number was smallest")
        }
    } else if (exercise9_3 > exercise9_2 && exercise9_1 ){
        if (exercise9_2 > exercise9_1)  {
            alert("Your third number was the largest, and the second number was second largest and the first number was smallest")
        } else if (exercise9_1 > exercise9_2) {
            alert("Your third number was the largest, and the first number was second largest and the second number was smallest")
        }
    } 

    //Exercise 10

    let exercise10_1 = prompt("Are you a cat or dog person?");

    if (exercise10_1 === "cat") {
        let cat = prompt("Do you prefer a tabby or a tiger?");  
        
        if (cat === "tabby") {
            alert("A tabby says 'Miaow'");
        } else if (cat === "tiger") {
            alert("A tiger says 'growl'");
        }
    } else if (exercise10_1 === "dog") {
        let dog = prompt("Do you prefer a chihuahua or a wolf?");
        
        if (dog === "chihuahua") { 
            alert("A chihuahua says 'yap'");
        } else if (dog === "wolf") {
            alert("A wolf says 'howl'");
        }
    }

});