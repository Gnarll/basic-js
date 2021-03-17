const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value = `${value}`;
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger || position < 0 || position > this.chain.length) { 
      this.chain = [];
      throw new Error("position is invalid");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let solution = this.chain.join(" )~~( ");
    this.chain = [];
    return "( " + solution + " )";
  },
};

module.exports =  chainMaker;
