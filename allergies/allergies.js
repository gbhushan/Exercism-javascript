const SCORE_TO_ALLERGIES = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
};

export class Allergies {
  constructor(score) {
    this._score = score % 256;
    this._allergicList = this.list();
  }

  list() {
    let counter = this._score;
    const result = [];
    if (counter % 2 === 1) {
      result.push(1);
      counter = counter - 1;
    }
    const keysList = Object.keys(SCORE_TO_ALLERGIES);

    const isValid = (count, index, tResult) => {
      if (count === 0) return tResult;
      if (count < keysList[index]) {
        return false;
      }
      tResult.push(keysList[index]);
      return isValid(count - keysList[index], index + 1, tResult);
    };

    for (let idx = 1; idx < keysList.length; idx += 1) {
      const count = counter;
      const tempResult = [];
      if (isValid(count, idx, tempResult)) {
        result.push(...tempResult);
        break;
      }
    }

    return result.map(indexValue => SCORE_TO_ALLERGIES[indexValue]);
  }

  allergicTo(item) {
    return this._allergicList.indexOf(item) > -1;
  }
}
