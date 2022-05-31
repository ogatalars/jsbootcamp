/* 
Write a isValidPassword function 
it accepts 2 arguments: password and username 
password must:
- Be at least 8 characters long
- cannot contain spaces
- Cannot contain the username
iF all requirements are met, return true. otherwise return false.

isValidPassword('helloworld', 'hello') // true
isValidPassword('helloworld', 'wo rld') // false



*/
function isValidPassword(username, password) {
  let invalid =
    password.length < 8 ||
    password.includes(" ") ||
    password.includes(username);
  if (invalid) {
    return false;
  } else {
    return true;
  }
}
console.log(isValidPassword("hello", "hello"));
console.log(isValidPassword("helloworld", "hello"));
console.log(isValidPassword("helloworld", "wo dwsd"));
console.log(isValidPassword("renatinhagata", "elefanteRosa"));

/* another way?
funtcion isValidPassword(username, password) {
 if(password.length < 8) {
   return false;
 }
 if(password.indexOf(' ') !== -1) {
   return false;
 }
 if(password.indexOf(username) !== -1) {
   return false;
 }
 return true
 ))

}

function isValidPassword(password) {
    let isValid = true;
    let hasNumber = false;
    let hasUpper = false;
    let hasSpecial = false;

    if (password.length < 8) {
        isValid = false;
    }

    for (let i = 0; i < password.length; i++) {
        if (password[i].match(/[0-9]/)) {
            hasNumber = true;
        }

        if (password[i].match(/[A-Z]/)) {
            hasUpper = true;
        }

        if (password[i].match(/[!@#$%^&*()-+]/)) {
            hasSpecial = true;
        }
    }

    if (!hasNumber || !hasUpper || !hasSpecial) {
        isValid = false;
    }

    return isValid;
}

*/
