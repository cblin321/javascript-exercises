const fibonacci = function(n) {
    n = parseFloat(n);
    if (n < 0)
        return "OOPS";
    if (n == 1)
        return 1;
    if (n == 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
