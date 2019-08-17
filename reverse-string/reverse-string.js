//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  if (typeof input !== "string") { throw new Error("not a string"); }
  return input.split('').reverse().join('');
};
