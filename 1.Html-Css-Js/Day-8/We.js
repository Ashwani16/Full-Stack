//1
let arr=[1, 2, 3, 4,5,6];
function isodd(e){
    return e%2==1;
}
function sumall(ac,e){
    return ac+e;
}
//1
// arr.forEach(function(el){   
//     console.log(el*el)
// })
//2
// let ans= arr.map(function(el){   
//         return (el+el)
//     });
//     console.log(ans)
//3
// console.log(arr.filter(function(el){
//     return el%2==1
// }))
//4
// console.log(arr.reduce(function(pr,e){
//     return e*pr
// }))
//5
//console.log(arr.filter(isodd).reduce(sumall))
//6
// let ans=arr.filter(function(e){
//     return e%3==0
// }).map(function(e){
//     return e*e*e;
// }).reduce(sumall)
// console.log(ans)
//7
// let user = [
//     { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
//     { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
//     { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
//   ];
//   let ans=user.map(function(e){
//     return e.firstName + " "+e.lastName;
//   })
//   console.log(ans)
//8
let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  let user=users.filter(function(e){
    return e.place=="Banglore"
  })
  let ans=user.map(function(e){
    return e.firstName + " "+e.lastName;
  })
  console.log(ans)