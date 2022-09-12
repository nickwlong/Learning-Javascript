class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  };


  getName() {
    return this.name;
  };

  getPrice() {
    return this.price;
  };

}

class ShoppingBasket {
  constructor() {
    this.totalprice = 0
  }

  addItem(sweet) {
    this.totalprice += sweet.price
  }

  getTotalPrice() {
    return this.totalprice
  }
}