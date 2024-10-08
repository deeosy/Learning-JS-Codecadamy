
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


// Scopes

// At the top of main.js, declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.

const city = 'New York City';

// Below the city variable, write a function named logCitySkyline.
// Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.
// Inside the function, include a return statement like this:
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

// Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console.   You’ll notice that the logCitySkyline() function is able to access both variables without any problems. In the next exercise we’ll consider why would it be preferable to have one variable outside of a block and the other inside of a block.
console.log(logCitySkyline());


// At the top of main.js, write three global variables:   Name the first variable satellite and set it equal to 'The Moon'.     Name the second variable galaxy and set it equal to 'The Milky Way'.   Name the third variable stars and set it equal to 'North Star'.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

// Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:
const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
 }

//  Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.    You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.
console.log(callMyNightSky());



// In main.js, define a function logVisibleLightWaves().
// Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
// Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.
// Call the logVisibleLightWaves() function from outside the function.
// Beneath the function call, log the value of lightWaves to the console from outside the function.    You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);



// Let’s see what happens if we create a variable that overwrites a global variable.    Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such:
// Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.     You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.

{  /* i placed this curly bracket here to remove the error code showing in VS Code it ends at the bottom*/
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
}


// Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.
// Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.
// Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.     Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.

{  /* i placed this curly bracket here to remove the error code showing in VS Code it ends at the bottom*/
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
}



// Learning about Arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);


// Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.
// Use console.log() to print hobbies to the console.
const hobbies = ['games', 'books', 'women'];
console.log(hobbies);



// Individual elements in arrays can also be stored to variables.    Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).    Then use console.log() to print the listItem variable to the console.
// Now, console.log() the third element in the famousSayings array using bracket notation to access the element.    Do not save the element to a new variable before you log it.
// Awesome, you can access each element in an array using the index. But what happens if you try to access an index that is beyond the last element?    Try to log the item at index [3] of famousSayings to the console. What is logged to the console?
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem)
console.log(famousSayings[2]);
console.log(famousSayings[3]);


// Change the second element of the array groceryList to 'avocados'.
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';


// Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.    Log the updated array, condiments, to the console.
// Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo']      Log the result to the console.     Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.
// Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'.     Log the updated array to the console.
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);


// Find the length of the objectives array and log it to the console.
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);



// Add two elements to the chores array using .push().
// Use console.log to print your chores array to make sure your items were added.
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('wash hair', 'play music');
console.log(chores);



// Use the .pop() method to remove the last element from chores.
// In a line after you called chores.pop(), log chores to the console to make sure it worked.
const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores1.pop();
console.log(chores1);



// Use the .shift() method to remove the first item from the array groceryList.     Log the new groceryList to the console.     Read about .shift() in Docs.
// Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.     After calling .unshift() on groceryList, log groceryList to the console.     You may wish to delete the console.log() statement from the previous step.     Read about .unshift() in Docs.
// You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.      Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.        Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.      Read about .slice() in Docs.
// After calling .slice() on groceryList, log the grocery list to the console one more time.      Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.
// Let’s find the index of a particular element in groceryList using .indexOf().       Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.      Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.)      Read about .indexOf() in Docs.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');

console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);



// In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept.      Underneath the function call, log concept to the console to check if this reassignment mutated the array.
// Let’s double check what happens if we mutate an array using a built-in method inside a function.       Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr.
// Call removeElement() with an argument of concept.
// After calling removeElement(concept), check the value of concept by logging it to console.       Notice that in both cases, the change to the array was maintained outside of the function!
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);


// Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.     The first array element should hold the elements 1 and 2 in that order.         The second array element should hold the elements 3 and 4 in that order.      The third array element should hold the elements 5 and 6 in that order.
// Awesome, you made a nested array! Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.
let numberClusters = [[1,2], [3,4], [5,6]];

const target = numberClusters[2][1];
console.log(target);




// Learning about loops and their syntax


// Create the variable vacationSpots, and assign its value to an array of three strings naming places you’d like to visit.
// Next, console.log() each item in vacationSpots. Since we don’t know loops yet, we have to console.log() each element in the array separately.
// Nice work! Now imagine that the vacation list had 100 places on it— logging each array element to the console by hand would be a tedious task! In the next exercise, we will learn how to make things more efficient with for loops.
let vacationSpots = ['Accra', 'Kumasi', 'Wa'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


// Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console.       When writing/changing loops, there is a chance that our stopping condition isn’t met and we get a dreaded infinite loop which essentially stops our programming from running anything else! To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop.
for (let i = 5; i < 11; i++) {
  console.log(i);
}

//self practice
for (let counter = 0; counter < 4; counter++){
  console.log(counter);
}
//self practice

let firstName = ['Derreck', 'Derrode', 'Rose', 'Ama', 'Soul']
for(i = 0; i < 5; i++){
  // console.log(i);
  console.log(firstName[i]);
}



// Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

for(let i = 3; i >= 0; i--) {
  // console.log(i);
}


// Write a for loop that iterates through our vacationSpots array using i as the iterator variable.         Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.          When writing/changing loops, there is a chance that our stopping condition isn’t met and we get a dreaded infinite loop which essentially stops our programming from running anything else! To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop.
const vacationSpots1 = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots1.length; i++) {
  console.log(`I would love to visit ${vacationSpots1[i]}`);
}

// Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.
// Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
// Create a third variable named mutualFollowers and set it to an empty array.
// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.
let bobsFollowers  = ['Kofi', 'Mich', 'Menzo', 'Kwame'];
let tinasFollowers = ['Ama','Kofi', 'Menzo'];
let mutualFollowers = [];

for(let i=0; i < bobsFollowers.length; i++) {
  for(let j=0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }

}
console.log(mutualFollowers);


const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}



// Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.
/* Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.      Inside the block of your while loop, add the following line of code:
// currentCard = cards[Math.floor(Math.random() * 4)];
Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.        If you notice the Run button spinning continuously or a “Lost connection to Codecademy” message in an exercise, you may have an infinite loop! If the stop condition for our loop is never met, we will create an infinite loop which stops our program from running anything else. To exit out of an infinite loop in an exercise, refresh the page — then fix the code for your loop. */
// Awesome! Your loop is running, but you can’t tell because it doesn’t output anything. Let’s add a console.log() statement to our while block. Inside the block, after you assign currentCard a new value, log currentCard to the console.       For fun you can run your code a few times and see how the output changes!
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard 
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}



// We’d like a program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required. Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing.       The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0.
// We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0.       Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.           In order to help us visualize the output on each iteration of the loop, add a console.log within the do...while block and log the value of cupsAdded.

let cupsOfSugarNeeded = 4;

let cupsAdded = 0;

do {
  cupsAdded = cupsAdded + cupsOfSugarNeeded;
 cupsAdded++;
 console.log(cupsAdded + ' cups was added');
} while (cupsAdded < cupsOfSugarNeeded);

// do ... while statement syntax
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString);


const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do ... while with a stopping condition that evaluates to false

do {
 console.log(firstMessage)
} while (true === false){
  console.log(secondMessage)
};



// Log each element from rapperArray in a for loop with the iterator variable i.
// After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.
// Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.    Log the element before breaking out of the loop.

// break keyword syntax below
// for (let i = 0; i < 99; i++) {
//   if (i > 2 ) {
//      break;
//   }
//   console.log('Banana.');
// }
// console.log('Orange you glad I broke out the loop!');

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}
console.log("And if you don't know, now you know.")

// self test below
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.push('Kiwi');
groceryList.pop();
console.log(groceryList);



//Higher Up Functions 
// We’ve defined a function with a very long name: checkThatTwoPlusTwoEqualsFourAMillionTimes(). This function takes a long time to execute. It checks whether 2 + 2 = 4, but it does it a million times (just to be really sure)!       Using const, declare a shorter-named variable, isTwoPlusTwo that will be easier to work with. Assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.
// Invoke your isTwoPlusTwo() function.
// Hmmm, if we forgot the original name of our function. Is there a way we could figure it out?        Use isTwoPlusTwo to console.log() the name property of the function we assigned to isTwoPlusTwo.

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);



// Here we have a function, addTwo(), that adds 2 to whatever is passed into it. Below that, we’ve created what will be a higher-order function, checkConsistentOutput(). The purpose of the higher-order function will be to check the work of addTwo(). Let’s get started!   To begin, inside the body of checkConsistentOutput(), declare two variables: checkA and checkB:        checkA stores the sum val plus 2.            checkB stores the invocation of the func callback, with val as the argument.
// Next, below the variables, write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'.
// Finally, using console.log(), log the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number.
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
let checkA = val + 2;
let checkB = func(val);

if (checkA === checkB) { return func(val); } 
else { return 'inconsistent results'; }
}

console.log(checkConsistentOutput(addTwo, 10));
 
const higherOrderFunc = (param) => {
  // param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

console.log(higherOrderFunc(anotherFunc));


//  Iterators some types of Iterators below. 
// the    .forEach() method 

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.    You may use any form of callback you prefer.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

let fruitName = (fruit) => {console.log('I want to eat a ' + fruit)};
fruits.forEach(fruitName);

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

// groceries.forEach(function (groceryItem) {
//   console.log( ' - ' + groceryItem);
// });
// // arrow function method
// groceries.forEach(groceryItem => console.log(groceryItem));

// function groceryItem(items){
//   console.log(items);
// }
// // using arrow function method below
let groceryItem = (items) => {console.log('I would also like to buy these ' + items)};
groceries.forEach(groceryItem);


// the    .map() method
// Add your code under the animals array and before the line console.log(secretMessage.join(''));     Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.
// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.
const animals1 = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals1.map(animals => {return animals[0];})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumbers => {return bigNumbers/100;})
console.log(smallNumbers)


// the    .filter() method
// Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.
// Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers1 = randomNumbers.filter(smallNum => smallNum < 250);
console.log(smallNumbers1);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(longWords => longWords.length > 7);
console.log(longFavoriteWords)

const words1 = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words1.filter(word => { return word.length < 6; });


// the    .findIndex() method
// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
// Let’s see if we can find the index of the first animal that starts with the letter 's'.        Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex( animalSearch => {return animalSearch === 'elephant';});
console.log(foundAnimal);

const startsWithS = animals.findIndex( s => {return (s[0] === 's');} );
console.log(startsWithS);


// the    .reduce() method
// Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.       In main.js, there is an array of numbers, newNumbers.       To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.           You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step!
// Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.
// To check the value being used as we iterate through the array, add three statements to the function body of the callback:
// console.log('The value of accumulator: ', accumulator);
// console.log('The value of currentValue: ', currentValue);
// a return statement that adds accumulator to currentValue.

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
}, 10);
console.log(newSum);


// the    .some() method
// In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.
// The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.
// In the last line of main.js, there is this code:   // console.log(interestingWords.every(word =>        ));      Complete the code between the parentheses to check if every element has more than 5 characters.        Make sure to uncomment (delete the // before) the last line of the program before you run the code

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => { return word.length < 6; }));

const interestingWords = words.filter((word) => {return word.length > 5;});

console.log(interestingWords.every((word) => {return word.length > 5} ));



// Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.
// In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.
// In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.
// In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.
// In the fifth method call, replace the word method with a method that will return a boolean value.

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);



//Objects: creating objects literals
// The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  'color': 'silver',
}


// Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.
// Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
console.log(planetArray);


// Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
// Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let returnAnyProp = (objectName, propName) => objectName[propName];
 
console.log(returnAnyProp(spaceship, 'homePlanet'));
// let propName =  'Active Mission';

// Write your code below
// let isActive = spaceship['Active Mission'];
// console.log(isActive);

let isActive = (objectName, propName) => objectName[propName];
console.log(isActive(spaceship, 'Fuel Type'));



// Reassign the color property of the spaceship object to have a value of 'glorious gold'
// Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 4;
delete spaceship['Secret Mission'];
console.log(spaceship);



// Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method retreat() which will console.log() the retreatMessage.
// Add another method to your object literal. This method, takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
// Invoke your two methods: first .retreat() then .takeOff().
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat: function () {
    console.log('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.');
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  },
};

alienShip.retreat();
alienShip.takeOff();



// Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
// Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
// Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
console.log(capFave);

spaceship.passengers = [{
  mate: 'Derreck',
  degree: 'NASA Space Program',
}, {
  enginer: 'Peter',
  degree: 'Mecahnical Engineering',
}];

let firstPassenger = spaceship.passengers[0];



// // example below
// const spaceship = {
//      telescope: {
//         yearBuilt: 2018,
//         model: '91031-XLT',
//         focalLength: 2032 
//      },
//     crew: {
//         captain: { 
//             name: 'Sandra', 
//             degree: 'Computer Engineering', 
//             encourageTeam() { console.log('We got this!') } 
//          }
//     },
//     engine: {
//         model: 'Nimbus2000'
//      },
//      nanoelectronics: {
//          computer: {
//             terabytes: 100,
//             monitors: 'HD'
//          },
//         'back-up': {
//            battery: 'Lithium',
//            terabytes: 50
//          }
//     }
// }; 
// spaceship.crew.captain.encourageTeam();



// Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
// Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true
// Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
};
greenEnergy(spaceship);

let remotelyDisable = obj => {
  obj.disabled = true;
}
remotelyDisable(spaceship);

console.log(spaceship);

// const spaceship = {
//   homePlanet : 'Earth',
//   color : 'silver'
// };
 
// let paintIt = obj => {
//   obj.color = 'glorious gold'
// };
// paintIt(spaceship);

// console.log(spaceship.color);


// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below
for(let crewMember in spaceship.crew){
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
};

for(let crewMember in spaceship.crew){
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}



