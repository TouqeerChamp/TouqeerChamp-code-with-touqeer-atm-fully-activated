#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let userName: string = "Mohammad_Touqeer";
let myBalance: number = 100000;
let myPin: number = 1111;

// print Welcome Message
console.log("Welcome To ATM Matchine");

console.log(chalk.redBright.bold('======================================='));


// Enter your PIN CODE
let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        message:"Please Enter Your 4 Digit Pin Code?",
        type:"number", 
    }
])

console.log(chalk.redBright.bold('======================================='));

if (pinAnswer.pin === myPin){
    console.log("Hello" , userName);

    // Enter to Select your Account type
    let accountType = await inquirer.prompt([
        {
            name:"operationAccount",
            message:"Please Select Account Type",
            type:"list",
            choices:["Saving Account","Current Account"]
        }
    ])

    // ====================   IF Account is Current Please Choose   ================================= // 

    if (accountType.operationAccount === "Current Account") 

    {
        let optionAns = await inquirer.prompt([
            {
                name:"account",
                message:"Please Select Account Type",
                type:"list",
                choices:["Withdraw","fastCash","Check Balance"]
            }
        ])
        
        // Withdrawl 
        if (optionAns.account === "Withdraw"){
            
            let cash = await inquirer.prompt([
                {
                name:"cashAns",
                message:"Please Input Your Cash",
                type:"input",
                }
            ])

            console.log(chalk.redBright.bold('======================================='));

        if (cash.cashAns > myBalance){
            console.log("You Have Insufficiant Balance!");
        }
        else {
            myBalance -= cash.cashAns;
            console.log(`${cash.cashAns} Withdraw Successfully!`);
            console.log(`Your Remaining Balance is : ${myBalance}`);
            console.log(`Thaks you For Using TOUQEER ATM`);
        }
        }
        console.log(chalk.redBright.bold('======================================='));

        // Check Balance
        if (optionAns.account === "Check Balance")
        {
            console.log(userName , `Your Current Account Balance is ${myBalance}`)
        }

        console.log(chalk.redBright.bold('======================================='));

        // Please Select Fast Cash
        if(optionAns.account === "fastCash"){
         
            let fast = await inquirer.prompt([
                {
                name:"fastAns",
                message:"Please Select Payment",
                type:"list",
                choices:["500","1000","2000","5000","10000","20000"]
                }
            ])

            console.log(chalk.redBright.bold('======================================='));

            if (fast.fastAns > myBalance){
                console.log("You Have Insufficiant Balance!")
            }
            else {
                myBalance -= fast.fastAns;
                console.log(`${fast.fastAns} Withdraw Successfully!`);
                console.log(`Your Remaining Balance is : ${myBalance}`);
            }
        }
    }

// ====================   IF Account is Saving Please Choose   ================================= //

    if (accountType.operationAccount === "Saving Account") {

        {
            let optionAns = await inquirer.prompt([
                {
                    name:"account",
                    message:"Please Select Account Type",
                    type:"list",
                    choices:["Withdraw","fastCash","Check Balance"]
                }
            ])
            
            // Withdrawl 
            if (optionAns.account === "Withdraw"){
                
                let cash = await inquirer.prompt([
                    {
                    name:"cashAns",
                    message:"Please Input Your Cash",
                    type:"input",
                    }
                ])
    
                console.log(chalk.redBright.bold('======================================='));
    
            if (cash.cashAns > myBalance){
                console.log("You Have Insufficiant Balance!");
            }
            else {
                myBalance -= cash.cashAns;
                console.log(`${cash.cashAns} Withdraw Successfully!`);
                console.log(`Your Remaining Balance is : ${myBalance}`);
                console.log(`Thaks you For Using TOUQEER ATM`);
            }
            }
            console.log(chalk.redBright.bold('======================================='));
            
            // Check Balance
            if (optionAns.account === "Check Balance")
            {
                console.log(userName , `Your Current Account Balance is ${myBalance}`)
            }
    
            console.log(chalk.redBright.bold('======================================='));
    
            // Please Select Fast Cash
            if(optionAns.account === "fastCash"){
             
                let fast = await inquirer.prompt([
                    {
                    name:"fastAns",
                    message:"Please Select Payment",
                    type:"list",
                    choices:["500","1000","2000","5000","10000","20000"]
                    }
                ])
    
                console.log(chalk.redBright.bold('======================================='));
    
                if (fast.fastAns > myBalance){
                    console.log("You Have Insufficiant Balance!")
                }
                else {
                    myBalance -= fast.fastAns;
                    console.log(`${fast.fastAns} Withdraw Successfully!`);
                    console.log(`Your Remaining Balance is : ${myBalance}`);
                }
            }
        }
    }

}

// If PIN CODE is INCORRECT

else {
    console.log("Invalid Pincode!");
}