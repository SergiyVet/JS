/*
let data = {
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
    
    showTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },
    addSecound(){
        if(this.seconds == 59){
            this.seconds = 0;
            this.minutes += 1;
            console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        }
        else if(this.seconds == 59 && this.minutes == 59){
            this.seconds = 0;
            this.minutes = 0;
            this.hours +=1;
            console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        }
        else{
        console.log(`${this.hours}:${this.minutes}:${this.seconds+1}`);
        }
    },
    deleteSecound(){
        if(this.seconds == 0){
            this.seconds = 59;
            this.minutes -= 1;
            console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        }
        else if(this.seconds == 0 && this.minutes == 0){
            this.seconds = 59;
            this.minutes = 59;
            this.hours -=1;
            console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        }
        else{
        console.log(`${this.hours}:${this.minutes}:${this.seconds-1}`);
        }
    },
    time(){
        let formattedHours = this.hours.toString().padStart(2, '0');
        let formattedMinutes = this.minutes.toString().padStart(2, '0');
        let formattedSeconds = this.seconds.toString().padStart(2, '0');
        document.write(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    }
}
data.showTime();
data.addSecound();
data.deleteSecound();
data.time();
*/
//Task 2
let car = {
    manufacturer: "Volkswagen",
    model: "Jetta",
    year: 2011,
    speed: 120,
    show(){
        document.write(`Car: manufacturer - ${this.manufacturer}, model - ${this.model}, year of manufacture - ${this.year}, average
        speed - ${this.speed} km/h`)
    },
    time(distance){
        let result = Math.floor(distance/this.speed);
        console.log(result);
        let brea = Math.floor(result/4);
        document.write(`${result+brea} h`)
    }
}
car.show();
document.write("<br>")
let distance = +prompt("Input distance in km");
car.time(distance);