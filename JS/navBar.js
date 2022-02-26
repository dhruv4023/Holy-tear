/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar burger */
var navBar = document.getElementById("navBar");
var home = document.getElementById("Home");
var about = document.getElementById("About");
var contact = document.getElementById("Contact");
var loader = document.getElementById("load");
function navigationBar() {
    console.log(navBar);
    if (navBar.style.display === "flex") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "flex";
    }
}
function homeCnt() {
    console.log(navBar);
    home.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    loader.style.display = "none";
}
function aboutCnt() {
    console.log(navBar);
    home.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
}
function contactCnt() {
    console.log(navBar);
    home.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
}
function hideNavigationBar(){
    navBar.style.display = "none";    
}

