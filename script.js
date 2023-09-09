// This is a function that returns the name of the current day
function getDayName() {
    let today = new Date();
    let day = today.getDay();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = weekday[day];
    return dayName;
}
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getDayName()

// For the display of Time


function showTime(element) {
    let options = {hour: "2-digit", minute: "2-digit", second: "2-digit"};
    setInterval(() => {
        let now = new Date();
        let time = now.toLocaleTimeString("en-US", options);
        element.textContent = time;
    }, 1000);
}

let element = document.querySelector('[data-testid="currentUTCTime"]');
showTime(element);
