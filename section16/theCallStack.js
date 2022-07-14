// The call stack is the mechanism the js interpreter uses to keep track of its place in a script that calls multiple functions.
// How js knows what function is currently being run and what functions are called from within that function, etc.

// How it works -> When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
// Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
// When the current function is fineshed, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

// example

const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);
isRightTriangle(3, 4, 5);
