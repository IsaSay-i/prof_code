document.querySelectorAll('.sub-list').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');

        const subList = item.nextElementSibling;
        const icon = item.querySelector('.fa-chevron-up');

        if (subList) {
            subList.classList.toggle('hidden');
        }

        if (icon) {
            icon.classList.toggle('open');
        }
    });
});