const repeatString = function(word,amount) {
    
    let wordMultiplied=""
    
    for(let i=0;i<amount;i++){
        wordMultiplied= word.concat(wordMultiplied);
    }

    return wordMultiplied;
};

// Do not edit below this line
module.exports = repeatString;


