
// OPEN / CLOSE functionality for mobile ham menu

const leftBtn = document.querySelector('#leftHamBtn');
const closeHamBtnLeft = document.querySelector('.close-ham-left');
const leftMenu = document.querySelector('.mobile-menu-container');

const rightBtn = document.querySelector('#rightHamBtn');
const closeHamBtnRight = document.querySelector('#closeHmRight');
const rightMenu = document.querySelector('.mobile-menu-container-right');

// adding event listeners for the clicks
leftBtn.addEventListener('click', openLeftM);
closeHamBtnLeft.addEventListener('click', closeLeftM);

rightBtn.addEventListener('click', openRightM);
closeHamBtnRight.addEventListener('click', closeRightM);
// the functions
function openLeftM() {
    leftMenu.style.display = "block";
}
function closeLeftM() {
    leftMenu.style.display = "none";
}

function openRightM() {
    rightMenu.style.display = "block";
}
function closeRightM() {
    rightMenu.style.display = "none";
}



// SCROLL TO TOP BTN
let docElem = document.documentElement;
let scrollBtn = document.querySelector('#scrlBtn');


function scrollDetect() {
    let scrollTotal = docElem.scrollHeight - docElem.clientHeight
    if ( (docElem.scrollTop / scrollTotal) > 0.80) {

        scrollBtn.classList.add("ToTopBtn-container-show");
        //scrollBtn.style.display = "block" -simple way
    }else {
        scrollBtn.classList.remove("ToTopBtn-container-show");
        //scrollBtn.style.display = "none" -simple way
    }
}
function scrollToTop() {
    docElem.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', scrollDetect);


// DESKTOP LOGIN FORM 
const dFormBtn = document.querySelector('#dFormLink');
const dFormCloseBtn = document.querySelector('#closeDeskF');
const dForm = document.querySelector('.desktop-form-wrapper');

dFormBtn.addEventListener('click', openDeskForm);
dFormCloseBtn.addEventListener('click', closeDeskForm);

function openDeskForm(event) {
    event.preventDefault();
    dForm.style.display = "block";
}
function closeDeskForm(event) {
    event.preventDefault();
    dForm.style.display = "none";
}



// preventing default a-tag action =scrolling to top 
// let aTags = document.querySelectorAll('a[target]');

// aTags.addEventListener('click', prevent());

// function prevent(event) {
//     event.preventDefault();
// }
    