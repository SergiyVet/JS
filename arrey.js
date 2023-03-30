//Task 1
//1
/*
const arr = new Array(20); 

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1; 
}

console.log(arr);
*/

//2
/*
const arr = new Array(20); 

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1; 
  console.log(`[${i+1}] - ${arr[i]}`);
}

console.log(arr);
*/

//3
/*
var arr = new Array(20); 

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1; 
}
arr.sort((a, b) => a - b);
arr.reverse();
console.log(arr);
*/
//4
/*
var arr = new Array(20); 

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1; 
}
let index = arr.length / 2;
arr.fill(0,index);
console.log(arr);
*/
//5
/*
var arr = new Array(20); 

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1; 
}
let ar = arr.filter((a) => a % 7 ==0 );
console.log(ar);
console.log(arr);
*/

//6
/*
var arr = new Array(20); 

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1; 
}
console.log(arr);
arr.splice(0,3);
console.log(arr);
*/
//7
/*
var arr = new Array(20); 

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1; 
}
let ar = arr.filter((a) => a % 2 == 0);
console.log(arr);
console.log(ar.length);
*/
var arr = new Array(20); 

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 50) + 1; 
}
for (let item of arr) {
    for (let comparator of arr) {
        if(item === comparator){ 
            console.log('Duplicate '+item);
        }
    }
    
}

console.log(arr);


