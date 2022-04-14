/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    	if (nums.length < k) k = k % nums.length;

	const temp = nums.splice(nums.length - k, k);
    console.log(temp)
	nums.unshift(...temp);

	return nums

};