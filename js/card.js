const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('mouseenter', () => {
    cardContainer.querySelector('.card').style.transform = 'rotateY(180deg)';
});

cardContainer.addEventListener('mouseleave', () => {
    cardContainer.querySelector('.card').style.transform = 'rotateY(0deg)';
});
