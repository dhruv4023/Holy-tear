/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar burger */
// navBar
var navBar = document.getElementById("navBar");
var burger = document.getElementById("burger");
// menues
var home = document.getElementById("Home");
var about = document.getElementById("About");
var contact = document.getElementById("Contact");
// animation
// var loader = document.getElementById("load");
// active menu
const homeNavItem = document.getElementById("homeNavItem");
const aboutNavItem = document.getElementById("aboutNavItem");
const contactNavItem = document.getElementById("contactNavItem");

function navigationBar() {
    console.log(navBar);
    if (navBar.style.display === "flex") {
        // navBar.style.display = "none";
        // burger.style.display = "fixed";
    } else {
        burger.style.display = "none";
        navBar.style.display = "flex";
    }
}

function homeCnt() {
    console.log(navBar);
    home.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    // loader.style.display = "none";

    homeNavItem.classList.add("active")
    aboutNavItem.classList.remove("active")
    contactNavItem.classList.remove("active")
    // i.forEach(ltx => ltx.classList.remove("active"));

}
function aboutCnt() {
    console.log(navBar);
    home.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";

    homeNavItem.classList.remove("active")
    aboutNavItem.classList.add("active")
    contactNavItem.classList.remove("active")
}
function contactCnt() {
    console.log(navBar);
    home.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";

    homeNavItem.classList.remove("active")
    aboutNavItem.classList.remove("active")
    contactNavItem.classList.add("active")
}
function hideNavigationBar() {
    burger.style.display = "block";
    navBar.style.display = "none";
}




function activemenu() {
    i[len].classList.add("active");
}