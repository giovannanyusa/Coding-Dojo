console.log("page loading...");

var cookieDiv = document.querySelector(".cookie-policy");

function loading() {
    alert("Loading weather report...")
}

function accept() {
    cookieDiv.remove();
}

function tempconvert(temp,type){
    if(type == "°F") {
        return Math.round(9 / 5 * temp + 32);
    } else {
        return Math.round(5 / 9 * (temp - 32));    
    }
}

function convert(temperature) {
    console.log(temperature.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        // This is temp1 if var is 1! Note how the eight IDs are linked here
        // var tempVal = parseInt(tempSpan.innerText);
            tempSpan.innerText = tempconvert(tempSpan.innerText,temperature.value);
    }
}