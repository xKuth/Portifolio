let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')
let rolaralto = document.getElementById('rolaralto')
let rolarmeio = document.getElementById('rolarmeio')
let rolarbaixo = document.getElementById('rolarbaixo')
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

