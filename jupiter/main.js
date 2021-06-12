
// OPEN/CLOSE SOCIAL MENU

const socialButton = document.querySelector('#socialBtn');
const socialBtnClose = document.querySelector('#closeSocial');
const socialMenu = document.querySelector('.social-menu-wrapper');

socialButton.addEventListener('click', openSocial);
socialBtnClose.addEventListener('click', closeSocial);

function openSocial() {
    socialMenu.style.display = 'flex';
}
function closeSocial() {
    socialMenu.style.display = 'none';
}

// OPEN/CLOSE HAM MENU 

const openHamBtn = document.querySelector('#hamMenuBtn');
const closeHamBtn = document.querySelector('#searchClose');
const hamMenu = document.querySelector('#searchHam');

openHamBtn.addEventListener('click', openHam);
closeHamBtn.addEventListener('click', closeHam);

function openHam() {
    hamMenu.classList.add('search-menu-container-active');
}
function closeHam() {
    hamMenu.classList.remove('search-menu-container-active');
}



//DESKTOP LOGIN MODAL 
const logBtn = document.querySelector('#logInD');
const logClose = document.querySelector('.d-login-close');
const loginModal = document.querySelector('.login-modal');

logBtn.addEventListener('click', openLogin);
logClose.addEventListener('click', closeLogin);

function openLogin() {
    loginModal.style.display = 'block';
}
function closeLogin() {
    loginModal.style.display = 'none';
}



//SCROLL TO TOP BUTTON
const docElement = document.documentElement;
const scrollBtn = document.querySelector('.scrollBtn-container');

document.addEventListener('scroll', scrollDetect);
scrollBtn.addEventListener('click', goToTop);

function scrollDetect() {
    let scrollTotal = docElement.scrollHeight - docElement.clientHeight
    if ( (docElement.scrollTop / scrollTotal) > 0.80 ) {
        scrollBtn.classList.add('show-scroll');
        // scrollBtn.style.display = 'block';
    }else {
        scrollBtn.classList.remove('show-scroll');
        // scrollBtn.style.display = 'none';
    }
}
function goToTop() {
    docElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}




// SHOW DESKTOP SEARCH 
// const deskSearch = document.querySelector('#dSearchBtn');
// const formSearch = document.querySelector('.desk-s-form');
// const siteElem = document.querySelector('#site');


// deskSearch.addEventListener('click', openSearchD);

// function openSearchD() {
//     formSearch.style.display = 'block';
// }

//outside click for closing the search
// window.addEventListener('click', outsideClick);
// function outsideClick(e) {
//     if(e.target == siteElem){
//         formSearch.style.display = 'none';
//     }
// }



// FAVORITES BTN 

// const favBtn = document.querySelector('#favBtn');

// favBtn.addEventListener('click', addColor);

// function addColor() {
    
// }




// CHANGE GRID/LIST FOR PRODUCTS 

const grd = document.querySelector('#drdBtn');
const listBtn = document.querySelector('#listBtn');
const container = document.querySelector('.products-container');

grd.addEventListener('click', makeGrid);
listBtn.addEventListener('click', makeList);

function makeGrid() {
    container.style.backgroundColor = 'green';
    container.classList.add('active-grid');
}
function makeList() {
    container.classList.remove('active-grid');
}