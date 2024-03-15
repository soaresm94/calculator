const buttonsDiv = document.querySelector("#buttons");

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

// let firstNumber
// let secondNumber;
// let operator;

function operate(firstNumber,operator,secondNumber){
    if(operator === "+"){
        return add(firstNumber,secondNumber);
    }if(operator === "-"){
        return subtract(firstNumber,secondNumber);
    }if(operator === "*"){
        return multiply(firstNumber,secondNumber);
    }if(operator === "/"){
        return divide(firstNumber,secondNumber);
    };
};

for(i=1;i<=16;i++){
    const buttonDiv = document.createElement("button");
    buttonsDiv.appendChild(buttonDiv);
    buttonDiv.classList.add(`class${i}`);
    
};

const buttonDiv1 = document.querySelector(".class1");
buttonDiv1.textContent = "7";

const buttonDiv2 = document.querySelector(".class2");
buttonDiv2.textContent = "8";

const buttonDiv3 = document.querySelector(".class3");
buttonDiv3.textContent = "9";

const buttonDiv4 = document.querySelector(".class4");
buttonDiv4.textContent = "+";

const buttonDiv5 = document.querySelector(".class5");
buttonDiv5.textContent = "4";

const buttonDiv6 = document.querySelector(".class6");
buttonDiv6.textContent = "5";

const buttonDiv7 = document.querySelector(".class7");
buttonDiv7.textContent = "6";

const buttonDiv8 = document.querySelector(".class8");
buttonDiv8.textContent = "-";

const buttonDiv9 = document.querySelector(".class9");
buttonDiv9.textContent = "1";

const buttonDiv10 = document.querySelector(".class10");
buttonDiv10.textContent = "2";

const buttonDiv11 = document.querySelector(".class11");;
buttonDiv11.textContent = "3";

const buttonDiv12 = document.querySelector(".class12");
buttonDiv12.textContent = "X";

const buttonDiv13 = document.querySelector(".class13");
buttonDiv13.textContent = "C";

const buttonDiv14 = document.querySelector(".class14");
buttonDiv14.textContent = "0";

const buttonDiv15 = document.querySelector(".class15");
buttonDiv15.textContent = "=";

const buttonDiv16 = document.querySelector(".class16");
buttonDiv16.textContent = "/";








