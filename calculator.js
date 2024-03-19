const display = document.getElementById("display");


function appendToDisplay (input) {

    display.value += input;

};



function calculate() {
    try {
    display.value = eval(display.value);
}
    catch (error) {

        display.value = "ERROR!"
    }

}


function clearDisplay() {

    display.value = '';

}




/*
const oneBut = document.getElementById("one");
oneBut.className = "one-but";


const twoBut = document.getElementById("two");
twoBut.className = "two-but";


const threeBut = document.getElementById("three");
threeBut.className = "three-but"; 

const fourBut = document.getElementById("four");
fourBut.className = "four-but"; 

const fiveBut = document.getElementById("five");
fiveBut.className = "five-but";

const sixBut = document.getElementById("six");
sixBut.className = "six-but";

const sevenBut = document.getElementById("seven");
sevenBut.className = "seven-but";

const eightBut = document.getElementById("eight");
eightBut.className = "eight-but";

const nineBut = document.getElementById("nine");
nineBut.className = "nine-but";

const zeroBut = document.getElementById("zero");
zeroBut.className = "zero-but";

const plusBut = document.getElementById("plus");
plusBut.className = "plus-but";

const minusBut = document.getElementById("minus");
minusBut.className = "minus-but";

const multiplyBut = document.getElementById("multiply");
multiplyBut.className = "multiply-but";

const divideBut = document.getElementById("divide");
divideBut.className = "divide-but";

const equalBut = document.getElementById("equal");
equalBut.className = "equal-but";


const display = document.getElementById("display");

oneBut.addEventListener('click', () => {
  //  appendToDisplay("1");
        playerSelection = 1;
        console.log(oneBut);        
})




twoBut.addEventListener('click', () => {

    playerSelection = 2;
    console.log(playerSelection);        
})

threeBut.addEventListener('click', () => {

    playerSelection = 3;
    console.log(playerSelection);        
})


fourBut.addEventListener('click', () => {

    playerSelection = 4;
    console.log(playerSelection);        
})

fiveBut.addEventListener('click', () => {

    playerSelection = 5;
    console.log(playerSelection);        
})

sixBut.addEventListener('click', () => {

    playerSelection = 6;
    console.log(playerSelection);        
})

sevenBut.addEventListener('click', () => {

    playerSelection = 7;
    console.log(playerSelection);        
})


eightBut.addEventListener('click', () => {

    playerSelection = 8;
    console.log(playerSelection);        
})


nineBut.addEventListener('click', () => {

    playerSelection = 9;
    console.log(playerSelection);        
})


zeroBut.addEventListener('click', () => {

    playerSelection = 0;
    console.log(playerSelection);        
})




plusBut.addEventListener('click', () => {

    playerSelection = "+";
    console.log(playerSelection);        
})


minusBut.addEventListener('click', () => {

    playerSelection = "-";
    console.log(playerSelection);        
})


multiplyBut.addEventListener('click', () => {

    playerSelection = "*";
    console.log(playerSelection);        
})

divideBut.addEventListener('click', () => {

    playerSelection = "/";
    console.log(playerSelection);        
})

equalBut.addEventListener('click', () => {

    playerSelection = "=";
    console.log(playerSelection);        
})

*/




/*

function add(num1, num2) {

    return operationResult = num1 + num2;

};

function substract(num1, num2) {

    return operationResult = num1 - num2;
};

function multiply(num1, num2) {

    return operationResult = num1 * num2;
};

function divide(num1, num2) {

    return operationResult = num1 / num2;
};


let operator;
let operand1;
let operand2;
let operationResult;

function operate(number1, oprtr, number2) {

    if(oprtr === '+') {

        return add(number1, number2);
    }
    else if(oprtr === '-') {

        return substract(number1, number2);
    }
    else if(oprtr === '*') {

        return multiply(number1, number2)
        
    }
    else if(oprtr === '/') {

        return divide(number1, number2);
    }
}

function displayText() {

    const displayOutput = document.createElement('div');
    const para = document.createElement('p');
    para.classList.add('paragraph');

    displayOutput.classList.add('display-para');
    const container = document.querySelector('#container');

    displayOutput.appendChild(para);
    container.appendChild(displayOutput);
}
displayText();

*/
