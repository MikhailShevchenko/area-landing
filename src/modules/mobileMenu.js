function toggleMobileMenuHandler({
  mobileMenuOpen,
  mobileMenuClose,
  mobileMenu,
}) {
  if (mobileMenuOpen && mobileMenuClose && mobileMenu) {
    mobileMenuOpen.classList.toggle('navbar-burger__open--hidden');
    mobileMenuClose.classList.toggle('navbar-burger__close--visible');
    const isOpen = mobileMenu.classList.toggle('mobile-menu--visible');

    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}

function resizeListener(e, ui) {
  const { mobileMenu, mobileMenuOpen, mobileMenuClose } = ui;

  if (e.matches) {
    if (mobileMenu && mobileMenuOpen && mobileMenuClose) {
      mobileMenu.classList.remove('mobile-menu--visible');
      mobileMenuOpen.classList.remove('navbar-burger__open--hidden');
      mobileMenuClose.classList.remove('navbar-burger__close--visible');
      document.body.style.overflow = '';
    }
  }
}

export { toggleMobileMenuHandler, resizeListener };
