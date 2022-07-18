
/******** Swiper View ********/
function myFunction(x) {
  if (x.matches) { // If media query matches
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        clickable: true,
      },
    });
  } else {
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      pagination: {
        clickable: true,
      },
    });
  }
}

var x = window.matchMedia("(max-width: 720px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 600) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal('.home__container,.services,.team,.contacts,.footer', {
  interval: 200
})



ScrollReveal({ distance: '30px' });
ScrollReveal().reveal('.about__second,.app__img,.footer__copy', { origin: 'right' });
ScrollReveal().reveal('.about__first,.app__data,.footer__terms', { origin: 'left' });
/*=====================video======================*/


