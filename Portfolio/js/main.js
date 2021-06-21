
// SHOW photos on mouse hover
//querySelectorAll zaradi .forEach() s classname nqma da raboti

const projects = document.querySelectorAll("li");
const photos = document.querySelectorAll("img");

projects.forEach( (li, i) => {
    li.addEventListener('mouseenter', () => {
        // console.log(photos);
        photos[i].classList.add("show-photo");
    })
    li.addEventListener('mouseleave', () => {
        photos[i].classList.remove("show-photo");
    })
    li.addEventListener('mousemove', () => {
//photos[i].style.left = e.clientX * .4 + 'px';//raboti samo ako snimkite sa position absolute
    })// style.left e css propertito left
});



//DORK MODE SWITCH 
// v eventlistener-a(na butona) 6te vikame v if/else 2 funkcii

let darkMode = localStorage.getItem('darkmode');
const themeToggleBtn = document.querySelector('#checkboxSwitch');

//  check if dark mode is on
//  if enabled turn off
//  if disabled turn on

const enableDark = () => {
    // 1 add class to the body element
    document.body.classList.add("darkmode");
    // 2 update dark mode in localStorage
    localStorage.setItem("darkmode", "enabled");
}
const disableDark = () => {
    // 1 remove class dark from body
    document.body.classList.remove("darkmode");
    // 2 update local storage
    localStorage.setItem("darkmode", null);
}

// tozi if pravi taka 4e sled page refresh izbraniq mode ostava
if(darkMode === "enabled") {
    enableDark();
} 

themeToggleBtn.addEventListener('click', () => {
    // console.log("heeeee")
    darkMode = localStorage.getItem("darkmode");
    if(darkMode !== "enabled") {
        enableDark();
        // console.log(darkMode);
    } else {
        disableDark();
    }
})

//login MODAL
const closeSpesialBtn = document.querySelector(".close-btn");
const openSpecialBtn = document.querySelector(".special");
const modalS = document.querySelector(".message-box");


openSpecialBtn.addEventListener('click', openSpecial);
closeSpesialBtn.addEventListener('click', closeSpecial);
function openSpecial() {
    modalS.style.display = 'flex';
}
function closeSpecial() {
    modalS.style.display = 'none';
}
window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if(e.target === modalS)
    modalS.style.display = 'none';
}