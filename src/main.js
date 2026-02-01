import './main.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/logoCloud.css';
import './styles/benefits.css';
import './styles/features.css';
import './styles/specifications.css';
import './styles/testimonial.css';
import './styles/how-to.css';
import './styles/footer.css';

const burgerButton = document.getElementById('burger');
const mobileMenuOpen = document.getElementById('burger-open');
const mobileMenuClose = document.getElementById('burger-close');
const mobileMenu = document.getElementById('mobile-menu');
const mainNavLinks = document.querySelectorAll('.link--hovered');

function mobileMenuHandler() {
  if (mobileMenuOpen && mobileMenuClose && mobileMenu) {
    mobileMenuOpen.classList.toggle('navbar-burger__open--hidden');
    mobileMenuClose.classList.toggle('navbar-burger__close--visible');
    const isOpen = mobileMenu.classList.toggle('mobile-menu--visible');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

if (burgerButton) {
  burgerButton.addEventListener('click', mobileMenuHandler);
}

if (mainNavLinks) {
  mainNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('mobile-menu--visible')) {
        mobileMenuHandler();
      }
    });
  });
}
