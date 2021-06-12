

// OPEN-CLOSE Search---------------------------
const openSearch = document.querySelector('#openSearch');
const searchForm = document.querySelector('#searchContainer');
const closeSearch = document.querySelector('#closeSearch');

closeSearch.addEventListener('click', closeForm);
openSearch.addEventListener('click', openForm);

function openForm() {
    searchForm.classList.add('show-search');
}
function closeForm() {
    searchForm.classList.remove('show-search');
}


// OPEN-CLOSE User icons------------------------
const openUserBtn = document.querySelector('#hamBtn');
const userMenu = document.querySelector('#userMenu');
const closeUserBtn = document.querySelector('#closeUserMenu');

openUserBtn.addEventListener('click', openUser);
closeUserBtn.addEventListener('click', closeUser);

function openUser() {
    userMenu.classList.add('show-user-menu');
}
function closeUser() {
    userMenu.classList.remove('show-user-menu');
}


//COUNTDOWN ------------------------------
let countDownDate = new Date("May 21 ,2021 15:37:25").getTime();
let htmlEl = document.querySelector('.date-ul');

let container = setInterval( function() {
    // get current date
    let currentDate = new Date().getTime();

    //the time between now and the set time
    let distance = countDownDate - currentDate;

    //Calculations for d,h,m,s
    let myDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    let myHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let myMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let mySeconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Show the rezult in html elements
    document.getElementById("day").innerHTML = myDays;
    document.getElementById("hours").innerHTML = myHours;
    document.getElementById("minutes").innerHTML = myMinutes;
    document.getElementById("seconds").innerHTML = mySeconds;

    // if the time is up
    if ( distance < 0 ) {
        clearInterval(container);
        document.querySelector('.deal-title').innerHTML = "Deal Expired";
        document.querySelector('.deal-title').style.color = "red";
        htmlEl.style.display = "none";
    }

}, 1000);

//TO TOP BUTTON

const docElem = document.documentElement;
const toTopBtn = document.querySelector('#toTopBtn');

toTopBtn.addEventListener('click', goUp);
document.addEventListener('scroll', scrollDetect);

function scrollDetect() {
    let totalScroll = docElem.scrollHeight - docElem.clientHeight
    if( (docElem.scrollTop / totalScroll) > 0.70 ) {
        toTopBtn.classList.add('show-btn');
    } else {
        toTopBtn.classList.remove('show-btn');
    }
}
function goUp() {
    docElem.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//CATEGORIES MOBILE MENU
const catBtn = document.querySelector('#catOpen');
const catMenu = document.querySelector('.cat-container');
const closeCat = document.querySelector('.close-cat');

catBtn.addEventListener('click', openCat);
closeCat.addEventListener('click', closeCatMenu);

function openCat() {
    catMenu.style.display = "flex";
}
function closeCatMenu() {
    catMenu.style.display = "none";
}