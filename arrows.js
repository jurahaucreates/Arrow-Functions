const myConcat = (arr1, arr2) => arr1.concat(arr2);


console.log(myConcat([1, 2], [3, 4, 5]));

vs

var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
