let num1, num2, currNum, operator;

let displayNumber;
let display = document.querySelector(".display");
let row1 = document.querySelector(".row-1");
let row2 = document.querySelector(".row-2");
let row3 = document.querySelector(".row-3");

currNum = "";
display.textContent = "";

const opAdd = document
  .querySelector("#add")
  .addEventListener("click", function () {
    operator = "+";
    getOperator(operator);
  });
const opSub = document
  .querySelector("#sub")
  .addEventListener("click", function () {
    operator = "-";
    getOperator(operator);
  });
const opMul = document
  .querySelector("#mul")
  .addEventListener("click", function () {
    operator = "*";
    getOperator(operator);
  });
const opDiv = document
  .querySelector("#div")
  .addEventListener("click", function () {
    operator = "/";
    getOperator(operator);
  });

const opEqu = document
  .querySelector("#equ")
  .addEventListener("click", function () {
    num2 = Number(currNum);
    if (num1 == undefined) {
      num1 = 0;
    }

    Operate(num1, num2, operator);
  });

const Add = function (num1, num2) {
  currNum = Number(num1) + Number(num2);
  currNum = updateCurrentNumber(currNum, "");
  updateDisplay(currNum);
  return currNum;
};

const Subtract = function (num1, num2) {
  currNum = Number(num1) - Number(num2);
  currNum = updateCurrentNumber(currNum, "");
  updateDisplay(currNum);
  return currNum;
};

const Multiply = function (num1, num2) {
  currNum = Number(num1) * Number(num2);
  currNum = updateCurrentNumber(currNum, "");
  updateDisplay(currNum);
  return currNum;
};

const Divide = function (num1, num2) {
  currNum = Number(num1) / Number(num2);
  currNum = updateCurrentNumber(currNum, "");
  updateDisplay(currNum);
  return currNum;
};

const getOperator = function (operator) {
  if(currNum == '')
  {
    num1 = 0;
  } else {
    num1 = currNum;
  }
    displayNumber = num1 + operator;
    updateDisplay(displayNumber);
    currNum = "";
};

const Operate = function (num1, num2, operator) {
  if (operator == "+") {
    Add(num1, num2);
  } else if (operator == "-") {
    Subtract(num1, num2);
  } else if (operator == "*") {
    Multiply(num1, num2);
  } else if (operator == "/") {
    Divide(num1, num2);
  }
};

const Reset = function () {
  currNum = "";
  num1 = "";
  num2 = "";
  operator = "";
  displayNumber = "";
  updateDisplay(displayNumber);
};

const generateCalcNums = function () {
  // 7 - 9 Row
  for (let i = 3; i > 0; i--) {
    let idNumber = 6 + i;
    let btn = document.createElement("button");
    btn.textContent = idNumber;
    btn.setAttribute("id", idNumber);
    btn.addEventListener("click", function () {
      onClickNum(idNumber);
    });
    row1.prepend(btn);
  }

  // 4 - 6 Row
  for (let i = 3; i > 0; i--) {
    let idNumber = 3 + i;
    let btn = document.createElement("button");
    btn.textContent = idNumber;
    btn.setAttribute("id", idNumber);
    btn.addEventListener("click", function () {
      onClickNum(idNumber);
    });
    row2.prepend(btn);
  }

  // 1 - 3 Row
  for (let i = 3; i > 0; i--) {
    let idNumber = 0 + i;
    let btn = document.createElement("button");
    btn.textContent = idNumber;
    btn.setAttribute("id", idNumber);
    btn.addEventListener("click", function () {
      onClickNum(idNumber);
    });
    row3.prepend(btn);
  }

  // Row 0
  let row0 = document.querySelector(".row-0");
  let btnP = document.createElement("button");
  let btnY = document.createElement("button");
  btnP.textContent = "%";
  btnY.textContent = "Y";
  row0.prepend(btnP);
  row0.prepend(btnY);

  // Clear button
  let btnC = document.createElement("button");
  btnC.addEventListener("click", Reset);
  btnC.textContent = "C";
  btnC.setAttribute("id", "clear");
  row0.prepend(btnC);

  // row 4
  let row4 = document.querySelector(".row-4");

  // 0 number
  let btnZero = document.createElement("button");
  btnZero.addEventListener("click", function () {
    onClickNum(0);
  });
  let btnE = document.querySelector("#ex");
  btnZero.textContent = "0";
  btnZero.setAttribute("id", "zero");
  row4.insertBefore(btnZero, btnE);
};

const onClickNum = function (idNumber) {
  currNum = updateCurrentNumber(currNum, idNumber);
  if (displayNumber == undefined) {
    displayNumber = "";
  }

  if(num1 == 0 && operator != undefined){
    Operate(num1, currNum, operator);
  } else if (num1 != undefined && currNum != undefined && operator != undefined) {
    Operate(num1, currNum, operator);
  } else if (num1 == undefined) {
    displayNumber = String(currNum);
    updateDisplay(displayNumber);
  } else if (num1 != undefined) {
    displayNumber = String(num1) + operator + String(currNum);
    updateDisplay(displayNumber);
  } 
};

const updateCurrentNumber = function (currNum, num) {
  currNum = String(currNum) + String(num);
  return currNum;
};

const updateDisplay = function (displayNumer) {
  display.textContent = String(displayNumer);
};

generateCalcNums();
