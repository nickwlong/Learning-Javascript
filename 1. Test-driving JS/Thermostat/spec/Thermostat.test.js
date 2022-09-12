const Thermostat = require('../lib/Thermostat');

describe('Thermostat', function() {

  beforeEach(() => {
    thermo = new Thermostat
  });

  describe('getTemperature', function() {
    it('Returns the default temperature', function() {
      expect(thermo.getTemperature()).toBe(20)
    })
  })

  describe('up and down', function() {
    it('Increases the temperature by one degree', function() {
      thermo.up()
      expect(thermo.getTemperature()).toBe(21)

    })
    it('Increases the temperature by one degree after running up twice', function() {
      thermo.up()
      thermo.up()
      expect(thermo.getTemperature()).toBe(22)
    })
    it('Increases the temperature by one degree after running up twice', function() {
      thermo.up()
      thermo.up()
      thermo.down()
      expect(thermo.getTemperature()).toBe(21)
    })
  })



})