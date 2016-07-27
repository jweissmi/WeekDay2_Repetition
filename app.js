// 1.  Create a new project via the command line called 09-javascript-intro. If you don't remember how, watch this video.
// 2.  Create an index.js file in your project.
// 3.  Declare 5 variables, but don't assign them a value.
// 4.  Declare 5 variables and assign them to numbers.
// 5.  Declare 5 variables and assign them to strings.
// 6.  Declare 5 variables and assign them to booleans.
// 7.  Declare 2 variables and assign them to numbers. 
//     Then, on a separate line, declare another variable and assign it to the sum of the first two variables.
// 8.  Declare a variable and assign it to a boolean. Then, write an if statement using that variable. 
//     If it's true, console.log out a statement that it's true. Then, add an else statement that console.logs out a statement that it's false.
// 9.  Write a for loop. It should run until i is greater than 10. 
//     Each time it runs, it should console.logthe current value of i.


var year;
var make;
var model;
var submodel;
var engine;

var num1 = 10;
var num2 = 12;
var num3 = 33;
var num4 = 150;
var num5 = 99;


var country; 'United States';
var region; 'Mid West';
var state; 'Michigan';
var county; 'Oakland';
var city; 'Lake Orion';


var hasDog = Boolean(0);
var isHungry = Boolean(0);
var likesFish = Boolean(1);
var isOld = Boolean(1);
var likesSteak = Boolean(1); 

var x = 2;
var y = 3;
var z = x + y;

document.write(z);

document.write('<br/>');
document.write('<br/>');


if (isOld == 1) {
  console.log("Hello, sir!");
} else {
  console.log("What's up, dude!");
} 

var i;
for(var i = 1; i <= 10; i++){
  console.log(i);
}


// 1.  Declare a variable and assign it the number 3. 
//     Then, write a switch statement that takes that variable as its parameter, 
//     and has a case for numbers 1 to 4. 
//     Each case should console.log the corresponding letter of the alphabet (1 = a, 2 = b). 
//     Declare a default case that console.logs a message that their number was not found.
    
var t = 3;    
    switch(t){
        case 0:
            console.log("a");
            break;
        case 1:
            console.log("b");
            break;
        case 2:
            console.log("c");
            break;
        case 3:
            console.log("d");
            break;
        case 4:
            console.log("Your number was not found");
            break;
    }
    
// 2.  Declare a variable and set its value to true. 
//     Write a while statement that takes that variable as its parameter. 
//     Make the while statement run 10 times, then change the value of the variable to false.
//     
// 
//     
//     
// 3.  Declare 2 variables. Set one to the number 5 and the other to the number 6. 
//     Write an if statement that evaluates to true for each of the following comparisons: !==, >, <. 
//     Then write an ifstatement that evaluates to false for each of the following comparisons: ===, ==, >, <.

//var a = 5;
//var b = 6;


    
    
    
// 4.  Declare a variable and set its value to false. 
//     Write an if statement that takes that value as its parameter and evaluates to true.

var a = (!"test one" || "test two"); // a is "test two"
// ("test one" gets converted to false and skipped)

var b = (!"test one" && "test two"); // b is false
// ("test one" gets converted to false and returned)

var c = (!0 || !"test two"); // c is true
// (0 gets converted to true and returned)
 
console.log(a);
console.log(b);
console.log(c);

var stop = false, age = 23;

age > 18 ? (
    alert("OK, you can go.")
) : (
    stop = true,
    alert("Sorry, you are much too young!")
);
