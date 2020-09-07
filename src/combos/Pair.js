import Combo from "../Combo.js";

class Pair extends Combo {

  getId(){

    return "Pair";

  }
  
  static isAvailable(cards) {
    let occureds = Combo.occureds(cards)
    let nbVals = Object.values(occureds).map(o => o.length)

    return nbVals.includes(2)
  }
}

export default Pair;