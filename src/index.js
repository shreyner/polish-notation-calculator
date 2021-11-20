import readline from "node:readline";
import { promisify } from "node:util";
import { toPostfix } from "./infix-to-postfix-converter.js";
import { calc } from "./polish-notation-calculator.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = promisify(rl.question).bind(rl);

const infixFunction = await question("Infix > ");

const postfixFunction = toPostfix(infixFunction);

const resultCalculation = calc(postfixFunction);

console.log(`Infix to postfix: ${postfixFunction}\nResult calculation: ${resultCalculation}`);

process.exit(0);
