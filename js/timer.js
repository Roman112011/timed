let sec = 0;
let min = 0;
let hour = 0;
document.getElementById("timer").textContent = sec;
document.getElementById("timertwo").textContent = min;
document.getElementById("timerthree").textContent = hour;


function tick() {
    sec++;
    document.getElementById("timer").textContent = sec;
    console.log(sec);
    if (sec == 100) {
        sec = 0;
        min++;
        document.getElementById("timertwo").textContent = min;
        if (min == 100) {
            min = 0;
            hour++;
            document.getElementById("timerthree").textContent = hour;
            if (hour == 10) {
                hour = 0;
                min = 0;
                sec = 0;
                document.getElementById("timer").textContent = sec;
                document.getElementById("timertwo").textContent = min;
                document.getElementById("timerthree").textContent = hour;
                setTimeout(tick, 1000);
            }
            else
            {
                setTimeout(tick, 1000);
            }
        }
        else
            {
                setTimeout(tick, 1000);
            }
    }
    else
        {
            setTimeout(tick, 1000);
        }
}

tick();
