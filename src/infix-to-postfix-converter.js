import {size, pop, peek, push, createStack} from "./stack.js";

const lexemPriority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
};

export function toPostfix(infix) {
    const stack = createStack();
    const result = createStack();

    for (const lexem of infix.split(" ")) {
        if (!isNaN(+lexem)) {
            result.push(lexem);
            continue;
        }

        if (lexem === "(") {
            push(stack, lexem);
            continue;
        }

        if (lexem === ")") {
            for (let index = size(stack); 0 < size(stack); index--) {
                const lastLexem = pop(stack);

                if (lastLexem === "(") {
                    break;
                }

                push(result, lastLexem);
                continue;
            }

            continue;
        }

        if (
            peek(stack) !== null &&
            lexemPriority[lexem] - lexemPriority[peek(stack)] <= 0
        ) {
            const lastLexem = pop(stack);

            push(result, lastLexem);

            for (let index = size(stack); 0 < size(stack); index++) {
                if (
                    peek(stack) !== null &&
                    lexemPriority[lexem] - lexemPriority[peek(stack)] <= 0
                ) {
                    const lastLexem = pop(stack);

                    push(result, lastLexem);
                    continue;
                }

                break;
            }

            push(stack, lexem);
            continue;
        }

        push(stack, lexem);
    }

    for (let index = size(stack); 0 < size(stack); index--) {
        push(result, pop(stack));
    }

    return result.join(" ");
}
