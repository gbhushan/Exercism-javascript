//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const abilityModifier = value => {
  if (value < 3) throw new Error("Ability scores must be at least 3");
  if (value > 18) throw new Error("Ability scores can be at most 18");
  return Math.floor((value - 10) / 2);
};

export class Character {
  constructor() {
    this._charisma = Character.rollAbility();
    this._strength = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
  }
  static rollAbility() {
    // Array.from({length: 4}, () => Math.ceil(Math.random()*6))
    const fourDiceThrows = [];
    for (let i = 0; i < 4; i += 1) {
      fourDiceThrows.push(Math.ceil(Math.random() * 6));
    }
    return fourDiceThrows
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((acc, next) => (acc += next), 0);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this._constitution);
  }
}
