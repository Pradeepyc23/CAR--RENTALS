let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

function toggleMenu() {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

menu.onclick = toggleMenu;

window.addEventListener('resize', () => {
  // Check screen size and adjust menu behavior accordingly
  if (window.innerWidth > 768) {
    // Remove active class from navbar if menu is open on larger screens
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
    }
    // Remove event listener for closing menu on click outside on larger screens
    window.removeEventListener('click', closeMenuOnClick);
  } else {
    // Add event listener for closing menu on click outside on smaller screens
    window.addEventListener('click', closeMenuOnClick);
  }
});

function closeMenuOnClick(event) {
  if (!event.target.matches('#menu-icon') && !event.target.closest('.navbar')) {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
}

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
});

sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container form', { delay: 800, origin: 'left' });
sr.reveal('.heading', { delay: 800, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 600, origin: 'top' });
sr.reveal('.services-container .box', { delay: 600, origin: 'top' });
sr.reveal('.about-container .box', { delay: 600, origin: 'top' });
sr.reveal('.reviews-container', { delay: 600, origin: 'top' });
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' });




