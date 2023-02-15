/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modelViews = document.querySelectorAll('.services__model'),
      modelBtn = document.querySelectorAll('.services__button'),
      modelClose = document.querySelectorAll('.services__model-close');

const model = (modalClick) =>{
    modelViews[modalClick].classList.add('active__model');
}
modelBtn.forEach((mb, i)=>{
    mb.addEventListener('click', () =>{
        model(i);
    });
});

modelClose.forEach((i)=>{
    i.addEventListener('click', () =>{
        modelViews.forEach((mv)=>{
            mv.classList.remove('active__model');
        });
    }); 
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/