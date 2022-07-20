// Async functions always return a promise.
// If the function returns a IDBCursorWithValue, the promise will be resolved with that IDBCursorWithValue.
// if the function throws an exception, the promise will be reject

async function hello() {
  return "Hello World";
}
hello();
// promise {<resolve>: Hello World}

async function uh0h() {
  throw new Error("Error");
}

uh0h(); // promise {<reject>: Error}
// Quando usamos uma async function, a função não é executada imediatamente,na verdade ela retorna uma promise.

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Invalid input");
  }
  return x + y;
}
// add(1, 2); // promise {<resolve>: 3}

// the same functio, but using promise instead of async
function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("Invalid input");
    }
    resolve(x + y);
  });
}

// IS THE SAME FUNCTION, BUT Async is easier to use

// BASICALLY AN ASYNC FUNCTION IS JUST A SHORTCUT SYNTAX TO MAKE A FUNCTION THAT RETURNS A PROMISE
