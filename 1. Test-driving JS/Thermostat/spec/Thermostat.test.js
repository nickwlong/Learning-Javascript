const Thermostat = require("../lib/Thermostat");

describe("Thermostat", function () {
  beforeEach(() => {
    thermo = new Thermostat();
  });

  describe("getTemperature", function () {
    it("Returns the default temperature", function () {
      expect(thermo.getTemperature()).toBe(20);
    });
  });

  describe("up and down", function () {
    it("Increases the temperature by one degree", function () {
      thermo.up();
      expect(thermo.getTemperature()).toBe(21);
    });

    it("Increases the temperature by one degree after running up twice", function () {
      thermo.up();
      thermo.up();
      expect(thermo.getTemperature()).toBe(22);
    });

    it("Increases temp by 2 then down by 1", function () {
      thermo.up();
      thermo.up();
      thermo.down();
      expect(thermo.getTemperature()).toBe(21);
    });
  });

  describe("#setPowerSavingMode", function () {
    it("Limits maximum temperature to 25 degrees when on", function () {
      for (let i = 0; i < 10; i++) {
        thermo.up();
      }
      expect(thermo.getTemperature()).toBe(25);
    });
    it("Limits maximum temperature to 32 degrees when off", function () {
      thermo.setPowerSavingMode(false);
      for (let i = 0; i < 20; i++) {
        thermo.up();
      }
      expect(thermo.getTemperature()).toBe(32);
    });
  });

  describe("#reset", function () {
    it("resets the temperature to the default", function () {
      thermo.setPowerSavingMode(false);
      for (let i = 0; i < 20; i++) {
        thermo.up();
      }
      thermo.reset();
      expect(thermo.getTemperature()).toBe(20);
    });
  });

  describe("#energyUse", function () {
    it("describes low energy use for < 18", function () {
      for (let i = 0; i < 4; i++) {
        thermo.down();
      }
      expect(thermo.getTemperature()).toBe(16);
      expect(thermo.energyUse()).toBe("low-usage");
    });
    it("describes medium energy use for >= 18, <=25", function () {
      for (let i = 0; i < 5; i++) {
        thermo.up();
      }
      expect(thermo.getTemperature()).toBe(25);
      expect(thermo.energyUse()).toBe("medium-usage");
    });
    it("describes high energy use for > 25", function () {
      thermo.setPowerSavingMode(false);

      for (let i = 0; i < 6; i++) {
        thermo.up();
      }
      expect(thermo.getTemperature()).toBe(26);
      expect(thermo.energyUse()).toBe("high-usage");
    });
  });
});
