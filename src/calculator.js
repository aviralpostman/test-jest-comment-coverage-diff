class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    // Covered change: exercised by a test, so incremental coverage stays high.
    square(n) {
        return n * n;
    }
}

module.exports = Calculator; 