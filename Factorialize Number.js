function factorialize(num) {
    var factorialize = 1;
    var array = [];
    for (var i = 1; i <= num; i++) {
        array.push(i);
    }
    for (var j = 0; j < num - 1; j++) {
        factorialize += array[i] * factorialize;
    }
    return factorialize;
}

document.writeln(factorialize(5));
