let bar = document.querySelector('.wrap__all .wrap__header .h__content .bar');
let menuMobile = document.querySelector('.menu__mobile');
let spans = document.querySelectorAll('.menu__mobile .main-menu .m__item span');
let subMenus = document.querySelectorAll('.menu__mobile .main-menu .m__item .sub-menu');
let btn2Top = document.querySelector('.btn2top');
let html = document.documentElement;
let body = document.body;

bar.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
})

window.onclick = (e) => {
    if (e.target.matches('.menu__mobile')) {
        menuMobile.classList.remove('active');
    }
}

for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', () => {
        subMenus[i].classList.toggle('active-sub');
        spans[i].classList.toggle('active-span');
    })
}

btn2Top.addEventListener('click', () => {
    html.scrollTop = 0;
    body.scrollTop = 0;
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