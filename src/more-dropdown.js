//nav dropdown menu
const moreDropdown = document.getElementById('more-dropdown');
const dropdownMenu = document.getElementById('dropdown-menu');
const chevron = document.querySelector('.down-chevron');
const viewportWidth = window.innerWidth;

moreDropdown.addEventListener('click', () => {
    if (viewportWidth < 1024) {
        dropdownMenu.classList.toggle('hidden');
        chevron.classList.toggle('rotate');
    }
});

moreDropdown.addEventListener('mouseenter', () => {
    if (viewportWidth > 1024) {
        dropdownMenu.classList.toggle('hidden');
        chevron.classList.toggle('rotate');
    }
});

dropdownMenu.addEventListener('mouseleave', () => {
    if (viewportWidth > 1024) {
        dropdownMenu.classList.toggle('hidden');
        chevron.classList.toggle('rotate');
    }
});
