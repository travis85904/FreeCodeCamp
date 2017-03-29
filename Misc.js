//Get sum of array
var array = [4, 5, 6, 7, 8];
var singleVal = 0;
singleVal = array.reduce(function (previousVal, currentVal) {
    return previousVal + currentVal;
}, 0);


//Return all values less than 6
var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray.filter(function(val){return val < 6;});


//Title case a sentence
function titleCase(str) {
    var strArray = str.toLowerCase().split(" ");
    for(var i = 0; i < strArray.length; i++){
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
    }
    str = strArray.join(" ");
    return str;
}

document.write(titleCase("I'm a little tea pot"));


//Largest of four
function largestOfFour(arr) {
    var largest = [0, 0, 0, 0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest[i]) {
                largest[i] = arr[i][j];
            }
        }
    }
    return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//Check string ending
function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
}

document.write(confirmEnding("Bastian", "n"));


