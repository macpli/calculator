let num1, num2, currNum, operator   ;

let displayNumber;
let display = document.querySelector('.display');
let row1 = document.querySelector('.row-1');
let row2 = document.querySelector('.row-2');
let row3 = document.querySelector('.row-3');

currNum = '';
display.textContent ='';

const opAdd = document.querySelector('#add').addEventListener('click', function(){
    operator = '+';
    getOperator(operator);
});
const opSub = document.querySelector('#sub').addEventListener('click', function(){
    operator = '-';
    getOperator(operator);
});
const opMul = document.querySelector('#mul').addEventListener('click', function(){
    operator = '*';
    getOperator(operator);
});
const opDiv = document.querySelector('#div').addEventListener('click', function(){
    operator = '/';
    getOperator(operator);
});

const opEqu = document.querySelector('#equ').addEventListener('click', function(){
    num2 = Number(currNum);
    if(num1 == undefined){
        num1 = 0;
    }

    Operate(num1, num2, operator);
});

const Add = function(num1, num2){
    currNum = Number(num1) + Number(num2);
    currNum = updateCurrentNumber(currNum, '');
    updateDisplay(currNum)
    return currNum;
}

const Subtract = function(num1, num2){
    currNum = Number(num1) - Number(num2);
    currNum = updateCurrentNumber(currNum, '');
    updateDisplay(currNum);
    return currNum;
}

const Multiply = function(num1, num2){
    currNum = Number(num1) * Number(num2);
    currNum = updateCurrentNumber(currNum, '');
    updateDisplay(currNum);
    return currNum;
}

const Divide = function(num1, num2){
    currNum = Number(num1) / Number(num2);
    currNum = updateCurrentNumber(currNum, '');
    updateDisplay(currNum);
    return currNum;
}

const getOperator = function(operator) {
    num1 = currNum;
    displayNumber = num1 + operator;
    updateDisplay(displayNumber);
    currNum = '';
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
            if(displayNumber == undefined){ displayNumber = '' };

            if(num1 == undefined){
                displayNumber = String(currNum);
                updateDisplay(displayNumber);
            } else if (num1 != undefined){
                displayNumber = String(num1) + operator + String(currNum);
                updateDisplay(displayNumber);
            }
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
            if(displayNumber == undefined){ displayNumber = '' };

            if(num1 == undefined){
                displayNumber = String(currNum);
                updateDisplay(displayNumber);
            } else if (num1 != undefined){
                displayNumber = String(num1) + operator + String(currNum);
                updateDisplay(displayNumber);
            }
        });
        row2.append(btn);
    }

    // TODO
    // const onClickNum = function(idNumber, currNum, num1, displayNumber){
    //     currNum = updateCurrentNumber(currNum, idNumber);

    //         if(displayNumber == undefined){ displayNumber = '' };

    //         if(num1 == undefined){
    //             displayNumber = String(currNum);
    //             updateDisplay(displayNumber);
    //         } else if (num1 != undefined){
    //             displayNumber = String(num1) + '+' + String(currNum);
    //             updateDisplay(displayNumber);
    //         }
    //     return currNum, displayNumber;
    // }

    for(let i = 0; i < 3; i++){
        let idNumber = 1 + i;
        let btn = document.createElement('button');
        btn.textContent = 1 + i;
        btn.setAttribute('id', 1+i);
        btn.addEventListener('click', function() {
            // TODO
            // onClickNum(idNumber, currNum, num1, displayNumber);
            currNum = updateCurrentNumber(currNum, idNumber);

            if(displayNumber == undefined){ displayNumber = '' };

            if(num1 == undefined){
                displayNumber = String(currNum);
                updateDisplay(displayNumber);
            } else if (num1 != undefined){
                displayNumber = String(num1) + operator + String(currNum);
                updateDisplay(displayNumber);
            }
        });
        row3.append(btn);
    }
}

const updateCurrentNumber = function(currNum, num){
    currNum = String(currNum) + String(num);
    return currNum;
}

const updateDisplay = function(displayNumer){
    display.textContent = String(displayNumer);
}

generateCalcNums();