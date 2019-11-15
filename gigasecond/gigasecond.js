//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const GIGASECOND_MS = 1*Math.pow(10, 12);

export const gigasecond = (input) => {
  return new Date(input.getTime() + GIGASECOND_MS);
};
