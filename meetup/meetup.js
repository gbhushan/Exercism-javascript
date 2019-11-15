/**
 * example inputs
 * 2013, 4, 'Monday', 'teenth' -> new Date(2013, 4, 13)
 * 2013, 1, 'Saturday', 'teenth'
 * 2013, 4, 'Tuesday', '1st' -> new Date(2013, 4, )
 * 2013, 3, 'Monday', '2nd'
 * 2013, 8, 'Thursday', '3rd' -> new Date(2013, 8, 19)
 * first, second, third, fourth, fifth, last, monteenth, tuesteenth, wednesteenth,
thursteenth, friteenth, saturteenth, sunteenth
 */
const dayOrderByIndex = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const COUNT_MAP = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  "1st": 1,
  "2nd": 2,
  "3rd": 3,
  "4th": 4,
  "5th": 5
};
export const meetupDay = (year, month, day, descriptor) => {
  const dayOrder = dayOrderByIndex.indexOf(day);
  const numDaysInMonth = (new Date(year, month+1, 0)).getDate();

  // last case
  if (descriptor.includes("last")) {
    for (let i = numDaysInMonth; i > 0; i -= 1) {
      const dt = new Date(year, month, i);
      if (dayOrder === dt.getDay()) {
        return dt;
      }
    }
  }

  if (descriptor.includes("teenth")) {
    for (let i = 1; i <= numDaysInMonth; i += 1) {
      const dt = new Date(year, month, i);
      if (dt.getDay() === dayOrder && i > 10 && i < 20) {
        // found teenth case
        return dt;
      }
    }
  }

  if (COUNT_MAP[descriptor] !== undefined) {
    let count = COUNT_MAP[descriptor];
    for (let i = 1; i <= numDaysInMonth; i += 1) {
      // first, second, case
      const dt = new Date(year, month, i);
      if (dt.getDay() === dayOrder) {
        count -= 1;
        if (count === 0) {
          return dt;
        }
      }
    }
  }

  throw new Error();
};
