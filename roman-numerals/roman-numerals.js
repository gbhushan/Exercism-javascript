/**
 * to understand let's break down
 * 1000 - M
 * 2000 - MM
 * which means every thousand we add a M
 *
 * skip `0` digit
 *
 * 1000 - M
 * 900 - CM
 * 100 - C ?
 * 10 - X
 * 90 - XC
 *
 * looks like I need to break down the given number into an array of numbers
 * 0th digit - simple - I, II, III, IV, V, VI, VII, VIII, IX, X
 */

//  not using the map below
const NUMBER_LOOKUP = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

function romanConstructor({
  oneDigitValue,
  fiveDigitValue,
  tenDigitValue,
  digit
}) {
  if (digit === 0) {
    return "";
  }
  if (digit === 1) {
    return oneDigitValue;
  }
  if (digit < 4) {
    return oneDigitValue.repeat(digit);
  }
  if (digit === 4) {
    return oneDigitValue + fiveDigitValue;
  }
  if (digit === 5) {
    return fiveDigitValue;
  }
  if (digit < 9) {
    return fiveDigitValue + oneDigitValue.repeat(digit - 5);
  }
  if (digit === 9) {
    return oneDigitValue + tenDigitValue;
  }
}

export const toRoman = input => {
  let result = "";
  let inputArray = input.toString().split("").reverse();
  for (let i = inputArray.length - 1; i >= 0; i -= 1) {
    if (i === 3) {
      result += romanConstructor({
        oneDigitValue: "M",
        digit: parseInt(inputArray[i])
      });
    } else if (i === 2) {
      result += romanConstructor({
        oneDigitValue: "C",
        fiveDigitValue: "D",
        tenDigitValue: "M",
        digit: parseInt(inputArray[i])
      });
    } else if (i === 1) {
      result += romanConstructor({
        oneDigitValue: "X",
        fiveDigitValue: "L",
        tenDigitValue: "C",
        digit: parseInt(inputArray[i])
      });
    } else if (i === 0) {
      result += romanConstructor({
        oneDigitValue: "I",
        fiveDigitValue: "V",
        tenDigitValue: "X",
        digit: parseInt(inputArray[i])
      });
    }
  }
  return result;
};
