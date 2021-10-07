// is number exist in array function

let arr =[0,3,5,6,12,18,33,76,122,]

let existNumberInArray =(number)=>{
    for(let i = 0 ; i < arr.length ; i++){
        if(number === arr[i]){
            return true;
        }
    }
    return false;
}
console.log(existNumberInArray("33"));

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

let calculator  = (firstNumber,secondNumber,operator)=>{
    if(operator === "+"){
        return firstNumber + secondNumber;
    }
    else if(operator === "-"){
        return firstNumber - secondNumber;
    }
    else if(operator === "*"){
        return firstNumber * secondNumber;
    }
    else if(operator ==="/"){
        return firstNumber / secondNumber;
    }
    else 
    return false;
}
console.log(calculator(25,4,"*"));


