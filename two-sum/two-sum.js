/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

 let newArr=[]
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<i;j++){
            if(nums[i]+nums[j]===target){
             newArr.push(i,j)   
            }
        }
    }
    return newArr;
    
}