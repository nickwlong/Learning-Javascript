class TenMinuteWalk {
  constructor(array) {
    this.array = array
  }  

  verticalCheck() {
    let verticalCount = 0
    this.array.forEach(direction => {
      if(direction === "n") {verticalCount += 1} else if 
      (direction === "s") {verticalCount -= 1}
    });
    return this.isCheckZero(verticalCount)
  }

  horizontalCheck() {
    let horizontalCount = 0
    this.array.forEach(direction => {
      if(direction === "w") {horizontalCount += 1} else if 
      (direction === "e") {horizontalCount -= 1}
    });
    return this.isCheckZero(horizontalCount)
  }

  isCheckZero(count) {
    if (count == 0 ) {return true} else {return false}
  }

  isTenMinutes() {
    if (this.array.length === 10) {return true} 
    else {return false};
  }

  isZeroDisplacement() {
    if(this.verticalCheck() === false || this.horizontalCheck() === false) {return false} else {return true}
  }

  isTenMinuteWalk() {
    if(this.isZeroDisplacement() && this.isTenMinutes()) {return true} else {return false}

  }

}

module.exports = TenMinuteWalk