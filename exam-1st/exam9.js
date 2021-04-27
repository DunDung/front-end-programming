let count = 0;

function printTime() {
    count++;
    console.log(new Date().toLocaleTimeString());
    if (count === 10) {
        clearInterval(interval)
    }
}

let interval = setInterval(printTime, 1000);
