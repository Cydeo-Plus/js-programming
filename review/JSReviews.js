
let variable;

console.log(typeof variable);

variable = "Hello, World!";

console.log(typeof variable);

variable = 100;

console.log(typeof variable);

variable = true;

console.log(typeof variable);

const PI = 3.14;

console.log("----------------------------");

let actualElementText =  "Contact Button";

let expectedElementText = "Contact Button";

console.log(actualElementText === expectedElementText);

let actualResult = "300.5";
let expectedResult = 300.5;

console.log(actualResult == expectedResult);

console.log("----------------------------");

let environment = "test";

if (environment === "test") {
    console.log("Running in test environment");
}else if (environment === "stage") {
    console.log("Running in stage environment");
}else if(environment === "dev") {
    console.log("Running in development environment");
}else if(environment === "uat") {
    console.log("Running in UAT environment");
}else{
    throw new Error("Invalid environment");
}

console.log("----------------------------");

switch (environment) {
    case "test":
        console.log("Running in test environment");
        break;
    case "stage":
        console.log("Running in stage environment");
        break;
    case "dev":
        console.log("Running in development environment");
        break;
    case "uat":
        console.log("Running in UAT environment");
        break;
    default:
        console.log("Invalid environment");
}

console.log("----------------------------");

let times = 10;

console.log("Navigate to URL");

for(let i = 0; i < times; i++){
    console.log("Click the button " + i);
}

console.log("----------------------------");

let str = 'PLAYWRIGHT';

for(let each of str){
    console.log(each);
}

/*
console.log("Click the button");
console.log("Click the button");
console.log("Click the button");
console.log("Click the button");
console.log("Click the button");
console.log("Click the button");
console.log("Click the button");
console.log("Click the button");
console.log("Click the button");
console.log("Click the button");
*/

console.log("-------------------------------");

let dropDownOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

for( let eachOption of dropDownOptions){
    console.log("Verifying: " + eachOption);
}

console.log("-------------------------------");

let checkBoxes = ["Checkbox 1", "Checkbox 2", "Checkbox 3", "Checkbox 4", "Checkbox 5"];

for(let i = checkBoxes.length - 1; i >= 0; i--){
    console.log("Checkinging: " + checkBoxes[i]);
}


console.log("-------------------------------");

let s = "98765mnbvc12345tyuio!@#$%^&*()";

let digitsOnly = s.replace(/[^0-9]/g, "");

console.log(digitsOnly); // Output: 9876512345

console.log("-------------------------------");

let actualTitle = "Cydeo School";

let expectedTitle = "CYDEO School";

console.log(actualTitle === expectedTitle);

console.log(actualTitle.toLowerCase() === expectedTitle.toLowerCase());

console.log(`Expected title is: ${expectedTitle}, but the actual title is: ${actualTitle}`);

console.log("-------------------------------------");

let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // accepts duplicates

let set = new Set(array); // does not accept duplicate

let map = {"name": "John", "age": 30, "city": "New York"};

console.log(`Array: ${array}`);

console.log(`Set: ${Array.from(set)}`);

console.log(`Map: ${JSON.stringify(map)}`);

console.log(map["name"]);

console.log("-------------------------------------");

//use for loop to iterate over the array and print each element.
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log("-------------------------------------");

/*
Create a function that can verify if string is palnidrome, and returns true if it's, otherwise return false.
do not use any ready method or functions.
*/
function isPalindrome(str){
    let reversedStr = "";

    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }

    if(str === reversedStr){
        return true;
    }else{
        return false;
    }
}

console.log("--------------------------");


let {square} = require("../day02/Utility.js")

console.log(square(100));





