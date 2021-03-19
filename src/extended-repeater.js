const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = "" + str;
  if(options.addition != undefined || options.addition === null) options.addition = "" + options.addition;
  if(options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;

  if(options.addition != undefined) {
    for(let i = 0; i < options.additionRepeatTimes; i++) {
      str += options.addition;
      if(options.additionSeparator && i != options.additionRepeatTimes - 1) str += options.additionSeparator;
      else {
        if(i != options.additionRepeatTimes - 1)  str += "|";
      } 
    }
  }

  let mainStr = str;

  for(let i = 1; i < options.repeatTimes; i++) {
    if(options.separator) str += options.separator;
    else str += "+";
    str += mainStr;
  }
  console.log(str);
  return str;
};
