const annoyer = {
  phrases: [
    "at the end of the day",
    "I'm not sure",
    "I don't know",
    "Totes",
    "yolo",
    "I cant even",
  ],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },

  start() {
    setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
};
//  Ao usar o this com arrow functions, podem ser usados os métodos do objeto, já que o this está ligado ao objeto. A referencia é diferente, entao o this é utilizado naquele momento.
