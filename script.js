// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// TODO: create an array of CAP letters, lower letters, nums, and special char
var passCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passCharLower = "abcdefghijklmnopqrstuvwxyz";
var passCharNum = "0123456789"; 
var passCharSpec = "!@#$%^&*()";


function generatePassword() {
  var passwordCharacters = "";
  var newPassword = "";

  //  Create confirm to ask user if they want capital letters and set to a variable
  var capitalLetters = confirm("Would you like capital letters in your password?");
  
  
  //  Create confirm to ask user if they want lowercase letters and set to a variable
  var lowerLetters = confirm("Would you like lowercase letters in your password?");
  
  //  Create confirm to ask user if they want numbers and set to a variable
  var num = confirm("Would you like numbers in your password?");
  

  // //  Create confirm to ask user if they want special characters and set to a variable
  var specialCharQ = confirm("Would you like special chars in your password?");
  

  

//  create a conditional to make sure the user has chosen at least one type of character
if (capitalLetters|| lowerLetters|| num|| specialCharQ===true) {
  console.log("They've chosen at least one type of character");
}
else {
alert("You have to choose one ya dingus");
}

  //  Create prompt to ask user if how many char they like they pass to be (at least 8 characters and no more than 128) and set to variable
  var passLength = prompt("How long would you like your password to be? (between 8-128 characters)");
  if (passLength < 8|| passLength> 128|| isNaN(passLength)) {
    alert("must be between 8 and 128 characters");
  }

  if (passLength > 128) {
    alert("must be 128 characters or less");
  }

  if (isNaN(passLength) === true) {
    alert("gotta pick a number nerd");
  } else {
    if (capitalLetters === true) {
      passwordCharacters= passwordCharacters.concat(passCharUpper)
    }
      if (lowerLetters === true) {
        passwordCharacters=passwordCharacters.concat(passCharLower)
      }
  
      if (num === true) {
        passwordCharacters= passwordCharacters.concat(passCharNum)
      }
  
      if (specialCharQ === true) {
        passwordCharacters= passwordCharacters.concat(passCharSpec)
      }

      var randomCharacter = Math.floor(Math.random() * passwordCharacters.length)
      
  
      for (var i = 0; i < passLength; i++) {
        var randomCharacter = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
        newPassword = newPassword.concat(randomCharacter)
      }
        console.log(newPassword);
      return newPassword;
    }
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);