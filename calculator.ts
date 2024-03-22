// Sheikh Jibran Ahmed   2024 / march / 22    

import inquirer from "inquirer";


// this is simple calculator for common calculation

//inquirer use to get user expression Or value
let userGetValue = await inquirer.prompt([{
    type:'input',
    name:'val1',
    message:'value of first expression',
},{
    type:'input',
    name:'comperisonOperator',
    message:'which operation do you want to perform??( + , - , * , / , ** , % )',
},{
    type:'input',
    name:'val2',
    message:'value of second expression',
}
])

// string value convert into number
let exp1: number = Number(userGetValue.val1)
let exp2: number = Number(userGetValue.val2)

//if else condition for simple calculator 
if (isNaN(exp1) || isNaN(exp2)) {
    console.log('You perform some mistakes')
} else {
    function calculator(sign: any): any {
        if (sign === '+') {
            return `${exp1} ${sign} ${exp2} = ${exp1 + exp2}`
        } else if (sign === '-') {
            return `${exp1} ${sign} ${exp2} = ${exp1 - exp2}`
        } else if (sign === '*') {
            return `${exp1} ${sign} ${exp2} = ${exp1 * exp2}`
        } else if (sign === '/') {
            return `${exp1} ${sign} ${exp2} = ${exp1 / exp2}`
        } else if (sign === '%') {
            return `${exp1} ${sign} ${exp2} = ${exp1 % exp2}`
        } else if (sign === '**') {
            return `${exp1} ${sign} ${exp2} = ${exp1 ** exp2}`
        } else {
            console.log('error')
        }

    }

//print calculation result 
    console.log(calculator(userGetValue.comperisonOperator))}
