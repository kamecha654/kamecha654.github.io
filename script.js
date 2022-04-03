y = ""

z = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple"
];

function ButtonActive(x) {
    for (i = 0; i < document.getElementById("buttons").children.length; i++) {
        document.getElementById("buttons").children[i].style.backgroundColor = null;
        document.getElementById("buttons").children[i].style.color = null;
    }

    document.documentElement.style.setProperty("--inactive", "hsl(25, 97%, 53%)");

    document.getElementById(x).style.backgroundColor = "var(--orange)";
    document.getElementById(x).style.color = "white";
    
    y = String(x)
}

function Submit() {
    if (y == "") {
        
        document.getElementById("submit").style.animation = "coolio 0.5s";
        setTimeout(
            function(){
                document.getElementById("submit").style.animation = "initial";
            },
            500
        );
    }

    else {
        document.getElementById("one").style.left = "calc(0% - calc(var(--const) * 2))";
        document.getElementById("two").style.right = "calc(50% - var(--const))";
    }

    document.getElementById("rating").innerHTML = "&nbsp" +  y + "&nbsp";
}