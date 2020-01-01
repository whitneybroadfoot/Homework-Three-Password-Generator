//password variable options 

var lowerCase = ["a", "b", "c", "d", "e"];
var upperCase = ["A", "B", "C", "D", "E"];
var numbers = ["1", "2", "3", "4", "5",];
var specialCharacters = ["&", "$", "@", "%", "!"];

//on click event for the password button to generate alerts
document.getElementById("generate").onclick = function(){
    passwordQuestions()
  }

//alerts that will prompt the user to stay within parameters 
function passwordQuestions() {    
    var passwordLength = prompt("How long does your password need to be?");
    console.log(passwordLength);

    if ((passwordLength > 128) || (passwordLength < 8) || isNaN(passwordLength)) { 
        alert("Password must be between 8 - 128");
        return;
    } else {
        var passOptions = []

        var specialChar = confirm("Click OK to include special characters");
            if(specialChar){
                passOptions = passOptions.concat(specialCharacters)
            }
            console.log(passOptions);

        var upperCaseLetters = confirm("Click OK to include upper case letters");
            if(upperCaseLetters){
                passOptions = passOptions.concat(upperCase)
            }
            console.log(passOptions);

        var lowerCaseLetters = confirm("Click OK to include lower case letters");
            if(lowerCaseLetters){
                passOptions = passOptions.concat(lowerCase)
            }
            console.log(passOptions);
        

        var numberPass = confirm("Click OK to include numbers");
            if(numberPass){
                passOptions = passOptions.concat(numbers)
            }
            console.log(passOptions);    
    } 
}

//create for loop to choose password
// for (var = 0; i<= )