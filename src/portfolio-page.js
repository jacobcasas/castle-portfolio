//portfolio content generation

const portfolioImages = document.getElementById('images-portfolio');
const portfolioVideos = document.getElementById('video-portfolio');
const viewportWidth = window.innerWidth;

if (viewportWidth < 1024) {
    portfolioImages.innerHTML = `
        <div class="image-wrapper">
            <div class="image-placeholder"></div>
            <div class="image-placeholder"></div>
            <div class="image-placeholder"></div>
        </div>
    `;
} else {
    portfolioImages.innerHTML = `
        <div class="bento">
            <div class="item tall"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item small"></div>
            <div class="item wide"></div>
            <div class="item "></div>
        </div> 
    `
}


portfolioVideos.innerHTML = `
    <div class="video-wrapper">
        <div class="image-placeholder"></div>
        <div class="image-placeholder"></div>
        <div class="image-placeholder"></div>
    </div>
`;

const tabButtons = document.querySelectorAll('.tab-btn');
const portfolioWrapper = document.querySelector('.portfolio-wrapper');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        portfolioWrapper.style.transform = `translateX(-${index * 50}%)`;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});