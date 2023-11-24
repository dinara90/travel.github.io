<!-- функций на JS для открытия и закрытия бокового меню -->

function toggleNav() {
    var nav = document.getElementById("Sidenav");
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth > 768) {
        nav.style.width = (nav.style.width === "15%") ? "0" : "15%";
    } else {
        nav.style.width = (nav.style.width === "100%") ? "0" : "100%";
    }
}


function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
}