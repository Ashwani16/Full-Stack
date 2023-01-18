let employees = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'ana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];
console.log(employees)
employees.sort(function(a,b){
    if(a.firstName>b.firstName) return -1;
    if(a.firstName<b.firstName) return 1;
})
console.log(employees)
employees.sort(function(a,b){
    if(a.firstName>b.firstName) return 1;
    if(a.firstName<b.firstName) return -1;
})
console.log(employees)
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort((a,b)=>{
    if(a>b) return 1
    if(a<b) return -1
})
console.log(animals)
animals.sort((a,b)=>{
    if(a>b) return -1
    if(a<b) return 1
})
console.log(animals)
let numbers = [0, 1 , 2, 30, 10, 25, 40, 30 ];
numbers.sort((a,b)=>{
   return a-b
})
console.log(numbers)
numbers.sort((a,b)=>{
    return b-a
 })
 console.log(numbers)