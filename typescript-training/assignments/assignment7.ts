/* Assignment 7 : 
Write a program to perform the following tasks:
*/

let sentence:String = "Java programming is fun and challenging";

//Count the total number of words in the sentence.
let parts:string[] = sentence.split(" ");
console.log("the total number of words in the sentence is : "+parts.length);

//Print the sentence words in reverse order.
let reverseSentence=" ";
for(let i=parts.length-1; i>=0; i--){
   reverseSentence+=parts[i]+" ";
} 
console.log("the sentence words in reverse order : "+ reverseSentence);

//Convert the first character of each word to uppercase and print original sentence
    let result:string=" ";
    for(let i=0;i<=5;i++){
    result+=parts[i]!.charAt(0).toUpperCase()+parts[i]!.slice(1)+" ";
    }
    console.log("result is "+result);