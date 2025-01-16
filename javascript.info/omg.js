function camelize(str){
   
   let arr = str.split('-');
   

   //if index == 0 return word, else return first letter of word capitilized plus the rest of the word
   //.map makes a new array thats why i need "array"
   let array = arr.map((word,index)=>
     index == 0 ? word : word[0].toUpperCase()+word.slice(1)
   );

   let string = array.join("");
   return string;
   

}


let stri = "-webkit-transition";
console.log(camelize(stri));



function filterRange(arr, a, b){
   let results = arr.filter(item =>
      item >= a && item <= b );
      return results;
}

let arr = [5, 2, 4, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)


