function addZero(i) 
{
    if (i < 10) 
    {
        i = "0" + i;
    }
    return i;
}

function clock()
{
    var date = new Date;
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());

    document.getElementById("header-clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);
window.onload = clock();