const TenMinuteWalk = require('./TenMinuteWalk')

describe('TenMinuteWalk', function() {

  describe('#verticalCheck', function() {

    test('Returns true for n n s s', function() {
      array = ['n', 'n', 's', 's']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.verticalCheck()).toBe(true)
    })

    test('Returns false when more north than south', function() {
      array = ['n', 'n', 'n', 's', 's']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.verticalCheck()).toBe(false)
    })

    test('Returns false when more south than north', function() {
      array = ['n', 's', 's', 's', 's']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.verticalCheck()).toBe(false)
    })
    test('Returns true when no north or south are found in the array', function() {
      array = ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'e']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.verticalCheck()).toBe(true)
    })
  })

  describe('#horizontalCheck', function() {

    test('Returns true for w w e e', function() {
      array = ['w', 'w', 'e', 'e']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.horizontalCheck()).toBe(true)
    })

    test('Returns false when more west than east', function() {
      array = ['w', 'w', 'w', 'e', 'e']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.horizontalCheck()).toBe(false)
    })

    test('Returns false when more east than west', function() {
      array = ['w', 'e', 'e', 'e', 'e']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.horizontalCheck()).toBe(false)
    })

    test('Returns false when more east than west', function() {
      array = ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'e']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.horizontalCheck()).toBe(false)
    })

    test('Returns false when all west', function() {
      array = ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.horizontalCheck()).toBe(false)
    })
  })

  describe('#isZeroDisplacement', function() {
    test('Returns false when not zero displacement', function() {
      array = ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.isZeroDisplacement()).toBe(false)
    })
  })

  describe('#isTenMinutes', function() { 
    test ('counts 9 directions and returns false', function() {
      array = ['w', 'w', 'w', 'e', 'e', 'w', 'w', 'w', 'e']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.isTenMinutes()).toBe(false)
    })
    test ('counts 10 directions and returns true', function() {
      array = ['w', 'w', 'w', 'e', 'e', 'w', 'w', 'w', 'e', 'n']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.isTenMinutes()).toBe(true)
    })
    test ('counts 11 directions and returns false', function() {
      array = ['w', 'w', 'w', 'e', 'e', 'w', 'w', 'w', 'e', 'n', 's']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.isTenMinutes()).toBe(false)
    })

  describe('isTenMinuteWalk', function() {
    test ('Returns true if finishes where they start and takes 10 minutes', function() {
      array = ['w', 'w', 'w', 'e', 'e', 'w', 's', 'e', 'e', 'n']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.isTenMinuteWalk()).toBe(true)
    })
    test ('Returns false if does not finish where they start but takes 10 minutes', function() {
      array = ['w', 'w', 'w', 'e', 'e', 'w', 's', 'e', 'w', 'n']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.isTenMinuteWalk()).toBe(false)
    })
    test ('Returns false if finishes where they start but takes 12 minutes', function() {
      array = ['w', 'w', 'w', 'e', 'e', 'w', 's', 'e', 'e', 'n', 's', 'n']
      tenMinuteWalk = new TenMinuteWalk(array)
      expect(tenMinuteWalk.isTenMinuteWalk()).toBe(false)
    })
  })

  })

})




// ten_minute_walk?(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) # => true
// ten_minute_walk?(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']) # => false
// ten_minute_walk?(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']) # => false
// ten_minute_walk?(['w', 's']) # => false