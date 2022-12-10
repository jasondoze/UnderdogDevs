class Color {
  constructor(r, g, b, a = 1) {
    this.values = [r, g, b, a];
  }
  alpha() {
    return this.values[3];
  }
  alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError('Alpha value must be from 0 to 1');
    }
    this.values[3] = value;
  }
}

class ColorAlpha extends Color {
  constructor(r, g, b, a) {
    super(r, g, b);
    this.alpha = a;
  }
}
const color = new Color(255, 0, 0, 0);
console.log(color.alpha());
