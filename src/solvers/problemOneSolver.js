// https://paulrohan.medium.com/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03
// https://rohan-paul.github.io/javascript/2018/04/29/3-sum-with-JavaScript/

import uniq from 'lodash/uniq';
import compact from 'lodash/compact';

export const twoSum = (arr, target) => {
    const removedDup = uniq(arr);
    const removedEmptyValues = compact(removedDup);
	const numObject = removedEmptyValues.reduce((memo, num, i) => ({ ...memo, [num]: i }), {});

    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            const opOne = arr[i];
            const opTwo = arr[numObject[diff]];
			return { operators: [opOne, opTwo], multi: opOne * opTwo };
		}
    };
}

export const threeSum = (stringNums, stringTarget) => {
    const removedDup = uniq(stringNums);
    const removedEmptyValues = compact(removedDup);
    const nums = removedEmptyValues.map(num => parseInt(num, 10));
    const target = parseInt(stringTarget, 10);

    nums.sort((a, b) => a - b);
  
    let result = [];
    for (let indexA = 0; indexA < nums.length - 2; indexA++) {
      const a = nums[indexA];
  
      if (a > target) return result;
      if (a === nums[indexA - 1]) continue;
  
      let indexB = indexA + 1;
      let indexC = nums.length - 1;
  
      while (indexB < indexC) {
        const b = nums[indexB];
        const c = nums[indexC];
  
        if ((a + b + c) === target) {
          result.push(a, b, c);
        }
  
        if ((a + b + c) >= target) {
          while (nums[indexC - 1] === c) { indexC--; }
          indexC--;
        }
  
        if((a + b + c ) <= target) {
          while (nums[indexB + 1] === b) { indexB++ }
          indexB++
        }
      }
    }

    return { operators: result, multi: result.reduce((memo, item) => memo * item, 1) };
  }