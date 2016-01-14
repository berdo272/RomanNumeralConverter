function getUserInput(Message){
    var userData;
    userData = window.prompt(Message);
    return userData;
}

function toRoman(userNumber) {
    var romanOutput; 
    var decimals = [];
    var roman = [];
        romanOutput = '';
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (userNumber >= decimals[i]) {
            romanOutput += roman[i];
            userNumber -= decimals[i];
        }
    }
    return romanOutput;
}

function Main(){

var romanOutput;
var userNumber;

userNumber = getUserInput("please enter a number");
romanOutput = toRoman(userNumber);

console.log (romanOutput);
}

Main();