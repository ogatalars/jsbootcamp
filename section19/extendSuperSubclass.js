class Pet {
  constructor(name) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Cat extends Pet {
  constructor(name, age, liveLeft = 9) {
    super(name, age);
    this.liveLeft = liveLeft; // se eu quiser usar o this.name, this.age podemos usar o super pra fazer um inherit da Class Pet
  }
  meow() {
    console.log(`${this.name} meows.`);
  }
}

class Dog extends Pet {
  bark() {
    console.log(`${this.name} barks.`);
  }

  bark() {
    console.log(`${this.name} barks.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}
