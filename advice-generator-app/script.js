document.documentElement.style.setProperty('--scale', String(screen.width / 1440));

function getQuote() {
    location.reload();
}

window.onload = getQuoteB();

function getQuoteB() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.adviceslip.com/advice");
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function() {
        data = xhr.response.slip;
        document.getElementById("quote-num").innerHTML = data.id;
        document.getElementById("quote").innerHTML = "\"" + data.advice + "\"";
    }
}