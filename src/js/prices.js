// Находим все элементы на странице с классом "element"
const elements = document.querySelectorAll('.element');

// Добавляем слушатель события на наведение курсора мыши на каждый элемент
elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    // Добавляем класс "hoverable"
    element.classList.add('hoverable');
  });

  // Добавляем слушатель события на уход курсора мыши с элемента
  element.addEventListener('mouseout', () => {
    // Удаляем класс "hoverable"
    element.classList.remove('hoverable');
  });
});
