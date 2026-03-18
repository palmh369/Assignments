// Best Time to Buy and Sell Stock

function maximizeProfit(prices:number[]):number{
    let minPrice = prices[0];
    let maxProfit:number = 0;
    let profit:number = 0;

    for(let i=1; i<prices.length; i++){
        if(prices[i]! < minPrice!){
            minPrice=prices[i];  
        }else{
            profit = prices[i]! - minPrice!;
        }
        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
    if(maxProfit === 0){
        console.log("No transactions are done and the maximum profit is : "+maxProfit);
    }
    return maxProfit;
}
//calling function for these input prices = [7,1,5,3,6,4]
let finalProfit = maximizeProfit([7,1,5,3,6,4]);
console.log("maximum profit is : " + finalProfit);

//calling function for these input prices = [7,6,4,3,1]
maximizeProfit([7,6,4,3,1]);
