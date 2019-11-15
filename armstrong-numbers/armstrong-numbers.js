//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (input) => {
  const stringInput = input.toString();
  const length = stringInput.length;
  return input === stringInput.split('').reduce((acc, next) => {
    acc += Math.pow(parseInt(next), length);
    return acc;
  }, 0);
};
