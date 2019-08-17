/**
 * @params
 * input - array of digits
 * current base
 * output base
 * expect(convert([1, 0, 1], 2, 10)).toEqual([5]);
 * 1*2^2 + 0*2^1 + 1*2^0 = 4+0+1 = 5
 * 5/10 = 0 + 5
 * expect(convert([5], 10, 2)).toEqual([1, 0, 1]);
 * 5*10^0 = 5
 * 5/2 = 2 + 1
 * expect(convert([1, 0, 1, 0, 1, 0], 2, 10)).toEqual([4, 2])
 * 1*2^5 + 0*2^4 + 1*2^3 + 0*2^2 + 1*2^1 + 0*2^0 = 32 + 8 + 2 = 42
 * 42/10 = 4 + 2
 */
//

const ERROR_MESSAGE_MAP = {
  Incorrect_Input: 'Input has wrong format',
  Incorrect_InputBase: 'Wrong input base',
  Incorrect_OutputBase: 'Wrong output base',
}

// first combine to the base 10
const combine = (input, base) => {
  let increment = 0;
  let result = 0;
  for (let idx = input.length - 1; idx >= 0; idx -= 1) {
    if (input[idx] < 0 || !Number.isInteger(input[idx]) || input[idx] >= base) {
    throw new Error(ERROR_MESSAGE_MAP.Incorrect_Input);
    }
    result += input[idx] * Math.pow(base, increment++);
  }
  return result;
};

const deconstruct = (input, base) => {
  if (input === 0) {
    return [input];
  }
  let result = [];
  while (input !== 0) {
    let remainder = input % base;
    input = Math.floor(input / base);
    result.splice(0, 0, remainder);
  }
  return result;
};

export const convert = (input, currentBase, outputBase) => {
  if (currentBase <= 1 || !Number.isInteger(currentBase)) {
    throw new Error(ERROR_MESSAGE_MAP.Incorrect_InputBase);
  }
  if (outputBase <= 1 || !Number.isInteger(outputBase)) {
    throw new Error(ERROR_MESSAGE_MAP.Incorrect_OutputBase);
  }
  if (input.length === 0 || (input.length > 1 && input[0] === 0)) {
    throw new Error(ERROR_MESSAGE_MAP.Incorrect_Input);
  }
  const numberInBase10 = combine(input, currentBase);
  return deconstruct(numberInBase10, outputBase);
};