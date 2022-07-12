// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// special, alphabet, and number characters arrays
var specialChar = [' ','!','\"','#','$','%','&','\'','(',')','*','+',
                  ',','-','.','/',':',';','<','=','>','?','@','[','\\',
                  ']','^','_','`','{','|','}','~'];

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                'o','p','q','r','s','t','u','v','w','x','y','z'];

var numbers = ['0','1','2','3','4','5','6','7','8','9'];

// Write password to the #password input
function writePassword() {
  // getting length of password from user
  var passLength = 0;
  while(passLength < 8 || passLength > 120){
    passLength = prompt("What is the length you want for your password? (8-120 characters)");
  }

  // creating booleans for the criterias and keeps asking for criterias until at least 1 is selected
  var all = false;
  while(!all){
    var lower = confirm("Include LOWERCASE characters in the password?");
    var upper = confirm("Include UPPERCASE characters in the password?");
    var numeric = confirm("Include NUMERIC characters in the password?");
    var special = confirm("Include SPECIAL characters in the password?");
    all = lower || upper || numeric || special;
    if(all === false){
      alert("PLEASE ENTER AT LEAST 1 CRITERIA!");
    }
  }

  // creates a password until it meets all of the criterias
  var checked = false;
  while(!checked){
    var password = generatePassword(lower, upper, numeric, special);
    var checked = checkPass();
  }

  // putting text value to be the generated password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // generatePassword function
 function generatePassword(low, upp, num, spe) {
  var pass = '';
  
  // makes password have randomly placed characters
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

// checks the password to make sure it meets all criterias
function checkPass(){
  var lowIn = true;
  if(lower){
    for(var x = 0; x < alphabet.length; x++){
      if(password.includes(alphabet[x])){
        lowIn = true;
        break;
      } else {
        lowIn = false;
      }
    }
  }
  var uppIn = true;
  if(upper){
    for(var x = 0; x < alphabet.length; x++){
      if(password.includes(alphabet[x].toUpperCase())){
        uppIn = true;
        break;
      } else {
        uppIn = false;
      }
    }
  }
  var numIn = true;
  if(numeric){
    for(var x = 0; x < numbers.length; x++){
      if(password.includes(numbers[x])){
        numIn = true;
        break;
      } else {
        numIn = false;
      }
    }
  }
  var speIn = true;
  if(special){
    for(var x = 0; x < specialChar.length; x++){
      if(password.includes(specialChar[x])){
        speIn = true;
        break;
      } else {
        speIn = false;
      }
    }
  }
  return lowIn && uppIn && numIn && speIn;

}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
