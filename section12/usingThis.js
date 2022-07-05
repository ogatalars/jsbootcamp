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
        const fullName = this.fullName()
        console.log(`${fullName} is a person`)
    }
}

