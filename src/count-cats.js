const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let numberOfCats = 0;
  for(array of matrix) {
    for(item of array) {
      if(item == "^^") numberOfCats++;
    }
  }
  return numberOfCats;
};
