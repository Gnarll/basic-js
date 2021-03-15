const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) == false || members.length == 0) return false;
  let onlyPeople = [];
  for(let item of members) {
    if(item == null || typeof(item) != "string") continue;
    while(item.indexOf(" ") != -1) {
    item = item.replace(" ", ""); 
    }
    if( (item[0] >= "A" && item[0] <= "Z") || (item[0] >= "a" && item[0] <= "z")) {
      
      onlyPeople.push(item.toUpperCase());
     }
  }
  if(onlyPeople.length == 0) return false;
  onlyPeople.sort();
  let letters = onlyPeople.map(item => item[0]);
  return letters.join("");
};
