const sumAll = function(one,two) {
    let sum = 0;
    let g = 0;

    if(one>two){
        g = one;
        one = two;
        two = g;

    }

    if( two < 0 || one < 0){
        return "ERROR"
    }

    if(!Number.isInteger(one) || !Number.isInteger(two)){
        return "ERROR"
    }

    for(let i = one;i<=two;i++){
        sum +=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
