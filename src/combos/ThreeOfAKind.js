import Combo from "../Combo.js";

class ThreeOfAKind extends Combo {

  getId(){

    return "ThreeOfAKind";

  }

  static isAvailable(cards) {
    let occureds = Combo.occureds(cards)
    let nbVals = Object.values(occureds).map(o => o.length)

    return nbVals.includes(3)
  }
}

export default ThreeOfAKind;