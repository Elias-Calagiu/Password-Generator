// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO: console.log every step of the way

// TODO: Create generatePassword function and write all the logic within this function

function generatePassword() {

// TODO: Create confirm to ask user if they want capital letters and set to a variable

// TODO: Create confirm to ask user if they want lowercase letters and set to a variable

// TODO: Create confirm to ask user if they want capital numbers and set to a variable

// TODO: Create confirm to ask user if they want capital special characters and set to a variable

// TODO: Create prompt to ask user if how many char they like they pass to be (at least 8 characters and no more than 128) and set to variable
var passLength = prompt("How long would you like your password to be? (between 8-128 characters)");

// TODO: create a conditional to make sure the user has chosen at least one type of character

// TODO: create an array of CAP letters, lower letters, nums, and special char

// TODO: create an empty array to hold user requested characters

// TODO: Create multiple if statements that checks if user said yes or no to different confirms that we asked them, and based on their response push those specific characters to our empty array

// TODO: Create a var to hold the final results
var finalPass;

// TODO: Create for loop to loop over my final array, it should run based on the results of the prompt when we asked user how many characters they would like their password to be. Choose randomly from final array that holds all the char that the user wanted, and save them to our finalPass var

// var randomNum = Math.floor(Math.random() * length of final array)
// inside the for loop ( finalPass = finalPass + finalArray[randomNum]) finalPass += finalArray[randomNum]

// TODO: return the finalPass from this function - outside for loop at the end of the function

for (var i = 0; i < passLength; i++) {
  Math.floor(Math.random() * length.finalPass
  
}

  
}

var specialCharQ = confirm("Would you like special chars in your password?")
var myFinalArrayOfChar = ""
var specialC = "@#$%^&**("

if(specialCharQ === true){
  // push all the special chars in the empty array
  myFinalArrayOfChar = myFinalArrayOfChar+specialC
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
