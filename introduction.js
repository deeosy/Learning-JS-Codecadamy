
// On line 1, log the string 'JavaScript' to the console.

// On line 2, log the number 2011 to the console.

// On line 3, print 'Woohoo! I love to code! #codecademy' to the console.

// On line 4, print the number 20.49 to the console.


console.log("JavaScript");
console.log(2011);
console.log("Woohoo! I love to code! #codecademy");
console.log(20.49);


// Inside of a console.log(), add 3.5 to your age.

// On a new line write another console.log(). Inside the parentheses, take the current year and subtract 1969.

// Create another console.log(). Inside the parentheses divide 65 by 240.

// Create one last console.log(). Inside the parentheses, multiply 0.2708 by 100.

console.log(23+3.5);
console.log(2024-1969);
console.log(65/240);
console.log(100*0.2708);


// Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'.
// Note: You should concatenate the two strings exactly (without introducing any additional characters).

// We left off the space last time. Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space (' ') between the two words.

console.log("Hello"+"World");
console.log("Hello"+" "+"World");


// Use the .length property to log the number of characters in the following string to the console:

console.log("Teaching the world how to code".length);



// Use the .toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.

// In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.
// If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. 
// The one method that seems ideal for us is .trim().
// Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.

console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim());



// Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.

// Now, use Math.floor() to make the output a whole number.
// Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().

// Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.
// Use this method with the number 43.8. Log the answer to the console.

// Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.
// Put the number 2017 in the parentheses of the method and use console.log() to print the result.

console.log(Math.random()*10);
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
(Number.isInteger(2017));



// Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.

// Declare a variable named numOfSlices using the var keyword and assign to it the number 8.

// Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.
// On the following line, use console.log() to print the value saved to numOfSlices.


var myName = "Derrode";
console.log(myName);

var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);


// Create a let variable called changeMe and set it equal to the boolean true.

// On the line after changeMe is declared, set the value of changeMe to be the boolean false.
// To check if changeMe was reassigned, log the value saved to changeMe to the console.


let changeMe = true;
changeMe = false;
console.log(changeMe);



// Create a constant variable named entree and set it to equal to the string 'Enchiladas'.

// Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.

// Great, let’s see what happens if you try to reassign a constant variable.
// Paste the following code to the bottom of your program.
// entree = 'Tacos'
// This code throws the following error when you run your code:
// TypeError: Assignment to constant variable.
// After you clear this checkpoint, if you want to see about another quirk of const in action open the hint!


const myName = "Derrode";
console.log(myName);

const entree = "Enchiladas";
console.log(entree);


// Use the += mathematical assignment operator to increase the value stored in levelUp by 5.

// Use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100.

// Use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11.

// Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.


let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp +=5;
powerLevel -=100;
multiplyMe*= 11;
quarterMe/= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);


// Using the increment operator, increase the value of gainedDollar.

// Using the decrement operator, decrease the value of lostDollar.


let gainedDollar = 3;
let lostDollar = 50;

let a = 10;
a++;
console.log(a);

let b = 20;
b--;
console.log(b);

gainedDollar++;
lostDollar--;



// Create a variable named favoriteAnimal and set it equal to your favorite animal.

// Use console.log() to print 'My favorite animal: ANIMAL' to the console. 
// Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.


let myPet = "armadillo";
console.log ("I own a pet " + myPet+ ".");

let favoriteAnimal = "dog";
console.log("My favorite animal: " +favoriteAnimal);


// Create a variable called myName and assign it your name.

// Create a variable called myCity and assign it your favorite city’s name.

// Use a single template literal to interpolate your variables into the sentence below. 
// Use console.log() to print your sentence to the console in the following format:
// Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.


const myPet1 = 'armadillo';
console.log(`I own a pet ${myPet1}.`);
// Output: I own a pet armadillo.

let myName = "derrode";
let myCity = "Accra";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);



// Use console.log() to print the typeof newVariable.

// Great, now let’s check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.

// Since you assigned this new value to newVariable, 
// it has a new type! On the line below your reassignment, use console.log() to print typeof newVariable again.


let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable=1;
console.log(typeof newVariable);

const unknown1 = "foo";
console.log(typeof unknown1);

const unknown2 = 10;
console.log(typeof unknown2);

const unknown3 = true;
console.log(typeof unknown3);






// The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
// The value saved to kelvin will stay constant. Choose the variable type with this in mind.

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
// Fahrenheit = Celsius * (9/5) + 32
// In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.

// When you convert from Celsius to Fahrenheit, you often get a decimal number.
// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

// Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
// The temperature is TEMPERATURE degrees Fahrenheit.
// Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.

// Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.
// If you’d like extra practice, try this:
// Convert celsius to the Newton scale using the equation below
// Newton = Celsius * (33/100)
// Round down the Newton temperature using the .floor() method
// Use console.log and string interpolation to log the temperature in newton to the console



let kelvin1 = 273.15;

let cel =(Math.floor(kelvin1-273.15));
let fahr = (Math.floor((cel*1.8) + 32));
console.log(cel);
console.log(fahr);

// value for kelvin 
let kelvin = 293;

// celsiusis 273 less than kelvin hence we subtract
const celsius = kelvin-273;
// formular for calculating fahrenheit
let fahrenheit = ((celsius*1.8)+32);
// we are rounding up the value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

let newton=Math.floor((celsius*(33/100)));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);


// calculating dog age in human years

// Create a variable named myAge, and set it equal to your age as a number.
// Write a comment that explains this line of code.




//Learning if statements

// Using the let keyword, declare a variable named sale. Assign the value true to it.

// Now create an if statement. Provide the if statement a condition of sale. Inside the code block of the if statement, console.log() the string 'Time to buy!'.

let sale = true;
sale = false;

if (sale) {
  console.log('Time to buy!')
}


// Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'

{let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}
}


// Using let, create a variable named hungerLevel and set it equal to 7.
// Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'. After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different operators such as <=,>=,>, and <.

let hungerLevel = 7;

if (hungerLevel >= 7) {
 console.log('Time to eat!');
} else {
 console.log('We can eat later!')
}


// In main.js there are two variables mood and tirednessLevel. Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8. If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'. After you press “Run”, play around with the || operator and the ! operator! What happens if you negate the value of the entire statement with ! and switch to || instead of &&?

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood ==='sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
}  else {
  console.log('not bed time yet');
}

// Change the value of wordCount so that it is truthy. This value should still be a number. After you make this change and run your code, 'Great! You've started your work!' should log to the console. Change the value of favoritePhrase so that it is still a string but falsy. After you make this change and run your code, 'This string is definitely empty.' should log to the console.

let wordCount = 0;
wordCount=4;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step. Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.


// Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'. What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.

let tool = '';
tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Refactor, or edit, the first if...else block to use a ternary operator.
// Refactor the second if...else block to use a ternary operator.
// Refactor the third if...else block to use a ternary operator.

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') :   console.log('You will not need a key to open the door.');

// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }

let isCorrect = true;

isCorrect ? console.log('Correct!') :console.log('Incorrect!');

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

let favoritePhrase1 = 'Love That!';

favoritePhrase1  === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")
// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }


// Let’s create a program that keeps track of the way the environment changes with the seasons. Write a conditional statement to make this happen! In main.js there is already an if...else statement in place. Let’s add an else if statement that checks if season is equal to 'winter'. Inside the code block of the else if statement, add a console.log() that prints the string 'It\'s winter! Everything is covered in snow.'. Make sure that the structure uses if, else if, and else.
// Add another else if statement that checks if season is equal to 'fall'. Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s fall! Leaves are falling!'.
// Add a final else if statement that checks if season is equal to 'summer'. Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s sunny and warm because it\'s summer!'.

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


// Let’s write a switch statement to decide what medal to award an athlete. athleteFinalPosition is already defined at the top of main.js. So start by writing a switch statement with athleteFinalPosition as its expression.
// Inside the switch statement, add three cases: The first case checks for the value 'first place' If the expression’s value matches the value of the case then console.log() the string 'You get the gold medal!' The second case checks for the value 'second place'  If the expression’s value matches the value of the case then console.log() the string 'You get the silver medal!'  The third case checks for the value 'third place'  If the expression’s value matches the value of the case then console.log() the string 'You get the bronze medal!'  Remember to add a break after each console.log().

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition) {
  case 'first place' : console.log('You get the gold medal!');
  break;
  case 'second place' : console.log('You get the silver medal!');
  break;
  case 'third place' : console.log('You get the bronze medal!');
  break;
  default: console.log('No medal awarded.');
  break;
}




// Creating a the Magic 8 Ball game with if statements

// In the first line of the program, define a variable called userName that is set to an empty string.  If the user wants, they can enter their name in between the quotation marks.
let userName ='';
userName = 'mike';

// Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
let userQuestion = '';
userQuestion = 'Is my future bright?';


// We need to generate a random number between 0 and 7.   Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) from the Math library.
// the formula below make sure no number goes above 8
let randomNumber =Math.floor(Math.random()*8) ;


// Create one more variable named eightBall, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of randomNumber.
let eightBall = '';

// Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

// Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
console.log(`${userName}: ${userQuestion}`);

// We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall: ( watch the code below for the values, don't want to double type, ;) )


switch (randomNumber) {
  case (0) : eightBall = 'It is certain';
  break;
  case (1) : eightBall = 'It is decidedly so';
  break;
  case (2) : eightBall = 'Reply hazy try again';
  break;
  case (3) : eightBall = 'Cannot predict now';
  break;
  case (4) : eightBall = 'Do not count on it';
  break;
  case (5) : eightBall = 'My sources say no';
  break;
  case (6) : eightBall = 'Outlook not so good';
  break;
  case (7) : eightBall = 'Signs point to yes';
  break;
  
}


// Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.
console.log(`Eightball: ${eightBall}`);



//   Codecademy’s annual race day


// Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file.  Check off this task after reading that line.  You can read the hint if you want to learn how it works!
let raceNumber = Math.floor(Math.random() * 1000);

// Create a variable that indicates whether a runner registered early or not.  Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
let regEarly = true;

// Create a variable for the runner’s age and set it equal to a number.  You’ll change this later as you test different runner conditions.
let runnerAge = 18;

// Create a control flow statement that checks whether the runner is an adult AND registered early.  Add 1000 to their raceNumber if this is true.

if (runnerAge > 18 && regEarly) {
  console.log(`Runner #: ${raceNumber + 1000}`);
}


// Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.  For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.

// “Late adults run at 11:00 am”   Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am   Write the corresponding else if statement.   Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.

// “Youth registrants run at 12:30 pm (regardless of registration)”   For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.

// Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console!   You can check your work using the examples provided in the hint.

// Don’t forget about runners exactly 18 years old!   Add an else statement that logs a statement to the console telling the runner to see the registration desk.


if (runnerAge > 18 && regEarly){
  console.log(`Runner #: ${raceNumber + 1000}. You race at 9:30 am`);
} else if (runnerAge > 18 && !regEarly) {
   console.log(`Runner #: ${raceNumber + 1000}. You race at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`Runner #: ${raceNumber + 1000}. You race at 12:30 pm`);
} else {
  console.log(`Runner #: ${raceNumber + 1000}. You race at 13:00 pm`);
}




