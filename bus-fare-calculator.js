// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 

let age = 62;
if(age<10){
    console.log('children will get free ticket')
}
else if(age <=20){
    console.log('Students get a 50% discount')
}
else if(age >= 60){
    console.log('senior citizens gets a 15% Discount')
}
else{
    console.log('Regular ticket fare 800 tk')
}