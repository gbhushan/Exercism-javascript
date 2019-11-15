//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
export const value = input => {
  // throw new Error("Remove this statement and implement this function");
  if (!Array.isArray(input)) {
    throw new Error("not an array");
  }
  const result = input.reduce((acc, next) => {
    const index = COLORS.indexOf(next.toLowerCase());
    if (index > -1) {
      acc += index;
    }
    return acc;
  }, "");
  return parseInt(result);
};
