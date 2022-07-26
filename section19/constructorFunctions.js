// the best way to do it is to use the constructor function
// using NEW keyword

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
// creates a blank, plaing js object; Links (sets the constructor of the object) this object to another object
// Passes the newly created object from step 1 as the this context;
// Return this if the function doesn't return its own object.

new Color(255, 50, 100);

Color.prototype.rgb = function () {
  return `rgb(${this.r}, ${this.g}, ${this.b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};
const color1 = new Color(233, 123, 255);
