import { clients } from "./client-list";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const clientId = parseInt(params.get('id'));

    console.log(clientId);

    const client = clients.find(c => c.id === clientId);

    document.title = `${client.projectName} - Castle Productions`;

    const projectContainer = document.querySelector('.client-project-container');
    console.log(client.images.length);

    let currentIndex = 0;
    const totalSlides = client.images.length;

    if (client) {
        fetch(`/descriptions/client${clientId}.txt`)
            .then(response => response.text())
            .then(descriptionText => {
                projectContainer.innerHTML = `
                    <div class="project-title-and-role">
                        <h1 class="text-primary">${client.projectName}</h1>
                        <p class="text-secondary">${client.role}</p>
                    </div>
                    <div class="image-display-container">               
                        <div class="client-images-carousel">
                            <button class="carousel-button | text-primary" id="prev-picture">&lt;</button>
                            <div class="client-image-container">
                                <div class="image-wrapper">
                                    <div class="${client.images[0]}"></div>
                                    <div class="${client.images[1]}"></div>
                                    <div class="${client.images[2]}"></div>
                                    <div class="${client.images[3]}"></div>
                                </div>
                            </div>
                            <button class="carousel-button | text-primary" id="next-picture">&gt;</button>
                        </div>
                        <p class="photo-index | text-primary">${currentIndex + 1}/${totalSlides}</p>
                    </div>
                    <p class="description-text | text-primary">${descriptionText}</p>
                `;
                const imageWrapper = document.querySelector('.image-wrapper');
                const prevButton = document.getElementById('prev-picture');
                const nextButton = document.getElementById('next-picture');
                const photoIndex = document.querySelector('.photo-index');


                imageWrapper.style.width = `${totalSlides * 100}vw`;

                const updateCarousel = () => {
                    imageWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
                    photoIndex.textContent = `${currentIndex + 1}/${totalSlides}`;
                }

                prevButton.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                    updateCarousel();
                });

                nextButton.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % totalSlides;
                    updateCarousel();
                });
        });     
    }; 
});
