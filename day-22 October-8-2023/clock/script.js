const today = document.getElementById('today');
const now = document.getElementById('now');
const newYear = document.getElementById('newYear');

const doubleDigit = (num) => {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}

// function to calculate the remaining time from next year
const remainingTime = () => {
    const d = new Date();
    const newYearDate = new Date(d.getFullYear() + 1, 0, 1);
    const remaining = newYearDate - d;
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);
    newYear.textContent = days + " days " + doubleDigit(hours) + ":" + doubleDigit(minutes) + ":" + doubleDigit(seconds);
}
remainingTime();

const clock = () => {
    const d = new Date();
    today.textContent = doubleDigit(d.getDate())+"-"+ d.toLocaleString('default', { month: 'long' })+"-"+d.getFullYear();
    now.textContent = doubleDigit(d.getHours())+":"+doubleDigit(d.getMinutes())+":"+doubleDigit(d.getSeconds());
}
clock();


setInterval(()=>{clock(); remainingTime()}, 1000);

/* 
 function ashraf (bari) {
    this.bari = bari;
}

 function Date () {
    this.bari = bari;
    getDate =- function () {
    }
}
const ashrafObj =  new ashraf("Uttara");

class hasanVai {
    personName = "Hasanuzzaman";
    personAge = 25;
    spouse = "Mukta";
    details = function () {
        return "His name is " + this.personName + ", his age is " + this.personAge + " and his wife's name is " + this.spouse;
    }
}

const hasanVaiObj = new hasanVai;
hasanVaiObj.spouse = "Mollika";
today.innerHTML = hasanVaiObj.details();

*/