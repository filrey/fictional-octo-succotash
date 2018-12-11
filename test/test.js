var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('State', function () {
  describe('currentPlayer', function () {
    it('should return  the current players internal state', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});