const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // if(arr.length == 0) return undefined;
  if(Array.isArray(arr) === false) throw new Error();

  const action = {
    "--discard-next": 1,
    "--double-prev": 2,
    "--double-next": 3,
    "--discard-prev": 4
  };

  let solution = [];
  let arrLength = arr.length;
  if(arrLength == 0) return [];

  for(let i = 0; i < arrLength;) {
    switch(action[arr[i]]) {
      case 1: 
        if(action[arr[i + 2]] == 2 || action[arr[i + 2]] == 4) {
          i += 3;
          continue;
        } 
        i += 2;
        continue;
      case 2:
        if(i == 0) {
          i++;
          continue;
        }
        solution.push(arr[i - 1]);
        i++;
        continue;
      case 3:
        if(i == arrLength - 1) {
          i++;
          continue;
        }
        if(action[arr[i + 2]] == 4) {
          solution.push(arr[i + 1]);
          i += 3;
          continue;
        }
        solution.push(arr[i + 1]);
        i++;
        continue;
      case 4:
        if(i == 0) {
          i++;
          continue;
        }
        solution.pop();
        i++;
        continue;
      default:
        solution.push(arr[i]);
        i++;
    }  
  }
  return solution;
};
