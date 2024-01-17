var delay = .5;

function toogleNavBar()
{
    const navElement = document.querySelector(".nav-container");
    const navMoreButtonElement = document.querySelector(".mobile-nav-more");
    const body = document.querySelector("body");

    if(navElement.style.display == "none" || navElement.style.display == "")
    {
        navBarIn(navElement, body, navMoreButtonElement);
    }
    else
    {
        navBarOut(navElement, body, navMoreButtonElement);
        setTimeout(function() {
            navElement.style.display = "none";
        }, (delay * 1000) - 10);
    }
}

function navBarIn(navElement, body, navMoreButtonElement) {
    navElement.style.animation = "slideIn " + delay + "s ease-in";
    navElement.style.display = "flex";
    body.style.overflow = "hidden";
    navMoreButtonElement.innerHTML = "<path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z'/>";
}

function navBarOut(navElement, body, navMoreButtonElement) {
    navElement.style.animation = "slideOut " + delay + "s ease-out";
    body.style.overflow = "auto";
    navMoreButtonElement.innerHTML = "<path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3'/>";
}