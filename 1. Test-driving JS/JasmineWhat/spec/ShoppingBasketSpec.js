describe('ShoppingBasket', function() {

  describe('getName', function() {
    it('Returns a candy name', function() {
      const candy = new Candy('Mars', 4.99);
      expect(candy.getName()).toEqual('Mars');
    })

  });


  describe('getPrice', function() {
    it('Returns a candy price', function() {
      const candy = new Candy('Mars', 4.99);
      expect(candy.getPrice()).toEqual(4.99);
    })
  });

  describe('basket.getTotalPrice', function() {
    it('Returns a candy price total of zero if no items', function() {

      const basket = new ShoppingBasket();
      expect(basket.getTotalPrice()).toEqual(0);
    })
  });

  describe('addItem and getTotalPrice', function() {
    it('adds an item and gets a new total price', function() {
      const basket = new ShoppingBasket();
      const candydbl = {price: 4.99};
      basket.addItem(candydbl);
      expect(basket.getTotalPrice()).toEqual(4.99);
    });

    it('adds an item and gets a new total price', function() {
      const basket = new ShoppingBasket();
      basket.addItem(new Candy('Skittle', 3.99));
      basket.addItem(new Candy('Skittle', 3.99));
      const sweet = new Candy('Mars', 4.99);
      basket.addItem(sweet);
      expect(basket.getTotalPrice()).toEqual(12.97);
    });
  });

})





