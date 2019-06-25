var addZero = function(i) 
{
    return ( i < 10 ) ? "0" + i  :  i;
}

function clock()
{
    var date = new Date;
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());

    document.querySelector("#header-clock").innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);
clock();