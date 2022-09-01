//Display the current day and time in the following format Today is Tuesday and Current time is 10 PM : 30 : 38

function formatAMPM(date) {

    let day = date.toLocaleString('en-us', { weekday: 'long' });
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `Today is ${day} and Current time is ${hours} ${ampm} :${minutes}:${seconds}`;
    
}

console.log(formatAMPM(new Date()));

