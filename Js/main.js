// is number exist in array function

// let arr =[0,3,5,6,12,18,33,76,122,]
let existNumberInArray =(number,array)=>{
    for(let i = 0 ; i < array.length ; i++){
        if(number === array[i]){
            return true;
        }
    }
    return false;
}
let arr = [2,5,6,7,4,9]
console.log(existNumberInArray(8,arr));

// return even numbers in the array
let returnEvenNumbers = (arr) =>{
    let evenNumbers = [ ];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 && arr[i] != 0 ){
            evenNumbers+=arr[i];
            
        }
    }
    return evenNumbers;
}

console.log(returnEvenNumbers(arr));


// calculator
function sum(numberOne,numberTwo){
    return numberOne + numberTwo;
}
function substraction(numberOne,numberTwo){
    return numberOne - numberTwo;
}
function divide(numberOne,numberTwo){
    return numberOne / numberTwo;
}
function multiply(numberOne , numberTwo){
    return numberOne * numberTwo;
}
let calculator  = (firstNumber,secondNumber,operator)=>{
    if(operator === "+"){
        return sum(firstNumber,secondNumber);
    }
    else if(operator === "-"){
        return substraction(firstNumber,secondNumber);
    }
    else if(operator === "*"){
        return multiply(firstNumber,secondNumber);
    }
    else if(operator ==="/"){
        return divide(firstNumber,secondNumber);
    }
    else 
    return false;
}
console.log(calculator(25,4,"+"));

//factorial
function factorial(number){
    if(number === 0 || number === 1){
        return 1;
    }
    
    for(let i = number - 1; i > 0; i--){
       number = number * i;
    }
    return number;
}
console.log(factorial(1));


