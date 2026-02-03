function revealAnimationObserver({ sections }) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed-section--init');
        observer.unobserve(entry.target);
      }
    });
  }, {});

  sections.forEach((section) => {
    observer.observe(section);
  });
}

export { revealAnimationObserver };
