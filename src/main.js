//portfolio content generation

const portfolioImages = document.getElementById('images-portfolio');
const portfolioVideos = document.getElementById('video-portfolio');

portfolioImages.innerHTML = `
    <div class="image-placeholder"></div>
    <div class="image-placeholder"></div>
    <div class="image-placeholder"></div>
`;

portfolioVideos.innerHTML = `
    <div class="image-placeholder"></div>
    <div class="image-placeholder"></div>
    <div class="image-placeholder"></div>
`;

const tabButtons = document.querySelectorAll('.tab-btn');
const portfolioWrapper = document.querySelector('.portfolio-wrapper');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        portfolioWrapper.style.transform = `translateX(-${index * 100}vw)`;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});