var lowerCase = ["a", "b", "c", "d", "e"];
var upperCase = ["A", "B", "C", "d", "e"];
var numbers = ["1", "2", "3", "4", "5",];
var specialCharacters = ["&", "$", "@", "%", "!"];

console.log(lowerCase[0]); //this outputs a in the console, good 
console.log(specialCharacters[2]); //this outputs @ in the console, good

//********************************************************************************* */


document.getElementById("generate").onclick = function(){
    alert("Some questions about your password");
  }


//alerts that will prompt the user to stay within parameters 
function passwordQuestions() {    
    var passwordLength = prompt("How long does your password need to be?");
    console.log(passwordLength);

    if ((passwordLength > 128) || (passwordLength < 8) || isNaN(passwordLength)) { 
        alert("Password must be between 8 - 128");
        return;
    } else {
        var specialChar = confirm("Click OK to include special characters");
        console.log(specialChar);

        var upperCase = confirm("Click OK to include upper case letters");
        console.log(upperCase);

        var lowerCase = confirm("Click OK to include lower case letters");
        console.log(lowerCase);

        var numberPass = confirm("Click OK to include numbers");
        console.log(numberPass);
    }      


//possible password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop0123456789!@#$%^&*()/?"

let password = "";

//create for loop to choose password
for (var= 0; i<= )