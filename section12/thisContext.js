// The value of this depends on the invocation context of the function it is used in 
const person = {
    first: "Cherilyn ",
    last: "Snyder",
    nickName: "cher", 
    fullName: function() {
        console.log(this)
        const {first, last, nickName} = this;
        ;
        return `${first} ${last} (${nickName})`;
    }, 
    printBio() {
        console.log(this)
        const fullName = this.fullName()
        console.log(`${fullName} is a person`)
    }, 
    laugh: () => {
        console.log(this)
        console.log(`${this.fullName()} is laughing`)
    }
}
// this is differente in arrow functions, nao usamos arrow functions para criar metodos, pois os metodos nao tem this


const printBio = person.printBio