/* Assignment - 11 (Arrays and Loops)
Print the numbers in diamond-shaped pyramid of numbers.
Pattern should be as below.
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5
 1 2 3 4
  1 2 3
   1 2
    1 */

let n:number=5;
for(let i:number=1; i<=n; i++){
    let pattern:string="";
    for(let j:number=n; j>i; j--){
        pattern+=" ";
    }
    for(let k:number=1; k<=i; k++){
        pattern+=k+" ";
    }
    console.log(pattern);
}
for(let i:number=n-1; i>=1; i--){
    let pattern:string="";
    for(let j:number=n; j>i; j--){
        pattern+=" ";
    }
    for(let k:number=1; k<=i;k++){
        pattern+=k+" ";
    }
    console.log(pattern);

}