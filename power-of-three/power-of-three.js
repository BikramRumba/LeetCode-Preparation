/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
 // if(num === 3 || num===1) return true;
 //        if(num === 0) return false;
 //        let ifPower = Math.pow(3,n);
 //        if(ifPower === num){
 //            return true;
 //        }
 //        if(num%ifPower === num){
 //            return false;
 //        }
 //        return isPowerOfThree(num, n+1);

    while(n > 1){
        n /= 3
    }
    
    return n === 1
};