//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = input => {
  let result = "";
  let prevChar = input[0];
  let charCount = 1;
  for (let idx = 1; idx < input.length; idx += 1) {
    const currChar = input[idx];
    if (prevChar === currChar) {
      charCount += 1;
    } else {
      if (charCount === 1) {
        result += prevChar;
      } else {
        result += charCount + prevChar;
      }
      charCount = 1;
    }
    prevChar = currChar;
    if (idx === input.length - 1) {
      if (charCount === 1) {
        result += currChar;
      } else {
        result += charCount + currChar;
      }
    }
  }
  return result;
};

export const decode = (input) => {
  let result = '';
  let intValue = 1;
  let trackPrevCharIntegerIndex = null;
  for (let idx = 0; idx < input.length; idx += 1) {
    let currChar = input[idx];
    // checking for numbers in javascript is hard... smh
    if (!isNaN(parseInt(currChar))) {
      if (trackPrevCharIntegerIndex === null) {
        trackPrevCharIntegerIndex = idx;
        intValue = currChar;
        continue;
      }
      if (trackPrevCharIntegerIndex !== null){
        intValue = input.substring(trackPrevCharIntegerIndex, idx+1);
        continue;
      }
    } else {
      result += currChar.repeat(intValue);
      intValue = 1;
      trackPrevCharIntegerIndex = null;
    }
  }
  return result;
};
