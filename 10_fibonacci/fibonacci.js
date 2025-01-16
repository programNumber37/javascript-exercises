const fibonacci = function(index) {
    let last = 1;
    let secondLast = 1;
    let fibun = 0;

    if(index<0){
        return "OOPS";
    }
    if (index == 0){
        return 0;
    }
    if(index <3){
        return 1;
    }

    for(let i = 3;i<=Number(index);i++){
        fibun = last+secondLast;
        secondLast = last;
        last = fibun;
    }

    return fibun;
};

// Do not edit below this line
module.exports = fibonacci;
