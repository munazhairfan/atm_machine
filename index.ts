#! /usr/bin/env node
import inquirer from "inquirer";
let mypin = 2468;
let mybalance = 10000;
let pinAnswer = await inquirer.prompt([{
    name : "pin",
type : "number",
message : "Enter your pin number"
}]);
if (pinAnswer.pin===mypin){console.log("correct pin code!!");

let operationAnswer = await inquirer.prompt([{
    name : "operation",
    type : "list",
    message: "please select option",
    choices: ["withdraw", "check balance"],
}])
if (operationAnswer.operation === "withdraw"){let amountAnswer = await inquirer.prompt([{
    name : "amount",
    type : "number",
    message : "enter your amount",
}])
mybalance-= amountAnswer.amount;
console.log("Your remaining balance is "+ mybalance)}
else if (operationAnswer.operation==="check balance"){console.log("Your balance is "+ mybalance)}}
else {console.log("incorrect pin code!!")};