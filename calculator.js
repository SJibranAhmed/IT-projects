import inquirer from "inquirer";
let userGetValue = await inquirer.prompt([{
        type: 'input',
        name: 'val1',
        message: 'value of first expression',
    }, {
        type: 'input',
        name: 'comperisonOperator',
        message: 'which operation do you want to perform??( + , - , * , / , ** , % )',
    }, {
        type: 'input',
        name: 'val2',
        message: 'value of second expression',
    }
]);
let exp1 = Number(userGetValue.val1);
let exp2 = Number(userGetValue.val2);
if (isNaN(exp1) || isNaN(exp2)) {
    console.log('You perform some mistakes');
}
else {
    function calculator(sign) {
        if (sign === '+') {
            return `${exp1} ${sign} ${exp2} = ${exp1 + exp2}`;
        }
        else if (sign === '-') {
            return `${exp1} ${sign} ${exp2} = ${exp1 - exp2}`;
        }
        else if (sign === '*') {
            return `${exp1} ${sign} ${exp2} = ${exp1 * exp2}`;
        }
        else if (sign === '/') {
            return `${exp1} ${sign} ${exp2} = ${exp1 / exp2}`;
        }
        else if (sign === '%') {
            return `${exp1} ${sign} ${exp2} = ${exp1 % exp2}`;
        }
        else if (sign === '**') {
            return `${exp1} ${sign} ${exp2} = ${exp1 ** exp2}`;
        }
        else {
            console.log('error');
        }
    }
    console.log(calculator(userGetValue.comperisonOperator));
}
