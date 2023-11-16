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
/*EXERCISE 6 - ask the user to enter a number and show if it is less than 5 or greater than 10 - just a yes or no answer is required
let userNumber=parseFloat(prompt("Please insert a number. Is this number less then 5 or greater then 10? YES/NO"));
if (!userNumber) {
    console.log("empty or not valid input");
} else {
    if (userNumber < 5 || userNumber> 10) {
        console.log("YES");
        document.querySelector(".exercise-6").textContent= "YES";
    } else {
        console.log("NO");
        document.querySelector(".exercise-6").textContent= "NO";
    }
}
*/
/* EXERCISE 7 -ask the user to enter a number and show if it is less than 5 or greater than 10 or neither - show which one it is
let userNumber=parseFloat(prompt("Please insert a number. Is this number less then 5 or greater than 10 or neither? SHOW THE NUMBER"));
if (!userNumber) {
    console.log("empty or not valid input");
} else {
    if (userNumber < 5 || userNumber> 10) {
        console.log(userNumber + " is either lower then 5 or greater then 10");
        document.querySelector(".exercise-7").textContent= userNumber + " is either lower then 5 or greater than 10";
    } else {
        console.log(userNumber + " is NEITHER lower then 5 or greater then 10");
        document.querySelector(".exercise-7").textContent= userNumber + " is NEITHER lower then 5 or greater than 10";
    }
}
*/
/* EXERCISE 8 -ask the user to enter two numbers and show which is larger
let numberOne=parseFloat(prompt("Please insert the FIRST number"));
let numberTwo=parseFloat(prompt("Please insert the SECOND number"));
if (!numberOne || !numberTwo) {
    console.log("at least one of the number is not a valid imput or it is empty");
} else {
    if (numberOne>numberTwo) {
        console.log(numberOne + " is greater than " + numberTwo);
        document.querySelector(".exercise-8").textContent=numberOne + " is greater than " + numberTwo;
    } else if (numberOne<numberTwo) {
        console.log( numberTwo + " is greater than " + numberOne);
        document.querySelector(".exercise-8").textContent=numberTwo + " is greater than " + numberOne;
    } else {
        console.log(numberOne + " is equal " + numberTwo);
        document.querySelector(".exercise-8").textContent=numberOne + " is equal " + numberTwo;
    }
}
*/
/*EXERCISE 9: ask the user to enter three different numbers and show them in order from largest to smallest in the same alert/0 is undefined???+ maggiore uguale
let num1=parseFloat(prompt("Please insert FIRST number"));
let num2=parseFloat(prompt("Please insert SECOND number"));
let num3=parseFloat(prompt("Please insert THIRD number"));

let numLarge, numMedium, numSmall;

if (!num1 ||!num2 || !num3) {
    console.log("at least one input is INVALID or EMPTY")
} else {
    if (num1>num2 && num1>num3) {
        numLarge= num1;
        if (num2>num3) {
            numMedium= num2;
            numSmall= num3;
        } else {
            numMedium= num3;
            numSmall= num2;
        }

    } else if (num2>num1 && num2>num3) {
        numLarge= num2;
        if (num1>num3) {
            numMedium= num1;
            numSmall= num3;
        } else {
            numMedium= num3;
            numSmall= num2;
        }

    } else if (num3>num1 && num3>num2) {
        numLarge= num3;
        if (num1>num2) {
            numMedium= num1;
            numSmall= num2;
        } else {
            numMedium= num2;
            numSmall= num1;
        }
    }

}

alert("The following numbers are displayed from larger to smaller: "+ numLarge + " => " + numMedium + " => " + numSmall);
*/

/*EXERCISE 10: ask the user whether they are a cat or a dog person. QUESTION

If they like cats, ask them if they prefer a tabby or a tiger QUESTION

If they like dogs, ask them if they prefer a chihuahua or a wolf QUESTION - 4 CHOICHES

A tabby says "miaow", tigers "growl", a chihuahua says "yap" and a wolf likes to "howl".

Show the user their chosen breed and what it says

Note: both you & the user will have to spell the breeds correctly for this to work 
*/