// For the display of DATE
let today = new Date();
let day = today.getDay();
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = weekday[day];
document.getElementById("day").innerHTML = dayName

// For the display of Time
setInterval(showTime, 1000);
function showTime() {
    let now = new Date();
    let options = {hour: "2-digit", minute: "2-digit", second: "2-digit"};
    let time = now.toLocaleTimeString("en-US", options);
    let element = document.getElementById("time");
    element.innerText = time;
}
