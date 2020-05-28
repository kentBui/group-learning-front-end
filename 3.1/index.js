let bar = document.querySelector('.wrap__all .wrap__header .nav-bar .bar');
let menu = document.querySelector('.wrap__all .wrap__header .nav-bar .menu');
let html = document.documentElement;
let body = document.body;
let btn2Top = document.querySelector('.btn2top');

bar.addEventListener('click', () => {
    menu.classList.toggle('active');
})

btn2Top.addEventListener('click', () => {
    body.scrollTop = 0;
    html.scrollTop = 0;
    btn2Top.classList.add('inactive');
})

window.onscroll = () => {
    let pos = pageYOffset;
    if (pos < 30) {
        btn2Top.classList.add('inactive');
    }
    else {
        btn2Top.classList.remove('inactive');
    }
}