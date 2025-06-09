document.addEventListener('DOMContentLoaded', () => {
  const OFFSET = 60;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});
