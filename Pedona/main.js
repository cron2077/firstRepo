// PREVENT DEFAULT ON A-Tags

// document.getElementsByTagName('a').addEventListener('click', function (e) {
//     e.preventDefault();
// })



// MOBILE HAM SEARCH 

const mSearchBtn = document.querySelector('#mSearch');
const searchCont = document.querySelector('.mobile-search-container');
const searchClose = document.querySelector('#closeSearchM');

mSearchBtn.addEventListener('click', openSearchM);
searchClose.addEventListener('click', closeSearchM);

function openSearchM() {
    searchCont.style.display = "block";
}
function closeSearchM() {
    searchCont.style.display = "none";
}

//MOBILE UI HAM

const uiHamBtn = document.querySelector('#mUi');
const uiContainer = document.querySelector('.mobile-ui-container');
const closeUiBtn =document.querySelector('#closeUiBtn');

uiHamBtn.addEventListener('click', openUi);
closeUiBtn.addEventListener('click', closeUi);

function openUi() {
    uiContainer.style.display = "block";
}
function closeUi() {
    uiContainer.style.display = "none";
}

//SCROLL TO TOP
const docElement = document.documentElement;
const topBtn = document.querySelector('#toTopBtn');

document.addEventListener('scroll', scrollDetect);
topBtn.addEventListener('click', goUp);

function scrollDetect() {
    let scrollTotal = docElement.scrollHeight - docElement.clientHeight
//let scrollTotal = docElement.clientHeight - docElement.scrollHeight !!** first is scrollHeight
    if ( (docElement.scrollTop / scrollTotal) > 0.60 ) {
        topBtn.classList.add('show-scroll');
    }else {
        topBtn.classList.remove('show-scroll');
    }
}
function goUp() {
    docElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


//ACCORDION BTN FILTERS

const fBtns = document.getElementsByClassName('filter-open');
// let i; 

for(i = 0; i < fBtns.length; i++) {
    fBtns[i].addEventListener('click', function() {
        this.classList.toggle('active-filter');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


// Show Product Images On Mouseover


const thumbs = document.querySelectorAll('.optional-imgs');
const photos = document.querySelectorAll('.current-p-img')

thumbs.forEach( (e, i) => {
    e.addEventListener('mouseenter', () => {
        console.log(photos);
        photos[i].classList.add("visible");
    })
    e.addEventListener('mouseleave', () => {
        photos[i].classList.remove("visible");
    })
});
    


// let thumbnail = document.getElementsByClassName('.optional-imgs');
// let activeImg = document.getElementsByClassName('.visible');
// let visibleImg = document.getElementById('#currentImg');

// for( var i=0; i < thumbnail.length; i++ ) {

//     thumbnail[i].addEventListener('mouseover', function() {

//         if(thumbnail.length > 0){
//             thumbnail[0].classList.remove('visible')
//         }
//         this.classList.add('visible');
//         document.getElementById('#currentImg') = this.src;
//     });
// }


