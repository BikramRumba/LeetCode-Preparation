/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
       startIndex = 0;
    endIndex = nums.length -1;
    
    while(startIndex <= endIndex){
        let middleIndex = Math.floor((startIndex + endIndex)/2);
       
        if(target === nums[middleIndex]){
            return middleIndex;
        }
        if(target > nums[middleIndex]){
            startIndex = middleIndex +1;
        }
        else{
            endIndex = middleIndex-1
        }
        
        
    }
    return -1;
};