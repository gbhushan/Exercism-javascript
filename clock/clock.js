//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hr, min) {
    const { hours, minutes } = this.calculateHoursAndMinutes(hr, min);

    this.hours = hours || 0;
    this.minutes = minutes || 0;
  }

  toString() {
    const { hours, minutes } = this;
    let minHand = "";
    let hrHand = "";

    if (hours && hours.toString().length === 1) {
      hrHand = `0${hours}`;
    } else hrHand = hours ? hours.toString() : "00";

    if (minutes && minutes.toString().length === 1) {
      minHand = `0${minutes}`;
    } else minHand = minutes ? minutes.toString() : "00";

    return `${hrHand}:${minHand}`;
  }

  calculateHoursAndMinutes(hours = 0, minutes = 0) {
    let numOfHours = 0;

    if (minutes >= 60) {
      numOfHours = Math.floor(minutes / 60);
      minutes = minutes % 60;
    } else if (minutes !== undefined && minutes < 0) {
      numOfHours = Math.floor(minutes / 60);
      minutes = 60 + (minutes % 60);
    }

    hours += numOfHours;

    if (hours > 24) {
      hours = hours % 24;
    } else if (hours !== undefined && hours < 0) {
      hours = 24 + (hours % 24);
    }
    if (hours === 24) {
      hours = 0;
    }

    return {
      hours,
      minutes
    };
  }

  plus(additionalMinutes) {
    const { hours, minutes } = this;
    const {
      hours: newHours,
      minutes: newMinutes
    } = this.calculateHoursAndMinutes(hours, minutes + additionalMinutes);

    this.hours = newHours;
    this.minutes = newMinutes;
    return this;
  }

  minus(additionalMinutes) {
    return this.plus(-additionalMinutes);
  }

  equals(clock) {
    const { hours, minutes } = clock;
    return this.hours === hours && this.minutes === minutes;
  }
}
