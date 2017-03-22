function factorialize(num) {
    var factorialize = 1;
    var array = new Array;
    for (var i = 1; i <= num; i++) {
        array.push(i);
    }
    for (var i = 0; i < num - 1; i++) {
        factorialize += array[i] * factorialize;
    }
    return factorialize;
}

document.writeln(factorialize(5));
