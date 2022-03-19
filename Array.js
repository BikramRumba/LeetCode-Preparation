/* ARRAY QUESTIONS
 */
/* Q.1 TWo Sum: 
Inputs:  num = [2, 7, 11, 15], target = 9
returns array with two elements [index1, index2]

*/
// function twoSum(nums, target) {
// 	for (let i = 0; i <= nums.length; i++) {
// 		for (let j = 0; j <= nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// }
// console.log(twoSum([2, 7, 11, 15], 9));

// const nums = [2, 7, 11, 15];
// target = 9;
// function twoSum(nums, target) {
// 	const map = new Map();
// 	const length = nums.length;
// 	for (i = 0; i < length; i++) {
// 		if (map[nums[i]] >= 0) {
// 			return [map[nums[i]], i];
// 		}
// 		map[target - nums[i]] = i; //Saving the index
// 	}
// }
// console.log(twoSum(nums, target));

// Sorting Algorithms

/* Bubble Sort
-->Bubble Sort meaning if the number is greater then it will bubble up and swap the position
it goes in ascending order in the array
*/

let array = [1, 3, 5, 6, 3, 1];
/* let sortedArray = array.sort();
console.log(sortedArray); */
/* let swapped;
function bubble() {
	swapped = false;
	let end = array.length - 1;
	for (i = 0; i < end; i++) {
		console.log('operation');
		if (array[i] > array[i + 1]) {
			//if the index is grater than next index
			swapped = true; // we need to swap it
			let temp = array[i]; // we storing that greater index in temp variable
			array[i] = array[i + 1]; // we placing that index with next order index
			array[i + 1] = temp;
		}
	}
	end--;
}

do {
	bubble(array);
} while (swapped);

console.log(array); */
// const array = [3, 6, 11, 3, 4];
