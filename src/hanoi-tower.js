const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let tower = {  };
  tower.turns = Math.pow(2, disksNumber) - 1;
  turnsSpeed = turnsSpeed / 3600;
  tower.seconds = Math.floor(tower.turns / turnsSpeed);
  return tower; 
};
