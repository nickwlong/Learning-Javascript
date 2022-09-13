class CounterModel {
  constructor() {
    this.counter = 0;
    console.log('hey');
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    console.log('Going upppp')
    this.counter++;
  }

  decrement() {
    console.log('Going dooowwwwn');
    this.counter--;
  }
}

module.exports = CounterModel;