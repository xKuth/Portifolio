let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')
let rolaralto = document.getElementById('rolaralto')
let rolarmeio = document.getElementById('rolarmeio')
let rolarbaixo = document.getElementById('rolarbaixo')
const paragraphy = document.querySelectorAll('.swap')
console.log(paragraphy)



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

function swap_color_white(){
    document.body.style.backgroundColor = "#c7c4cd";
    for(propriet in paragraphy){
        paragraphy[propriet].style.color = 'black'
        console.log(paragraphy)
    }

}

function swap_color_black(){
    document.body.style.backgroundColor = '#22232a';
    for(propriet in paragraphy){
        paragraphy[propriet].style.color = 'white'
        console.log(paragraphy)
    }
}


