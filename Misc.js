//get sum of array
var array = [4, 5, 6, 7, 8];
var singleVal = 0;
singleVal = array.reduce(function (previousVal, currentVal) {
    return previousVal + currentVal;
}, 0);


//return all values less than 6
var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray.filter(function(val){return val < 6;});
