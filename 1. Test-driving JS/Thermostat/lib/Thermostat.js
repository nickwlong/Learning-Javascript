class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSave = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSave && this.temperature < 25) {
      this.temperature += 1;
    }
    if (this.powerSave === false && this.temperature < 32) {
      this.temperature += 1;
    }
  }

  down() {
    this.temperature -= 1;
  }

  setPowerSavingMode(status) {
    this.powerSave = status;
  }

  reset() {
    this.temperature = 20;
  }

  energyUse() {
    if (this.temperature < 15) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
