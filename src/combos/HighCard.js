import Combo from "../Combo.js";

class HighCard extends Combo {

  getId(){

    return "HighCard";

  }

  static isAvailable(cards) {
    return true
  }
}

export default HighCard;