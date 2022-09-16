class TenMinuteWalk {
  constructor(array) {
    this.array = array
  }  

  verticalCheck() {
    let verticalCount = 0
    this.array.forEach(direction => {
      if(direction === "n") {
        verticalCount += 1
      } else if (direction === "s") {
        verticalCount -= 1}
    });
    return (verticalCount === 0)
  }

  horizontalCheck() {
    let horizontalCount = 0
    this.array.forEach(direction => {
      if(direction === "w") {
        horizontalCount += 1
      } else if (direction === "e") {
        horizontalCount -= 1}
    });
    return (horizontalCount === 0)
  }

  isTenMinutes() {
    return (this.array.length === 10);
  }

  isZeroDisplacement() {
    return(this.verticalCheck() === true && this.horizontalCheck() === true)
  }

  isTenMinuteWalk() {
    return(this.isZeroDisplacement() && this.isTenMinutes())
  }
}

module.exports = TenMinuteWalk