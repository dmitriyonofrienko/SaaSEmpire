//sslider
const swiper = new Swiper('.swiper-container', {

   //button
   navigator: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },

   // Default parameters
   slidesPerView: 3.2,
   spaceBetween: 20,

   // Responsive breakpoints
   breakpoints: {
     // when window width is >= 320px
     320: {
       slidesPerView: 1.2,
       spaceBetween: 20
     },
     // when window width is >= 480px
     480: {
       slidesPerView: 1.2,
       spaceBetween: 20
     },
     // when window width is >= 640px
     768: {
       slidesPerView: 2.2,
       spaceBetween: 20
     },
     1024: {
      slidesPerView: 3.2,
      spaceBetween: 20
    }
   }
 });

 
 //smoothe-scroll
function scrollTo(el) {
  window.scroll(
     {
        left: 0,
        top: el.offsetTop,
        behavior: "smooth"
     }
  )
}

let buttonToCompanies = document.querySelector('.scroll-companies');
let buttonToAbout = document.querySelector('.scroll-about');
let buttonToContact = document.querySelector('.scroll-contact');


let blockCompanies = document.querySelector('.companies');
let blockAbout = document.querySelector('.about');
let blockContact = document.querySelector('.form');


buttonToCompanies.addEventListener('click', () => {
  scrollTo(blockCompanies)
}
)

buttonToAbout.addEventListener('click', () => {
  scrollTo(blockAbout)
}
)

buttonToContact.addEventListener('click', () => {
  scrollTo(blockContact)
}
)
//end smooth-scroll