const accordionItems = document.querySelectorAll('.faq-list');

accordionItems.forEach(item => {
  const header = item.querySelector('.faq-title-list');
  const content = item.querySelector('.faq-text-list');

    header.addEventListener('click', () => {
      header.classList.toggle('active');
      content.classList.toggle('active');
      
    });
});
