import Combo from "../Combo.js";

class FourOfAKind extends Combo {

  getId(){

    return "FourOfAKind";

  }

  static isAvailable(cards) {
    let occureds = Combo.occureds(cards)

    return Object.values(occureds).map(o => o.length).includes(4)
  }
}

export default FourOfAKind;