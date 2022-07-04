const role = "host";
const person = "Jools Holland";

// const team = {
    
// }
// team[role] = person;
// team[role2] = person2;

const team = {
    [role]: person,
    [role2]: person2
}

// Computed properties -> we can use a variable as a key name in an object literal property. 

//  const user = "John"; const userRoles ={][user] = "admin";]}

function addProp(obj, k, v) {
    obj[k] = v;
    return obj;
}