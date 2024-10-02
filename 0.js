function pow(x, n) {
    var result = 1;

    for (var i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

x = prompt("x?", '')
n = prompt("n?", '')

if (n < 0) {
    alert('Степінь ' + n + 'не підтримується, введіть ціле значення степеня, більшуза 0');
} else {
    alert(pow(x, n))
}