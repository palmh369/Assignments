//Assignment -4 (Conditional Statements & Loops)

const transactions:number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditTransaction:number =0;
let debitTransaction:number = 0;
let totalCreditedAmount:number = 0;
let totalDebitedAmounnt:number = 0;
let totalSuspeciousTransaction:number = 0;

for(let i = 0; i < transactions.length; i++){
    if((transactions[i]!) > 0){
        creditTransaction++;
        totalCreditedAmount+=transactions[i]!;

        if((transactions[i]!) > 10000){

            totalSuspeciousTransaction++;
        }
    }else{
        debitTransaction++;
        totalDebitedAmounnt-=transactions[i]!;

         if((transactions[i]!) < -10000){
          
            totalSuspeciousTransaction++;
        }
    }
}
    const remainingAmount:number = totalCreditedAmount-totalDebitedAmounnt;
    console.log(`total number of credit transactions are:  ${creditTransaction}`);
    console.log(`total number of debit transactions are:  ${debitTransaction}`);
    console.log(`total amount credited:  ${totalCreditedAmount}`);
    console.log(`total amount debited:  ${totalDebitedAmounnt}`);
    console.log(`total remaining amount in bank:  ${remainingAmount}`);
    console.log(`total number of suspecious transactions are: ${totalSuspeciousTransaction}`);