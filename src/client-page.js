//client page content generation

const clientProjects = document.getElementById('client-projects');
const viewportWidth = window.viewportWidth;


clientProjects.innerHTML = `
    <div class="client-post">
        <div class="client-card image-placeholder" data-id="1"></div>
        <h3 class="text-primary">Project A</h3>
        <p class="text-secondary">Photographer</p>
    </div>
    <div class="client-post">
        <div class="client-card image-placeholder" data-id="2"></div>
        <h3 class="text-primary">Project B</h3>
        <p class="text-secondary">Cinematographer</p>
    </div>
`;