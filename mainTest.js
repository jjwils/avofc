const assert = require('assert');
const main = require('./main.js');


describe('avofc', () => {
    it('should return the correct results', () => {
        const result = main.reduceIt([[1000,2000,3000],
            [4000],
            [5000, 6000],
            [7000, 8000, 9000],
            [10000]]);
        assert.deepEqual(result, [6000,4000,11000,24000,10000] );
    });

    it('should return the largest value in the array', () => {
        const result = main.largest([6000,4000,11000,24000,10000]);
        assert.equal(result, 24000);
    });

    it('should return the top 3 largest values in the array', () => {
        const result = main.topThree([6000,4000,11000,24000,10000]);
        assert.deepEqual(result, [24000,11000,10000]);
    });

    it('should return the sum of values in the array', () => {
        const result = main.sum([24000,11000,10000]);
        assert.equal(result, 45000);
    });
});



