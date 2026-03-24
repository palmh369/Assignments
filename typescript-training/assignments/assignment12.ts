/* Implement pow(x, n), which calculates x raised to the power n (i.e., xn
).
*/
function calculatePower(x:number, n:number):void{
    let result:number = 1;

    if(n === 0){
        result= 1;
    }
    if(n<0){
        x =  1/x;
        n = -n;
    }
    for(let i:number=0; i<n; i++){
        result = result*x;
    }
    
console.log("result is "+result);
}

calculatePower(2.00000, 10);
calculatePower(2.10000, 3);
calculatePower(2.00000, -2);
   


