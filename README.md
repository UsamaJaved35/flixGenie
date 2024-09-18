// arr=[1,2,3,4,5]

// let sum =arr.reduce((acc,curr)=>{
//   acc = acc+curr 
//   return acc;
// },0)

// console.log(sum)

//find max

// let maxi = arr.reduce((max, curr)=>{
//     if(curr>max)
//     {
//         max=curr;
//     }
//     return max;
// },0)
// console.log(maxi)
const users = [
{ firstName: "Alok", lastName: "Raj", age: 23 },
{ firstName: "Ashish", lastName: "Kumar", age: 29 },
{ firstName: "Ankit", lastName: "Roy", age: 29 },
{ firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// let res=[]
// res=users.map((user) =>
//     user.firstName + " " + user.lastName
// )

// console.log(res)

let res ={}

// res=users.reduce((acc,curr)=>{
//     if(acc[curr.age]=== undefined)
//     {
//       acc[curr.age]=1 
//     }
//     else
//     {
//         acc[curr.age]++;
//     }
//     return acc;
// },{})

// let v=[];
// // v = users.filter((user)=> user.age < 30).map((user)=> user.firstName);
// v=users.reduce((acc,curr)=>{
//     if(curr.age < 30)
//     {
//         acc.push(curr.firstName);
//     }
//     return acc;
// },[])
// console.log(v)


// const URL = "https://api.github.com/users/alok722";
// const user = fetch(URL);
// const promise = new Promise((resolve, reject) => 
// setTimeout(()=>{
//     resolve("hello")
// },3000)
// )
// function f(){
//     setTimeout(()=>{
//         console.log("2nd")
// },1000)
// }
// // promise.then(function (data) {
// // console.log(data);
// // }).then(()=> f())
// // console.log("hel")
// const test = async ()=>{
//     await promise;
//     await f();
// console.log("hel")
// }
// test()
// const p1 = new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve('Promise resolved value by p1!!');
// }, 5000);
// })
// const p2 = new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve('Promise resolved value by p2!!');
// }, 10000);
// })
// async function handlePromise() {
// console.log('Hi');
// const val = await p1;
// console.log('Hello There!');
// console.log(val);
// const val2 = await p2;
// console.log('Hello There! 2');
// console.log(val2);
// }
// handlePromise();
// console.log('Hello nnechay');

// function f(){
//     console.log(this)
// }
// f()
// const a = () =>{
//     console.log(this)
// }
// a()

// const obj={
//     a:20,
//     x: ()=>{
//         function y(){
//             function z(){
//                 console.log(this)
//             }
//             z()
//         }
//         y()
//     }
// }
// obj.x()
// arr=[5,7,0,9]
// console.log(Math.max())
// // console.log(Math.max.apply(null,arr))
// function createBase(n)
// {
//     let num = n
//     return function (num1)
//     {
//         console.log(num+num1)
//     }
// }

// var addSix=createBase(6)
// addSix(10) // 16
// addSix(21) //27

// function anagram(str)
// {
//     let j = str.length -1
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!==str[j])
//         {
//             return false;
//         }
//         j--;
//     }
//     return true
//     // return str === str.split("").reverse().join("")
// }
// anagram("abbba1") ? console.log("anagram") : console.log("nahi")

// let arr=[[1],[2,3],[4,5,6],[7,8,9]]

// function f(ar){
//     // return ar.reduce((acc,curr)=>
//     // acc.concat(Array.isArray(curr) ? f(curr) : curr),[])
//     return ar.reduce((acc,curr)=>{
//         if(Array.isArray(curr))
//         {
//             acc = acc.concat(f(curr))
//         }
//         acc = acc.concat(curr)
//         return acc;
//     },[])
// }
// console.log(f(arr));
// console.log(arr);



// function foo()
// {
//     for(var i=0;i<6;i++)
//     {
//         f(i)
//     }
//     function f(i)
//     {
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }
// foo()
// let arr = [1,2,3,5,6,7,8,9,10];
// const findMissing=(arr)=>{
//     let n = arr.length+1
//     let sum = (n*(n+1))/2;
//     let sumArr=arr.reduce((sum,curr)=> sum+curr,0)
//     return sum - sumArr;
// }

// console.log(findMissing(arr))
// let arr = [1,2,3,5,6,6,7,8,9];
// const findDuplicate=(arr)=>{
//     map={}
//     for(let i=0;i<arr.length;i++)
//     {
//         map[arr[i]]= (map[arr[i]] || 0) + 1;
//     }
//     for(let i=0;i<arr.length;i++)
//     {
//         if(map[arr[i]]!=1)
//         return arr[i];
//     }
//     return -1;
// }

// console.log(findDuplicate(arr))

// function bubbleSort(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1])
//             {
//                 // console.log(arr[j])
//                 // let temp =arr[j]
//                 // arr[j]=arr[j+1]
//                 // arr[j+1]=temp
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     console.log(arr)
//     return arr;
// }

// let a=[0,5,-2,-3,7,8,9,1,2]
// console.log(bubbleSort(a))
// var a=200
// function f(){
//     var a=20
//     console.log(a)
// }
// f()
// console.log(a)