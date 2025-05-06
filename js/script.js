document.querySelectorAll('.sub-list').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');

        const subList = item.querySelector('.sub-list-ul');
        const chevronIcon = item.querySelector('.fa-chevron-up');
        const folderIcon = item.querySelector('.fa-folder, .fa-folder-open');

        if (subList) {
            subList.classList.toggle('hidden');
        }

        if (chevronIcon) {
            chevronIcon.classList.toggle('open');
        }

        if (folderIcon) {
            folderIcon.classList.toggle('fa-folder');
            folderIcon.classList.toggle('fa-folder-open');
        }
    });
});


document.querySelectorAll('.image-content').forEach(imageContent => {
    imageContent.addEventListener('click', (e) => {
        e.stopPropagation();

        const section = imageContent.closest('section');
        const ul = section.querySelector('ul');
        const overlay = section.querySelector('.overlay');
        const imageWrapper = section.querySelector('.image-wrapper');
        const topImage = section.querySelector('.top-image');
        const bottomImage = section.querySelector('.bottom-image');
        const simboloContainer = section.querySelector('.simbolo-container')

        if (simboloContainer){
            simboloContainer.classList.add('hidden');
        }

        if (ul) {
            ul.classList.remove('hidden');
            ul.style.zIndex = '1';
        }

        if (overlay) {
            overlay.style.zIndex = '2';
            overlay.style.display = 'flex';
        }

        section.classList.add('animar');

        setTimeout(() => {
            if (overlay) {
                overlay.style.zIndex = '2';
            }

            if (imageWrapper) {
                imageWrapper.style.zIndex = '1';
            }

            if (topImage && bottomImage) {
                topImage.style.zIndex = '0';
                bottomImage.style.zIndex = '0';
            }

            imageContent.style.display = 'none';
        }, 1000);
    });
});


document.addEventListener('click', (e) => {
    const isInsideCard = e.target.closest('.image-container');

    if (!isInsideCard) {
        document.querySelectorAll('.image-container').forEach(container => {
            const imageContent = container.querySelector('.image-content');
            const ul = container.querySelector('ul');
            const section = container.closest('section');
            const overlay = section.querySelector('.overlay');
            const imageWrapper = section.querySelector('.image-wrapper');
            const topImage = section.querySelector('.top-image');
            const bottomImage = section.querySelector('.bottom-image');
            const simboloContainer = section.querySelector('.simbolo-container')

            if (imageContent && ul) {
                ul.classList.add('hidden');
                ul.style.zIndex = ''; 
                imageContent.style.display = 'flex'; 

                if (overlay) {
                    overlay.style.zIndex = '';
                    overlay.style.display = 'flex'; 
                }

                if (imageWrapper) {
                    imageWrapper.style.zIndex = '3'; 

                if (topImage && bottomImage) {
                    topImage.style.zIndex = '1';
                    bottomImage.style.zIndex = '1';
                }

                if (simboloContainer){
                    simboloContainer.classList.remove('hidden');
                }

                // Remove animação caso tenha sido ativada
                section.classList.remove('animar');
            }

        }});
    }
});
