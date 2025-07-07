//nav dropdown menu
const moreDropdown = document.querySelector('.more-dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const chevron = document.querySelector('.down-chevron');

moreDropdown.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    chevron.classList.toggle('rotate');
});