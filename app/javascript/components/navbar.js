// function fixNavbarOnScroll() {
//   const navbar = document.getElementById('navbar-2');
//   window.addEventListener("scroll", (event) => {
//     if (window.scrollY >= 800) {
//         navbar.classList.add('navbar-fixed');
//       } else {
//         navbar.classList.remove('navbar-fixed');
//       }
//   });
// }

function fixNavbarOnScroll() {
  const navbar = document.getElementById('navbar-2');
  const sticky = navbar.offsetTop;

  window.addEventListener("scroll", (event) => {
    if (window.pageYOffset >= 1200) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
  });
}

export { fixNavbarOnScroll };


// function colFillLeftOnLarge() {
//   const

//   if ($(window).width() < 514) {
//       $('#test').removeClass('col-fill-left');
//   } else {
//       $('#test').addClass('col-fill-left');
//   }
// };

// export { colFillLeftOnLarge };
