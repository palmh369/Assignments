/* Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word */

const paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more."; 
const word:string = "java";
const parts:string[]=paragraph.split(" ");
let count:number = 0;
for(let i:number=0; i<parts.length-1; i++){
    if(parts[i]?.toLowerCase() === word){
        console.log("java word present in array at index : "+ i);
        count++;
    }
}
    console.log("total number of occurences of java are : "+count);