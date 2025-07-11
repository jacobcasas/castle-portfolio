import { clients } from "../client-list";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const clientId = parseInt(params.get('id'));

    console.log(clientId);

    const client = clients.find(c => c.id === clientId);

    document.title = `${client.projectName} - Castle Productions`;

    const projectContainer = document.querySelector('.client-project-container');

    if (client) {
        fetch(`src/descriptions/client${clientId}.txt`)
            .then(response => response.text())
            .then(descriptionText => {
                projectContainer.innerHTML = `
                    <h1 class="text-primary">${client.projectName}</h1>
                    <p class="text-primary">${client.role}</p>
                    <div class="client-images-carousel">
                    
                        <div class="${client.images.image1}"></div>
                    <p class="text-primary">${descriptionText}</p>
                `;
            });
        
    }
    
})
