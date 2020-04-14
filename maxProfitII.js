var maxProfitII = function(prices) {
  
  if(prices === null || prices.length === 0){
    return 0;
  }
  
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
      const possibleProfit = prices[i + 1] - prices[i];
      profit = Math.max(profit + possibleProfit, profit);
  }
  
  return profit;
};