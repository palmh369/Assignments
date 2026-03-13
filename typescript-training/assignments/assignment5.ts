
//Assignment 5 (Conditional Statements & Loops)
//declare and initialize all the requied variables
let variablePay:number = 0;
let bonus:number = 0;
let reward:number = 0;
let hikeMap:Map<string,number> = new Map();
function calculateHike(name:string, baseSalary:number, experience:number, yearEndRating:number):void{
    if(yearEndRating >=4){
        variablePay = 15.0;
        bonus = 1500;
    }else if(yearEndRating >= 3 && yearEndRating < 4){
        variablePay = 10.0;
        bonus = 1200;
    }else if(yearEndRating <= 3){
        variablePay = 3.0;
        bonus = 300;
    }
    //Employees with Experience >= 5 Years get extra Reward of 5000
    if(experience >= 5){
        reward = 5000;
        console.log(`congratulations ${name} you got rewarded by ${reward} rupees`);
    }
    //calculate hike of employee
    let hike:number = (baseSalary * variablePay) + bonus + reward ;
    //calculate hike percentage of employee
    let hikePercentage:number = hike/baseSalary;
    //store all employees name and hike percentage in map
    hikeMap.set(name,hikePercentage);
    
}
//calling function
calculateHike("Alice Johnson", 75000.0, 5.1, 4.2);
calculateHike("Bob Smith", 68000.0, 3.2, 3.8);
calculateHike("Carol Davis", 82000.0, 7.1, 4.5);
calculateHike("David Brown", 90000.0, 10.2, 2.5);
calculateHike("Eva Green", 60000.0, 2.4, 3.5);
console.log(hikeMap);

