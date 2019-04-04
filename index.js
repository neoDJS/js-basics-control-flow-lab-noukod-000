// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let greeting = "";

  if (someValue > 2500) {
    greeting = 'No can do.';
  } else if (someValue > 2000 ) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (someValue <= 400) {
    greeting = 'This one is on me!';
  } else {

  }
  return greeting
}
