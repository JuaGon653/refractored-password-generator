// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialChar = [' ','!','\"','#','$','%','&','\'','(',')','*','+',
                  ',','-','.','/',':',';','<','=','>','?','@','[','\\',
                  ']','^','_','`','{','|','}','~'];

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                'o','p','q','r','s','t','u','v','w','x','y','z'];

var numbers = ['0','1','2','3','4','5','6','7','8','9'];

// Write password to the #password input
function writePassword() {
  // getting length of password
  var passLength = 0;
  while(passLength < 8 || passLength > 120){
    passLength = prompt("What is the length you want for your password? (8-120 characters)");
  }

  // creating booleans for the criterias
  var lower = confirm("Include LOWERCASE characters in the password?");
  var upper = confirm("Include UPPERCASE characters in the password?");
  var numeric = confirm("Include NUMERIC characters in the password?");
  var special = confirm("Include SPECIAL characters in the password?");

  var checked = false;
  while(!checked){
    var password = generatePassword(lower, upper, numeric, special);
    var checked = checkPass();
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // generatePassword function
 function generatePassword(low, upp, num, spe) {
  var pass = '';
  
  for(var i = 0; i < passLength; i++){
    var indicator = Math.floor(Math.random() * 4);
    if(indicator == 0 && low){
      pass += alphabet[Math.floor(Math.random() * alphabet.length)]; 
    } else if (indicator == 1 && upp){
      pass += alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    } else if (indicator == 2 && num){
      pass += numbers[Math.floor(Math.random() * numbers.length)];
    } else if (indicator == 3 && spe){
      pass += specialChar[Math.floor(Math.random() * specialChar.length)];
    } else {
      i--;
    }
  }
  return pass;
}

function checkPass(){
  var allIn = true;
  if(lower){
    for(var x = 0; x < alphabet.length; x++){
      if(password.includes(alphabet[x])){
        allIn = true;
        break;
      } else {
        allIn = false;
      }
    }
  }
  if(upper){
    for(var x = 0; x < alphabet.length; x++){
      if(password.includes(alphabet[x].toUpperCase())){
        allIn = true;
        break;
      } else {
        allIn = false;
      }
    }
  }
  if(numeric){
    for(var x = 0; x < numbers.length; x++){
      if(password.includes(numbers[x])){
        allIn = true;
        break;
      } else {
        allIn = false;
      }
    }
  }
  if(special){
    for(var x = 0; x < alphabet.length; x++){
      if(password.includes(alphabet[x])){
        allIn = true;
        break;
      } else {
        allIn = false;
      }
    }
  }
  return allIn;

}

}

// Add event listener to generate button
generateBtn.onclick = function() {
  writePassword();
}
