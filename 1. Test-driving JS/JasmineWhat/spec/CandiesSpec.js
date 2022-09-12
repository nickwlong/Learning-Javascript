/*
You'll test-drive a function searchCandies that takes the following two arguments: a search string and a maximum price — and returns only the names of candies matching these criteria:

the candy name starts by the search string
the candy price is less than the maximum price
We want the function searchCandies to behave like this:

*/

describe('Candies', function() {
  
  let candiescl;
  beforeEach(function() {
    candiescl = new Candiescl();
  });

  describe('Search Candies', function() {
    it('Finds mars and maltesers', function () {
      expect(candiescl.searchCandies('Ma', 10)).toEqual(['Mars','Maltesers']);
    });
    it('Finds mars', function () {
      expect(candiescl.searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
    });
    it('Finds SSS', function () {
      expect(candiescl.searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });
    it('Finds S&S', function () {
      expect(candiescl.searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
    });
    it('Finds the correct candies when inputs are lowercase too', function () {
      expect(candiescl.searchCandies('ma', 10)).toEqual(['Mars','Maltesers']);
    })
  })
});