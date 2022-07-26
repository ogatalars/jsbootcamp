function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(
      16
    )}`;
  };
}
const firstColor = makeColor(35, 35, 35);
firstColor.hex();

// this way is not the best way to do it
