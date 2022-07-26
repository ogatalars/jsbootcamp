// Syntactic sugar is just like a cleaner, cuter way of writing code.
class Color {
  constructor(r, g, b, name) {
    console.log("inside constructor");
    this.r = r;
    this.g = g;
    this.b = b; // this is the same as this.r = r; this.g = g; this.b = b;, properties. -> NEW OBJECT
    this.name = name;
  }
  greet() {
    return `Hello, I'm ${this.name}`;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
  hex() {
    const { r, g, b } = this;
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(
      16
    )}`;
  }
}

const newColor = new Color(255, 50, 100, "red");
