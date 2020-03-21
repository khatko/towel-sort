
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            if ((i + 1) % 2 == 0) {
                row = [];
                for (let j = matrix[i].length - 1; j >= 0; j--) {
                    row.push(matrix[i][j]);
                }
            }
            result = result.concat(row);
        }
    }
    return result;
}
