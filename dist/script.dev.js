"use strict";

//sslider
var swiper = new Swiper('.swiper-container2', {
  //button
  navigator: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
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
}); //smoothe-scroll

function scrollTo(el) {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: "smooth"
  });
}

var buttonToCompanies = document.querySelector('.scroll-companies');
var buttonToAbout = document.querySelector('.scroll-about');
var buttonToContact = document.querySelector('.scroll-contact');
var blockCompanies = document.querySelector('.companies');
var blockAbout = document.querySelector('.about');
var blockContact = document.querySelector('.form');
buttonToCompanies.addEventListener('click', function () {
  scrollTo(blockCompanies);
});
buttonToAbout.addEventListener('click', function () {
  scrollTo(blockAbout);
});
buttonToContact.addEventListener('click', function () {
  scrollTo(blockContact);
}); //end smooth-scroll
//tabs

var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {
  tabNavs[i].addEventListener("click", function (e) {
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
    }

    ;
  });
} //scroll to active item