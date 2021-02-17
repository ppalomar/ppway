/* eslint-env jest */
import { stringConstraint, stringConstraintV2 } from '../problemTwoSolver';

describe('problemTwoSolver', () => {
    it('stringConstraint - Returns the correct number of valid strings (empty input)', () => {
        expect(stringConstraint([])).toBe(0);
    });

    it('stringConstraint - Returns the correct number of valid strings', () => {
        const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
        expect(stringConstraint(input)).toBe(2);
    });

    it('stringConstraint - Returns the correct number of valid strings (incorrect formats)', () => {
        const input = ['1-3 a: abcde', '1-3 b: cdefg', '0-x c: ccccccccc'];
        expect(stringConstraint(input)).toBe(1);
    });

    it('stringConstraintV2 - Returns the correct number of valid strings (empty input)', () => {
        expect(stringConstraintV2([])).toBe(0);
    });

    it('stringConstraintV2 - Returns the correct number of valid strings', () => {
        const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
        expect(stringConstraintV2(input)).toBe(1);
    });

    it('stringConstraintV2 - Returns the correct number of valid strings (incorrect format)', () => {
        const input = ['x-y a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
        expect(stringConstraintV2(input)).toBe(0);
    });
});
