const circle = document.querySelector('#dot');

circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});