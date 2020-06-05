const foods = [`pizza`, `burger`, `fingerChips`, `donuts`, `springRoll`];
let modifiedFood = slice(1,3);
function slice(start , end){//zero based index
//[start,end)
return foods.filter((item , index)=>index >= start && index<end);
}
console.log(modifiedFood);
modifiedFood = foods.splice(3,0,`noodles`, `icecream`);

function isEven(numberArray){
return numberArray.filter(function(items){
    return items%2==0;
});
}

const numberArray = [12,324,213,4,2,3,45,4234];
function isPrime(numberArray){
    return numberArray.filter(function(item){

        for(let i = 2 ; i <= Math.sqrt(item) ; i++ ){
            if(item%i == 0){
                return false;
            }
        }
        return true;
    });
}
console.log(JSON.stringify(isPrime(numberArray)));

function nonPrime(numberArray){
    return numberArray.filter( function(num){
        return !isPrime(numberArray).includes(num);
    });
}

console.log(JSON.stringify(nonPrime(numberArray)));

numberArray =>  numberArray.filter(items => items%2==0 );

let myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
    return myArray.map(function (number){
        return number*number;
    });
}
console.log(findSquareOfNumbers(myArray));
myArray = [2, 3, 5, 10];
function multiply(myArray){
    return myArray.reduce(function(initial,current){
        return initial * current;
    });
}
console.log(multiply(myArray));