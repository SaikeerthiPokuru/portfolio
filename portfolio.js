// // toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.oneclick = ()=> {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// };


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
//       });
//     };
//   });

//   let header = document.querySelector('header');

//   header.classList.toggle('sticky', window.scrollY > 100);

// };

/// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};

// Remove toggle icon and navbar active class when a navbar link is clicked (scroll)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// scroll reveal

ScrollReveal({ 
  reset: true ,
  distance:'80px',
  duration:2000,
  delay:200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .about .skills', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js

// const typed = new typed('multiple-text', {
  // strings:['Frontend Developer','And','Java Developer'],
  // typedSpeed: 100,
  // backSpeed: 100,
  // backDelay: 1000,
  // loop: true,
  
// });

const typed = new Typed('#typed-output', {
  strings: ["Frontend Developer","&","Java Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay:1000,
  showCursor: false,
  loop:true,
});