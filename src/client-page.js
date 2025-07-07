//client page content generation

const clientProjects = document.getElementById('client-projects');

clientProjects.innerHTML = `
    <div class="client-post">
        <div class="image-placeholder"></div>
        <h3 class="text-primary">Project A</h3>
        <p class="text-secondary">Photographer</p>
    </div>
    <div class="client-post">
        <div class="image-placeholder"></div>
        <h3 class="text-primary">Project B</h3>
        <p class="text-secondary">Cinematographer</p>
    </div>
`;