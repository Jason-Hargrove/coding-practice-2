let log = console.log;

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// Soulution 1: Splitting str into an array
// Split turns the string into an array, and it takes in a paramater of a seperator.
const reverseString = (str) => {
//     const strArr = str.split('')
//     // Reverse the array
//     strArr.reverse();
//     // Turn it back into an array with join() You you'll need to add '' in the parameter to get rid of the ","
//     return strArr.join('');
//   }

  //Solution 1: Cleand up:
  // const reverseString = (str) => {
  //   return strArr = str.split('').reverse().join('');
  
  ////////////////////////////////
  // With a decromenting for loop
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
    // or revString = revString + str[i];
  }
  return revString;
}
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  function isPalindrome(str) {}
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {}
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {}
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {}
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {}
  
  
  
  // Call Function
  const output = reverseString('hello');
  
  console.log(output);