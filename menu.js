let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')
let rolaralto = document.getElementById('rolaralto')
let rolarmeio = document.getElementById('rolarmeio')
let rolarbaixo = document.getElementById('rolarbaixo')
const paragraphy = document.querySelectorAll('.swap')
const emphasis = document.querySelectorAll('.swap-red')
const specialty = document.querySelectorAll('.especialidade-box')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
});
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
});
function rolarpg1(){
    rolaralto.scrollIntoView({behavior:"smooth"})
}
function rolarpg2(){
    rolarmeio.scrollIntoView({behavior:"smooth"})
}
function rolarpg3(){
    rolarbaixo.scrollIntoView({behavior:"smooth"})
}

function swap_color_default(){
    document.body.style.backgroundColor = '#CAB9B5'
    for (let p = 0; p < paragraphy.length; p++){
        paragraphy[p].style.color = 'white'
    }
    for (let i = 0; i < emphasis.length; i++){
        emphasis[i].style.color = '#4B271D'
    }
}

function swap_color_white(){
    document.body.style.backgroundColor = "#c7c4cd";
    for (let p = 0; p < paragraphy.length; p++){
        paragraphy[p].style.color = 'black'
    }
    for (let i = 0; i < emphasis.length; i++){
        emphasis[i].style.color = '#6c2cf1'
    }
   
}

function swap_color_black(){
    document.body.style.backgroundColor = '#22232a';
    for (let p = 0; p < paragraphy.length; p++){
        paragraphy[p].style.color = 'white'
    }
    for (let i = 0; i < emphasis.length; i++){
        emphasis[i].style.color = 'rgb(189, 35, 35)'
    }
}
