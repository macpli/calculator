console.log('hello world!')
let num1, num2, operator;
operator = '+';
num1 = 16;
num2 = 4;

const Add = function(num1, num2){
    let result = num1 + num2;
    console.log(result);
}

const Subtract = function(num1, num2){
    let result = num1 - num2;
    console.log(result);
}

const Multiply = function(num1, num2){
    let result = num1 * num2;
    console.log(result);
}

const Divide = function(num1, num2){
    let result = num1 / num2;
    console.log(result);
}

const Operate = function(num1, num2, operator) {
    if(operator == '+'){
        Add(num1, num2);
    } else if (operator == '-'){
        Subtract(num1, num2);
    } else if (operator == '*'){
        Multiply(num1, num2);
    } else if (operator == '/'){
        Divide(num1, num2);
    }
}

Operate(num1, num2, operator);