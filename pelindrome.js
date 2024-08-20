// ** make sure to install "npm install prompt-sync" **

const prompt = require('prompt-sync')();

const userInput = prompt("Please enter the String :");

function Pel(str){
    
    const rev = str.split('').reverse().join('')
    if(rev.toLowerCase() === str.toLowerCase()){
        console.log("Pelindrome")
    }
    else{
        console.log("Not Pelindrome")
    }
}

Pel(userInput)