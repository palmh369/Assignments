/* Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself. */

function isPrimeNumber(n:number): boolean{
    let divisor:number[] = [];
    if(n<1)
         return false;
    
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
console.log(`7 is prime : ` + isPrimeNumber(7));
console.log(`25 is prime : ` + isPrimeNumber(25));
console.log(`1 is prime : ` + isPrimeNumber(1));
   
