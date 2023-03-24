// Task 1
/*
let number = +prompt("Input number from 0 to 9");
switch (number) {
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
    case 0:
        alert(")");
        break;
    default:
        break;
}
*/

/*
let year = +prompt("Input year");
((((year % 400)==0) && (year % 100 !== 0)) || (year % 4)==0) ? alert("A leap year!") : alert("Not a leap year!");
*/

/*
let day = +prompt("Input day ");
let month = +prompt("Input month ");
let year = +prompt("Input year ");
alert(day+"."+month+"."+year);

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
     
    let maxDaysInMonth;
    if (month === 2) {
      maxDaysInMonth = isLeapYear ? 29 : 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      maxDaysInMonth = 30;
    } else {
      maxDaysInMonth = 31;
    }
    
const nextDay = day === maxDaysInMonth ? 1 : day + 1;
const nextMonth = day === maxDaysInMonth ? month === 12 ? 1 : month + 1 : month;
const nextYear = nextMonth === 1 && day === maxDaysInMonth ? year + 1 : year;
    
alert(nextDay+"."+nextMonth+"."+nextYear);
*/ 



//    Task2
/*
let a = +prompt("Start of list");
let b = +prompt("End of list");
let sum = 0;
for(let i=a;i<=b;++i){
    sum = sum+i;
}
alert(sum);
*/

/*
let number = prompt("Input number");
alert(number.length);
*/

/*
let positive =0;
let negative = 0;
let zero = 0 ;
let couples = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
    let number = +prompt("Input number "+i);
    if (number > 0) {
        positive++;
    }
    else if (number<0){
        negative++;
    }
    else{
        zero++;
    }
    number % 2 == 0 ? couples++ : odd++;
        
}
alert("Positive = "+positive);
alert("Negative = "+negative);
alert("Zero = "+zero);
alert("Couples = "+couples);
alert("Odd = "+odd);
*/

/*
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let i = 0;
let response = "";

while (true) {
  response = prompt(`${weekdays[i]}. Do you want to see the next day? Enter anything to continue or click OK to exit`);
  
  i = (i + 1) % weekdays.length; 
  if (response ==="") {
    break;
  }
}
*/


