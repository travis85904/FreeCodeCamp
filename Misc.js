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