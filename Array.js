/* ARRAY QUESTIONS */
//Q.1 TWo Sum
var twoSum = function (nums, target) {
	for (let i = 0; i <= nums.length; i++) {
		for (let j = 0; j <= nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};
