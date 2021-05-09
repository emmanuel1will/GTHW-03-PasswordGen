// Assignment Code
var generateBtn = document.querySelector("#generate");
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "01234566789";
const symbols = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // add logic here (generate random string)
  let characters = alpha;
  characters += numbers;
  characters += symbols;
  passwordText.value = generatePassword(length.value, characters);

  let generatePassword = (length,characters) => {
    let passwordText = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
