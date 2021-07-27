//sslider
const swiper2 = new Swiper('.swiper-2', {

  //  //button
  //  navigator: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //  },
   
  
   allowSlidePrev: true,
   allowSlideNext: true,

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


//tabs
var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}

//scroll to active item


AOS.init({


});
