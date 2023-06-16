function isPalindrome(word) {
  // Write your algorithm here

  let wordRvse = "";
  for(let i=word.length-1; i>=0; i--){
    wordRvse = wordRvse.concat(word[i])
  }

  if(word === wordRvse){
    return true;
  } else{
    return false;
  }
}

/* 
  Add your pseudocode here
initialize wordRvse for the reversed input

iterate over each character in input from last to first
    add character to wordRvse

compare wordRvse and input word - if same ret true, else ret false

*/

/*
  Add written explanation of your solution here
  
  In order to check palindrome status, we have to reverse
  the word for comparison. I need to iterate through each character
  in the input string, starting from the last character. Then each
  character can be added to a new string, wordRvse. I can then see
  if wordRvse and the original word are the same. If yes, word is
  a palindrome, so return true. Otherwise, word is not a palindrome
  and return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
