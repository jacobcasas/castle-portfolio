const clientCard = document.querySelectorAll(".client-card");

const navigateToPage = (id, page) => {
    if (id) window.location.href = `${page}.html?id=${id}`;
};

clientCard.forEach(card => {
    card.addEventListener("click", () => {
        navigateToPage(card.dataset.id, 'client-project')
    })
});