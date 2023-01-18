// 1
// let fruit=["apple", "windows", "ubuntu"]
// fruit.forEach(function(e){
//     console.log(e.length)
// })
function isodd(e){
    return e%2==1;
}
function sumall(ac,e){
    return ac+e;
}
// 2
// let arr=["Masai", "School"]
// let ans=arr.map(function(e){
//     return e[0]
// })
// console.log(ans)
//3
// let arr=["assignment", "problem", "media", "upload"];

// let ans=arr.filter(function(e){
//     return e[0]=="a"||e[e.length-1]=="a"
// })
// console.log(ans)
//4
// let arr=["A", "Good", "Problem"]
// let ans=arr.map(function(e){
//     return e.length
// }).filter(isodd).reduce(sumall)
// console.log(ans)
// 5
let arr=[2, 4, 5, 3, 6, 8]
let ans=arr.filter(function(e,i){
    return e%2==0 && i%2==0
})
console.log(ans)