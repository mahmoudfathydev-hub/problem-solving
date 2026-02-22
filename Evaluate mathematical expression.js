// Instructions
// Given a mathematical expression as a string you must return the result as a number.

// Numbers
// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

// Operators
// You need to support the following mathematical operators:

// Multiplication *
// Division / (as floating point division)
// Addition +
// Subtraction -
// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

// Parentheses
// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

// Whitespace
// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10
// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid
// Validation
// You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

// Restricted APIs
// NOTE: Both eval and Function are disabled.

const calc = function (expression) {
    // Remove whitespace
    expression = expression.replace(/\s+/g, '');

    // Tokenize the expression
    const tokens = tokenize(expression);

    // Parse and evaluate
    return evaluate(tokens);
};

function tokenize(expression) {
    const tokens = [];
    let i = 0;

    while (i < expression.length) {
        const char = expression[i];

        if (char >= '0' && char <= '9' || char === '.') {
            // Parse number
            let numStr = '';
            while (i < expression.length && (expression[i] >= '0' && expression[i] <= '9' || expression[i] === '.')) {
                numStr += expression[i];
                i++;
            }
            tokens.push(parseFloat(numStr));
        } else if (char === '+' || char === '*' || char === '/' || char === '(' || char === ')') {
            tokens.push(char);
            i++;
        } else if (char === '-') {
            // Handle unary minus
            if (i === 0 || expression[i - 1] === '+' || expression[i - 1] === '-' ||
                expression[i - 1] === '*' || expression[i - 1] === '/' || expression[i - 1] === '(') {
                tokens.push('u-'); // unary minus
            } else {
                tokens.push('-'); // binary minus
            }
            i++;
        } else {
            i++;
        }
    }

    return tokens;
}

function evaluate(tokens) {
    let index = 0;

    function parseExpression() {
        let result = parseTerm();

        while (index < tokens.length && (tokens[index] === '+' || tokens[index] === '-')) {
            const op = tokens[index++];
            const right = parseTerm();

            if (op === '+') {
                result += right;
            } else {
                result -= right;
            }
        }

        return result;
    }

    function parseTerm() {
        let result = parseFactor();

        while (index < tokens.length && (tokens[index] === '*' || tokens[index] === '/')) {
            const op = tokens[index++];
            const right = parseFactor();

            if (op === '*') {
                result *= right;
            } else {
                result /= right;
            }
        }

        return result;
    }

    function parseFactor() {
        if (tokens[index] === 'u-') {
            index++;
            return -parseFactor();
        }

        if (tokens[index] === '(') {
            index++;
            const result = parseExpression();
            index++; // skip ')'
            return result;
        }

        return tokens[index++];
    }

    return parseExpression();
}