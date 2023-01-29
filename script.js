let menu = document.querySelector('#bars')
let navbar = document.querySelector('.nav-panel')

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active')
}

// let section = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header .nav-panel a');


window.onscroll = () => {
  
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  // section.forEach(sec =>{

  //   let top = window.scrollY;
  //   let height = sec.offsetHeight;
  //   let offset = sec.offsetTop - 150;
  //   let id = sec.getAttribute('id');

  //   if(top => offset && top < offset + height) {
  //     navlinks.forEach(linkss =>{
  //       linkss.classList.remove('active');
  //       document.querySelector('header .nav-panel a[href*='+id+']').classList.add('active');
  //     });
  //   };
  // });
}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('apply');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('apply')
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});





var swiper = new Swiper(".review-container", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

 function loader() {
   document.querySelector('.loader-gif').classList.add('fade-out');
 }

 function fadeOut() {
   setInterval(loader, 3000);
 }

 window.onload = fadeOut;







