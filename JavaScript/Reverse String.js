
function reverseString(str) {

    var pallindrome = "";

    for (var i = str.length; i >= 0; i--) {
        pallindrome += str.charAt(i);
    }
document.write("");
    return pallindrome;
}

document.write(reverseString("hello"));

