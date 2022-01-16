
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            res = (i % 2 == 0) ? res.concat(matrix[i]) : res.concat(matrix[i].reverse());
        };
    }
  
    return res;
}
