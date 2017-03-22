function pallindrome(str) {
    var pallindrome = "";
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]+/ig, "");
    for (var i = str.length; i >= 0; i--) {
        pallindrome += str.charAt(i);
    }
    document.write("<p>"+str+"</p>");
    return (pallindrome === str);
}
document.write(pallindrome("1 eye for of 1 eye."));


