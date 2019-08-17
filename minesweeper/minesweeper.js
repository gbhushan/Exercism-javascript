export const annotate = (input=[]) => {
  const output = [...input];
  output.forEach((row, rowIndex) => {
    // row is a string, convert to array
    row = row.split('');
    row.forEach((position, positionIndex) => {
      // increment count based on number of adjacent "*"
      let count = 0;
      if (position !== "*") {
        // calculate the count for this position - horiz
        if (positionIndex + 1 < row.length && output[rowIndex][positionIndex + 1] === "*") {
          count += 1;
        }
        if (positionIndex - 1 >= 0 && output[rowIndex][positionIndex - 1] === "*") {
          count += 1;
        }
        // calculate the count for this position - vertical
        if (rowIndex + 1 < output.length && output[rowIndex + 1][positionIndex] === "*") {
          count += 1;
        }
        if (rowIndex - 1 >= 0 && output[rowIndex - 1][positionIndex] === "*") {
          count += 1;
        }
        // calculate diagonally
        if (rowIndex + 1 < output.length && positionIndex + 1 < row.length && output[rowIndex+1][positionIndex+1] === "*") {
          count += 1;
        }
        if (rowIndex - 1 >= 0 && positionIndex - 1 >= 0 && output[rowIndex-1][positionIndex-1] === "*") {
          count += 1;
        }
        if (rowIndex + 1 < output.length && positionIndex - 1 >= 0 && output[rowIndex+1][positionIndex-1] === "*") {
          count += 1;
        }
        if (rowIndex - 1 >= 0 && positionIndex + 1 < row.length && output[rowIndex-1][positionIndex+1] === "*") {
          count += 1;
        }
        // if count is 0, return the position value itself
        row[positionIndex] = count || position;
      }
    });
    // combine the array back into a string
    output[rowIndex] = row.join('');
  });
  return output;
}

/**
 * this is a quadratic O(n^2 + n^2*8) solution
 * since for each position, we check 8 adjacent positions
 * therefore, 2 for loops - O(n^2) solution
 * at the same time, we need extra space - O(n) so that we don't mutate the incoming input
 */