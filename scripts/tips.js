document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tips__item');

  items.forEach((item) => {
    const trigger = item.querySelector('.tips__trigger');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('tips__item--active');

      items.forEach((el) => el.classList.remove('tips__item--active'));

      if (!isActive) {
        item.classList.add('tips__item--active');
      }
    });
  });
});
