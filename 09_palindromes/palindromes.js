const palindromes = function (word) {
    const wordReal = word
    .toLowerCase()
    .split('');

    const wordReverse = wordReal
    .reverse();


    wordReal.join("");
    wordReverse.join("");

    return wordReal === wordReverse;

    
    
};

palindromes("hello");

// Do not edit below this line
module.exports = palindromes;
