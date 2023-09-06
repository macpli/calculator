console.log('hello world!')

//let numbersContainer = document.querySelector('.numbers');
let display = document.querySelector('.display');
display.textContent ='';
let row1 = document.querySelector('.row-1');
let row2 = document.querySelector('.row-2');
let row3 = document.querySelector('.row-3');

let num1, num2, currNum, operator;
currNum = '';
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

const generateCalcNums = function() {
    for(let i = 0; i < 3; i++){
        let idNumber = String(7 + i);
        let btn = document.createElement('button');
        btn.textContent = idNumber;
        btn.setAttribute('id', idNumber);
        btn.addEventListener('click', function() {
            currNum = updateCurrentNumber(currNum, idNumber);
        });
        row1.append(btn);
    }
    for(let i = 0; i < 3; i++){
        let idNumber = 4 + i;
        let btn = document.createElement('button');
        btn.textContent = 4 + i;
        btn.setAttribute('id', 4+i);
        btn.addEventListener('click', function() {
            currNum = updateCurrentNumber(currNum, idNumber);
        });
        row2.append(btn);
    }
    for(let i = 0; i < 3; i++){
        let idNumber = 1 + i;
        let btn = document.createElement('button');
        btn.textContent = 1 + i;
        btn.setAttribute('id', 1+i);
        btn.addEventListener('click', function() {
            currNum = updateCurrentNumber(currNum, idNumber);
        });
        row3.append(btn);
    }
}

const updateCurrentNumber = function(currNum, num){
    console.log('entry currNum: ' + currNum);
    currNum = String(currNum) + String(num);
    console.log('new currNum: ' + currNum)
    display.textContent = currNum;
    return currNum;
}

generateCalcNums();
Operate(num1, num2, operator);