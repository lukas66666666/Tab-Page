function updateTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = checkTime(minutes);
    let month = date.getMonth();
    let day = date.getDate();
    let dayOfWeek = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let clock = `<p id="clock">${hours}:${minutes}</p>
    <p id="date">${days[dayOfWeek]} ${day}.${month + 1}.</p>`;
    document.getElementById("clockContainer").innerHTML = clock;
    setTimeout(updateTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

updateTime();