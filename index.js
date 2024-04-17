#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const currency = {
    USD: 1, //Base Currency
    EUR: 0.94,
    INR: 83.42,
    KRW: 1382.66,
    IRR: 42000,
    CAD: 1.38,
    TRY: 32.42,
    CNY: 7.24,
    SAR: 3.75,
    PKR: 277.90
};
let sourceCurrency = await inquirer.prompt([
    {
        name: 'input',
        type: 'list',
        message: (chalk.green('Enter From Currency: ')),
        choices: [
            "USD",
            "EUR",
            "INR",
            "KRW",
            "IRR",
            "CAD",
            "TRY",
            "CNY",
            "SAR",
            "PKR"
        ]
    },
    {
        name: 'output',
        type: 'list',
        message: (chalk.white('Enter To Currency: ')),
        choices: [
            "USD",
            "EUR",
            "INR",
            "KRW",
            "IRR",
            "CAD",
            "TRY",
            "CNY",
            "SAR",
            "PKR"
        ]
    },
    {
        name: 'amount',
        type: 'number',
        message: (chalk.black('Enter Your Amount:'))
    }
]);
let fromRate = currency[sourceCurrency.input];
let toRate = currency[sourceCurrency.output];
let amount = sourceCurrency.amount;
let convertedAmount = (amount / fromRate) * toRate;
console.log(chalk.blue(`Converted Amount: ${convertedAmount.toFixed(2)}`));
