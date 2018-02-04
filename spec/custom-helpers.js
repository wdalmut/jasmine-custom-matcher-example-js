
let customMatchers = {
  toBeSquare: function(util, customEqualityTesters) {
    return {
      compare: (actual, expected) => {
        if (expected === undefined) {
          expected = 0;
        };

        let result = {};

        result.pass = util.equals(actual, Math.pow(expected, 2) , customEqualityTesters);

        if (!result.pass) {
          result.message = "Expected '" + actual + "' is not a square of '" + expected + "'";
        }

        return result;
      },
    }
  }
};

module.exports = customMatchers;
