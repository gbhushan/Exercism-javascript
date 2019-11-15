//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (input) => {
  return (input%4 === 0 && input%100 !== 0) || (input%400 === 0)
};
