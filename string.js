//Task 1
//1
/*
let string = prompt("Input text");
let words = string.split(" ");
let arr = words.join('');
console.log(string.length - arr.length);
*/
//2
/*
let string = prompt("Input text");
string[0].toUpperCase();
console.log(string[0].toUpperCase()+string.slice(1, string.length));
*/
//3
/*
let string = prompt("Input text");
let words = string.split(' ');
console.log(words.length);
*/
//4
/*
let string = prompt("Input text");
let words = string.split(' ');
let arr = [];
for (const item of words) {
    arr.push(item[0].toUpperCase());
}
console.log(arr.join(''));
*/
//5
/*
let string = prompt("Input text");
for (let i = 0; i < string.length; i++) {
    if(string.startsWith(string[i]) && string.endsWith(string[i])){
        string = string.slice(0+1, string.length-1);
    }
    
}
string.length == 1 ? console.log("palindrome") : console.log("Not palindrome");
*/
//6
//let string = "https://career.softserveinc.com/uk-ua/technology/course";
let string = prompt("Input text");
let protocol = string.split("://");
console.log("Protocol: "+ protocol[0]);
let domain = protocol[1].split("/");
console.log("Domain: "+domain[0]);
let paths = [];
for (let i = 1; i < domain.length; i++) {
    paths.push(domain[i]);
}
let path = paths.join("/");
console.log("Path: "+path);