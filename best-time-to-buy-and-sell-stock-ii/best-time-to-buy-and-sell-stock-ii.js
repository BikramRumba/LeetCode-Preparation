/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = [];
    for(i=0; i<prices.length; i++){
            if(prices[i] <= prices[i+1] ){
                let temp = prices[i+1] -prices[i];
                 profit.push(temp);
            
        }
    
    }
    console.log(profit)
    if (profit.length === 0){
        return 0
    }else{
  return  profit.reduce((a,b)=> a+b)}
    
    

    
};