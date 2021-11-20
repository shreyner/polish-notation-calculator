import {isEmpty, push, peek, pop, size, createStack} from "./stack.js";

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

export function calc(expr) {
    const operands = createStack();

    for (const chr of expr.split(" ")) {
        if (!isNaN(+chr)) {
            push(operands, +chr);
            continue;
        }

        if (operators[chr]) {
            const operandB = pop(operands);
            const operandA = pop(operands);

            const result = operators[chr](operandA, operandB);

            push(operands, result)
            continue;
        }
    }

    const lastOperand = pop(operands);

    return lastOperand ? lastOperand : 0;
}
