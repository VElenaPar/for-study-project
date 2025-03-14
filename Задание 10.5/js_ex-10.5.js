// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

const screenSizeButton = document.getElementById('screenSizeButton');

screenSizeButton.addEventListener('click', () => {

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const message = `Размеры экрана: Ширина экрана: ${screenWidth}px; Высота экрана: ${screenHeight}px`;

alert(message);
});
