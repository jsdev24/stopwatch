
let hourdiv = document.getElementById("hour");
let mindiv = document.getElementById("min");
let secdiv = document.getElementById("sec");
let btn = document.querySelector("button");
let hour = 0;
let minute = 0;
let second = 0;
let interval;
let condition = true;

window.onload = () => {
    hourdiv.innerHTML = mindiv.innerHTML = secdiv.innerHTML = "00";
}



btn.addEventListener("click", () => {
    
    if (condition) {
        interval = setInterval(() => {
            second++;

            if (second == 60) {
                minute++;
                second = 0;
            }

            if (minute == 60) {
                hour++;
                minute = 0;
            }

            secdiv.innerHTML = validate(second);
            mindiv.innerHTML = validate(minute);
            hourdiv.innerHTML = validate(hour);

        }, 1000);

        btn.innerHTML = "Pause";
        condition = false;

    } else {
        clearInterval(interval);
        btn.innerHTML = "Start";
        condition = true;
    }

})


let validate = (time) => {
    return (time < 10) ? "0" + time : time;
}
