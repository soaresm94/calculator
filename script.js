let displayValue = "0";

const buttonsDiv = document.querySelector("#buttons");
const display = document.querySelector("#display");

display.textContent = displayValue;



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

let firstNumber = "0";

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
buttonDiv1.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "7";
    displayValue = display.textContent;
});


const buttonDiv2 = document.querySelector(".class2");
buttonDiv2.textContent = "8";
buttonDiv2.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "8";
    displayValue = display.textContent;
});


const buttonDiv3 = document.querySelector(".class3");
buttonDiv3.textContent = "9";
buttonDiv3.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "9";
    displayValue = display.textContent;
});


const buttonDiv4 = document.querySelector(".class4");
buttonDiv4.textContent = "+";
buttonDiv4.addEventListener("click",()=>{
    if((displayValue !== "0")){
        firstNumber = Number(displayValue);
        displayValue = "0";
        operator = "+"
    }else{
        firstNumber = 0;
        secondNumber = Number(displayValue);
        displayValue = "0";
        operator = "+";
    }});

const buttonDiv5 = document.querySelector(".class5");
buttonDiv5.textContent = "4";
buttonDiv5.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "4";
    displayValue = display.textContent;
});


const buttonDiv6 = document.querySelector(".class6");
buttonDiv6.textContent = "5";
buttonDiv6.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "5";
    displayValue = display.textContent;
});


const buttonDiv7 = document.querySelector(".class7");
buttonDiv7.textContent = "6";
buttonDiv7.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "6";
    displayValue = display.textContent;
});


const buttonDiv8 = document.querySelector(".class8");
buttonDiv8.textContent = "-";
buttonDiv8.addEventListener("click",()=>{
    if(displayValue !== "0"){
        firstNumber = Number(displayValue);
        displayValue = "0";
        operator = "-"
    }else{
        firstNumber = 0;
        secondNumber = Number(displayValue);
        displayValue = "0";
        operator = "-";
    }});

const buttonDiv9 = document.querySelector(".class9");
buttonDiv9.textContent = "1";
buttonDiv9.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "1";
    displayValue = display.textContent;
});

const buttonDiv10 = document.querySelector(".class10");
buttonDiv10.textContent = "2";
buttonDiv10.addEventListener("click",()=>{
    if(displayValue === "0"){
        display.textContent = ""
    };
    display.textContent += "2";
    displayValue = display.textContent;
});


const buttonDiv11 = document.querySelector(".class11");;
buttonDiv11.textContent = "3";
buttonDiv11.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "3";
    displayValue = display.textContent;
});


const buttonDiv12 = document.querySelector(".class12");
buttonDiv12.textContent = "X";
buttonDiv12.addEventListener("click",()=>{
    if(displayValue !== "0"){
        firstNumber = Number(displayValue);
        displayValue = "0";
        operator = "*"
    }else{
        firstNumber = 0;
        secondNumber = Number(displayValue);
        displayValue = "0";
        operator = "*";
    }});

const buttonDiv13 = document.querySelector(".class13");
buttonDiv13.textContent = "C";
buttonDiv13.addEventListener("click",()=>{
    if(displayValue !== "0"){
        displayValue = "0";
        display.textContent = displayValue
       
    }});

const buttonDiv14 = document.querySelector(".class14");
buttonDiv14.textContent = "0";
buttonDiv14.addEventListener("click",()=>{
    if((displayValue === "0")){
        display.textContent = ""
    };
    display.textContent += "0";
    displayValue = display.textContent;
});


const buttonDiv15 = document.querySelector(".class15");
buttonDiv15.textContent = "=";
buttonDiv15.addEventListener("click",()=>{
        secondNumber = Number(displayValue);
        displayValue = operate(firstNumber,operator,secondNumber);
        display.textContent = displayValue;
    
});  

const buttonDiv16 = document.querySelector(".class16");
buttonDiv16.textContent = "/";
buttonDiv16.addEventListener("click",()=>{
    if(displayValue !== "0"){
        firstNumber = Number(displayValue);
        displayValue = "0";
        operator = "/"
    }else{
        firstNumber = 0;
        secondNumber = Number(displayValue);
        displayValue = "0";
        operator = "/";
    }});



