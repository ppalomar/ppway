/* eslint-env jest */
import { twoSum, threeSum } from '../problemOneSolver';

describe('problemOneSolver', () => {
    it('twoSum - Returns the correct object (empty input)', () => {
        expect(twoSum([], null)).toMatchSnapshot();
    });

    it('twoSum - Returns the correct object', () => {
        const input = ['1721','979','366','299','675','1456'];
        expect(twoSum(input, 2020)).toMatchSnapshot();
    });

    it('threeSum - Returns the correct object (empty input)', () => {
        expect(threeSum([], null)).toMatchSnapshot();
    });

    it('threeSum - Returns the correct object', () => {
        const input = ['1721','979','366','299','675','1456'];
        expect(threeSum(input, 2020)).toMatchSnapshot();
    });
});
