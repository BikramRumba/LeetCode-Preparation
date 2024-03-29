/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for (i= 0; i<s.length; i++){
        if( s[i] ==='(' || s[i] ==='{' ||  s[i] ==='['){
            stack.push(s[i]);
        }
        else{
            let lastValue = stack.pop();
            if( s[i] !== map[lastValue]) {
                return false
            }
        }
   
    }
         if(stack.length !== 0){
            return false
        }
        
    return true
    
};