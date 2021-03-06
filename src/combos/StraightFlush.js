import Combo from "../Combo.js";
import Straight from "./Straight.js";
import Flush from "./Flush.js";

class StraightFlush extends Combo {

  getId(){

    return "StraightFlush";

  }

  static isAvailable(cards) {
    return Straight.isAvailable(cards) && Flush.isAvailable(cards)
  }
}

export default StraightFlush;