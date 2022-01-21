const modelBtn = document.querySelector('.modal-btn');
const colseBtn = document.querySelector('.close-btn');
const modelOverlay = document.querySelector('.modal-overlay');

modelBtn.addEventListener('click', function () {
    modelOverlay.classList.add('open-modal');
});
colseBtn.addEventListener('click', function () {
    modelOverlay.classList.remove('open-modal');
});