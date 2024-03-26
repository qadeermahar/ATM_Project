#! /usr/bin/env node
import inquirer from "inquirer";
let my_balance = 5000;
console.log("your current balance is" + "   " + my_balance);
let pin_code = 1234;
let atm = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "enter your pin"
    }]);
if (atm.pin === pin_code) {
    console.log("correct pin code");
    let opp_ans = await inquirer.prompt({
        name: "opperation",
        type: "list",
        message: "what you want",
        choices: ["withdraw", "check balance"],
    });
    if (opp_ans.opperation === "withdraw") {
        let amount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "enter your amount"
        });
        my_balance -= amount.amount;
        console.log(`you remaining balance is ${my_balance}`);
    }
    else if (opp_ans.opperation === "check balance") {
        console.log(my_balance);
    }
}
else {
    console.log("incorrect pin code");
}
