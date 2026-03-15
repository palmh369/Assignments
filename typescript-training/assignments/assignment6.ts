/* Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself. */

function isPrimeNumber(n:number): boolean{
    let divisor:number[] = [];
    if(n<1){
        console.log(`number should be greater than 0`);
         return false;
    }
    for(let i=1; i<=n; i++){
        if(n%i === 0 ){
           divisor.push(i);
        }
    }

    if(divisor.length === 2){
        console.log(`Divisors of ${n} are ${divisor}`)
        return true;
    }else{
        console.log(`Divisors of ${n} are ${divisor}`)
        return false;
    }
    
}
console.log(`Is 7 prime : ` + isPrimeNumber(7));
console.log(`Is 25 prime : ` + isPrimeNumber(25));
console.log(`Is 1 prime : ` + isPrimeNumber(1));
   
