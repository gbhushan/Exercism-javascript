const chessBoard = (size) => Array(size).fill('_').map(() => Array(size).fill('_'));

export class QueenAttack {
  constructor({white= [0, 3], black=[7, 3]} = {}) {
    this.chessBoard = chessBoard(8);
    if (white.toString() === black.toString()) {
      throw new Error('Queens cannot share the same space');
    }
    this.white = white;
    this.black = black;
    // this.initialize();
    this.chessBoard[this.white[0]][this.white[1]] = 'W';
    this.chessBoard[this.black[0]][this.black[1]] = 'B';
  }
  toString() {
    return this.chessBoard.reduce((acc, next) => acc.concat(next.join(' ')), []).join('\n');
  }
  canAttack() {
    // check horizontal
    if (this.white[0] === this.black[0]) {
      return true;
    }
    // check vertical
    if (this.white[1] === this.black[1]) {
      return true;
    }
    // check diagonal
    if (Math.abs(this.white[1] - this.black[1]) === Math.abs(this.white[0] - this.black[0])) {
      return true;
    }
    return false;
  }
}