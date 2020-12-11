// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// TODO: create an array of CAP letters, lower letters, nums, and special char
var passCharUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var passCharLower = ["abcdefghijklmnopqrstuvwxyz"];
// var passCharNum = ["0123456789"]; 
// var passCharSpec = ["!@#$%^&*()"];

// TODO: create an empty array to hold user requested characters
var finalArray = [];

// TODO: console.log every step of the way

// TODO: Create generatePassword function and write all the logic within this function

function generatePassword() {

  // TODO: Create confirm to ask user if they want capital letters and set to a variable
  var capitalLetters = confirm("Would you like capital letters in your password?");
  if (capitalLetters === true) {
    finalArray.push("Capital")
  }
  // TODO: Create confirm to ask user if they want lowercase letters and set to a variable
  var lowerLetters = confirm("Would you like lowercase letters in your password?");
  if (lowerLetters === true) {
    finalArray.push("Lower")
  }
  // TODO: Create confirm to ask user if they want numbers and set to a variable
  // var num = confirm("Would you like numbers in your password?");

  // // TODO: Create confirm to ask user if they want special characters and set to a variable
  // var specialCharQ = confirm("Would you like special chars in your password?");

  // // TODO: create a conditional to make sure the user has chosen at least one type of character
  // if (capitalLetters, lowerLetters, num, specialCharQ===true) {
  //   console.log("They've chosen at least one type of character");
  // }
  // else {
  // alert("You have to choose one ya dingus");
  // return;
  // }


  // TODO: Create prompt to ask user if how many char they like they pass to be (at least 8 characters and no more than 128) and set to variable
  var passLength = prompt("How long would you like your password to be? (between 8-128 characters)");
  if (passLength < 8) {
    alert("must be 8 characters or above");
    return;
  }
  if (passLength > 128) {
    alert("must be 128 characters or less");
    return;
  }
  if (isNaN(passLength) === true) {
    alert("gotta pick a number nerd");
    return;
  }
  console.log(passLength);

  // TODO: create a conditional to make sure the user has chosen at least one type of character
  // // if (capitalLetters, lowerLetters, num, specialCharQ===true) {
  //     console.log("They've chosen at least one type of character");
  // }
  // else {
  //   alert("You have to choose one ya dingus");
  // }







  // TODO: Create multiple if statements that checks if user said yes or no to different confirms that we asked them, and based on their response push those specific characters to our empty array
  if (finalArray.length > 0) {
    var finalPassword = ""
    for (var i = 0; i < passLength; i++) {
      var passCharSelected = "";
      var passCharType = finalArray[Math.floor(Math.random() * finalArray.length)]

      if (passCharType === "Capital") {
        passCharSelected = passCharUpper[Math.floor(Math.random() * passCharUpper.length)]

        console.log(passCharSelected);
      }

      else if (passCharType === "Lower") {
        passCharSelected = passCharLower[Math.floor(Math.random() * passCharLower.length)]

        console.log(passCharSelected);
      }
      // else if(num===true) {
      //  passCharSelected=passCharUpper[Math.floor(Math.random()*passCharUpper.length)]

      // console.log(passCharSelected);
      // }
      // else if(specialCharQ===true) {
      //  passCharSelected=passCharSpec[Math.floor(Math.random()*passCharSpec.length)]

      // console.log(passCharSelected);
      finalPassword = finalPassword + passCharSelected
      console.log(finalPassword);
    }
    return finalPassword;
  }
}

// }
writePassword()

// var specialCharQ = confirm("Would you like special chars in your password?")
// var myFinalArrayOfChar = ""
// var specialC = "@#$%^&**("

// if(passChar === true){
//   // push all the special chars in the empty array
//   myFinalArrayOfChar = myFinalArrayOfChar+specialC
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
