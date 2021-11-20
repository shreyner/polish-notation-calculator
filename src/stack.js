// stack operations
export const createStack = () => [];
export const size = (stack) => stack.length;
export const isEmpty = (stack) => (size(stack) === 0 ? true : false);
export const peek = (stack) => (!isEmpty(stack) ? stack[stack.length - 1] : null);
export const pop = (stack) => stack.pop();
export const push = (stack, element) => stack.push(element);
