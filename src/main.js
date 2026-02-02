import './main.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/logoCloud.css';
import './styles/benefits.css';
import './styles/features.css';
import './styles/specifications.css';
import './styles/testimonial.css';
import './styles/how-to.css';
import './styles/hero-image.css';
import './styles/cta.css';
import './styles/footer.css';
import { resizeListener, toggleMobileMenuHandler } from './modules/mobileMenu';

const ui = {
  burgerButton: document.getElementById('burger'),
  mobileMenuOpen: document.getElementById('burger-open'),
  mobileMenuClose: document.getElementById('burger-close'),
  mobileMenu: document.getElementById('mobile-menu'),
  mainNavLinks: document.querySelectorAll('.link--internal'),
  resizeBreakPoint: window.matchMedia('(min-width: 799px)'),
};

if (ui.burgerButton) {
  ui.burgerButton.addEventListener('click', () => toggleMobileMenuHandler(ui));
}

if (ui.mainNavLinks) {
  ui.mainNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (ui.mobileMenu.classList.contains('mobile-menu--visible')) {
        toggleMobileMenuHandler(ui);
      }
    });
  });
}

ui.resizeBreakPoint.addEventListener('change', (e) => resizeListener(e, ui));
