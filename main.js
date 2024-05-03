var secHand = document.getElementById("secHand");
var minHand = document.getElementById("minHand");
var hourHand = document.getElementById("hourHand");

let setSec  = 90;
let setMin = 90;
let setHours = 90;

function getTime() {
    let d = new Date();

    secHand.style.transform = `rotate(${setSec + (d.getSeconds() * 6)}deg)`;

    minHand.style.transform = `rotate(${setMin + (d.getMinutes() * 6)}deg)`;
    
    hourHand.style.transform = `rotate(${setHours + (d.getHours() * 30)}deg)`

}

setInterval(getTime, 1000)

var d1 = new Date()

console.log(d1.getMinutes())
