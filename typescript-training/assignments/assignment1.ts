/* 1. Temperature of a city in degrees Celsius: 25.5        
2. Whether a customer has placed an order: true or false     
3. Person's phone number: "123-456-7890" 
4. Amount of money in a customer's bank account: 1000.50     
5. Person's email address: "john.doe@example.com"           
6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194    
7. Person's marital status: true or false  
8. Person's occupation: "Software Engineer" 
9. Person's favourite colour: "Blue"        
10.Current year: 2023                                             
11.Number of followers on a social media platform: 1,000,000      
12.Rating of a movie: 7.5                                         
13.Person's blood type: 'A'                    
14.Title of a book: "To Kill a Mockingbird"                      
15.Number of employees in a company: 500                         
16.Time of an event: 2:30 PM                               
17.Name of a country: "United States"                                 
18.Person's eye color: "Brown"                 
19.Person's birthplace: "New York City"         
20. Distance between two cities: 200.5 */            

interface personInfo {
    cityTemp: number,
    orderStatus: boolean,
    phoneNo: string,
    accBalance: number,
    emailAddress: string,
    coordinates: number[],
    maritalStatus: boolean,
    occupation: string,
    favColour: string,
    currentYear: number,
    noOfFollowers: number,
    rating: number,
    bloodType: string,
    bookTitle: string,
    noOfEmp: number,
    eventTime: string,
    country: string,
    eyeColor: string, 
    birthplace: string,
    distanceBetweenCities: number
}

let person: personInfo = {
    cityTemp: 25.5,
    orderStatus: true,
    phoneNo: "123-456-7890",
    accBalance: 1000.50,
    emailAddress: "john.doe@example.com",
    coordinates: [37.7749, -122.4194],
    maritalStatus: true,
    occupation: "Software Engineer",
    favColour: "Blue",
    currentYear: 2023,
    noOfFollowers: 1000000,
    rating: 7.5,
    bloodType: 'A',
    bookTitle: "To Kill a Mockingbird",
    noOfEmp: 500,
    eventTime: "2:30 pm",
    country: "United States",
    eyeColor: "Brown", 
    birthplace: "New York City",
    distanceBetweenCities: 200.5
} 

console.log(person);