const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr, depth = 1, depths = []) {
    depths.push(depth);
    for(item of arr) {
      if(Array.isArray(item)) {
        this.calculateDepth(item, depth + 1, depths);
      } 
    }
    return Math.max.apply(Math, depths);
  }
};
