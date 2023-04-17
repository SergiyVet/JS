//task 1
/*
class CssClass {
    constructor(className, styles = {}) {
        this.className = className;
        this.styles = styles;
    }

    setStyle(property, value) {
        this.styles[property] = value;
    }

    removeStyle(property) {
        delete this.styles[property];
    }

    getCSS(){
        let cssString = `.${this.className} {`;

        for (const [property, value] of Object.entries(this.styles)) {
        cssString += `  ${property}: ${value};`;
        }

        cssString += `}`;

        return cssString;
    }
    
}
let result = new CssClass('css',{
    color: 'red',
    fontSize: '24px',
    backgroundColor: 'yellow'
  });
result.setStyle('font-size','24 px');
result.removeStyle('color');
console.log(result.getCSS());
*/
//task 2
/*
class Button {
    constructor(name,height,width){
        this.name = name;
        this.height = height;
        this.width = width;
    }
    showBtn(){
        document.write(`<button style = "width: ${this.width}px; height:${this.height}px">${this.name}</button>`)
    }
}
class BootstrapButton extends Button{
    constructor(name,height,width,color){
        super(name,height,width);
        this.color = color;
    }
    showBtn(){
        document.write(`<button style = "width: ${this.width}px; height:${this.height}px; color:${this.color};">${this.name}</button>`);
    }
}

let rez = new BootstrapButton('кнопка',200,200,'red');
rez.showBtn();
*/
//task 3
/*
class ExtendedDate extends Date {
  constructor(dateString) {
    super(dateString);
  }


  isFuture() {
    return this.getTime() > Date.now();
  }

  isLeapYear() {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

}

// Створюємо новий екземпляр класу ExtendedDate
const myDate = new ExtendedDate('2023-04-17');


// Перевіряємо, чи це майбутня дата
console.log(`Is future: ${myDate.isFuture()}`);

// Перевіряємо, чи це високосний рік
console.log(`Is leap year: ${myDate.isLeapYear()}`);
*/

