document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.main__burger img');
    const cross = document.querySelector('.main__cross img');
    const menu = document.querySelector('.main__menu-burger');

    // Обработка клика на бургер
    burger.parentElement.addEventListener('click', function() {
        burger.style.display = 'none'; // Убираем бургер
        cross.style.display = 'flex'; // Показываем крестик
        menu.style.display = 'flex'; // Показываем меню
    });

    // Обработка клика на крестик
    cross.parentElement.addEventListener('click', function() {
        cross.style.display = 'none'; // Убираем крестик
        burger.style.display = 'flex'; // Показываем бургер
        menu.style.display = 'none'; // Скрываем меню
    });
});
