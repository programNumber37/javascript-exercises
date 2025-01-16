const findTheOldest = function(array) {
    
    
    const sortedByAge = array.sort((a,b) => ((b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth)-((a.yearOfDeath || new Date().getFullYear())-a.yearOfBirth));
    return sortedByAge[0];



};

// Do not edit below this line
module.exports = findTheOldest;
