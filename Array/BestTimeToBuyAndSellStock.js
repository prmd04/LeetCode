const prices = [7,6,4,3,1];

const buyAndSell = function (prices) {
  let buyStock = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (buyStock > prices[i]) {
      buyStock = prices[i];
    }
    profit = Math.max(prices[i] - buyStock, profit);
  }
  return profit
};

console.log(buyAndSell(prices))