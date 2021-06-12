
//open-close settings

const setingBtn = document.querySelector(".settings")
const settingsBox = document.querySelector(".settings-modal")
const closeSetBtn = document.querySelector(".close-settings-btn")


setingBtn.addEventListener('click', openSettings)

function openSettings() {
    settingsBox.style.display = 'flex';
}
// outside click for closing
window.addEventListener('click', outsideCkick)
function outsideCkick(e) {
    if(e.target == settingsBox) {
        settingsBox.style.display = 'none'
    }
}
// close with btn
closeSetBtn.addEventListener('click', closeSetting)
function closeSetting() {
    settingsBox.style.display = 'none'
}


//COLORS select

const colors = document.querySelectorAll(".click-detect")
console.log(colors)

// for(let i = 0; i < colors.length; i++) {
//     colors[i].addEventListener('click', function() {
//         this.classList.toggle('active-clr')
//     })
// }

for(let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
        console.log(colors[i])
        colors[i].previousElementSibling.classList.toggle('active-clr')
    })
}

// Tabs 
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

console.log(tabs)
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        // console.log(tab)
        // za da se pokaje sudurjanieto na taba
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active-tab-content')
        })
        // za da pokaje koi tab e activen
        tabs.forEach(tab => {
            tab.classList.remove('active-tab')
        })
        tab.classList.add('active-tab')
        target.classList.add('active-tab-content')
    })
})

// test add class for card

const games = document.querySelectorAll('.game-box')
const bgLayer = document.querySelectorAll('.background-layer-game')


games.forEach((game, i) => {
    game.addEventListener('mouseover', () => {
        bgLayer[i].classList.add('active-bg')
    })
    game.addEventListener('mouseleave', () => {
        bgLayer[i].classList.remove('active-bg')
    })
})

// prevent default on a-tags
// const a = document.querySelectorAll('a')
// console.log(a)
// a.forEach((tag) => {
//     tag.addEventListener('click', (e) => {
//         e.preventDefault()
//     })
// })
