const removeFromArray = function(array,...values) {
    let arrayEmpty =  [];
    
    for(let i = array.length-1; i>=0;i--){
        if(values.includes(array[i])){
            array.splice(i,1);
        }


    }

   
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
