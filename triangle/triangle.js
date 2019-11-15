//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * IMPROVEMENT
 * - have a separate rules for pattern matching
 * rules = [{
 *  rule: () => {},
 *  type: () => {//output}
 * }, ...]
 * iterate over the rules as a pattern matching and use `find()` method
 * it'll return the item from the find() method
 */

export class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  kind() {
    const {sideA, sideB, sideC} = this;
    if (!this.validate()) {
      throw new Error();
    }
    if (sideA === sideB && sideB === sideC) {
      return "equilateral";
    }
    if (sideA === sideB || sideB === sideC || sideA === sideC) {
      return "isosceles";
    }
    return "scalene";
  }
  validate() {
    const {sideA, sideB, sideC} = this;
    // should be greater than 0
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      return false;
    }
    // greater than 3rd side should apply
    if (sideA + sideB < sideC || sideA + sideC < sideB || sideC + sideB < sideA) {
      return false;
    }
    return true;
  }
}
