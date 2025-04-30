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
        e.stopPropagation(); // Para evitar que o clique se propague para o documento

        const section = imageContent.closest('section');
        const ul = section.querySelector('ul');
        const overlay = section.querySelector('.overlay'); // Encontra o overlay
        const imageWrapper = section.querySelector('.image-wrapper');
        const topImage = section.querySelector('.top-image');
        const bottomImage = section.querySelector('.bottom-image');

        // Remover a sombra (overlay)
        if (overlay) {
            overlay.style.zIndex = '4'; // Garante que o overlay esteja acima
            overlay.style.display = 'flex'; // Exibe o overlay
        }

        // Ativar a animação
        section.classList.add('animar');

        // Mostrar o <ul> enquanto a animação ocorre, com a imagem acima
        setTimeout(() => {
            if (ul) {
                ul.classList.remove('hidden'); // Mostra o <ul>
                ul.style.zIndex = '5'; // Garante que o <ul> fique acima
            }
            if (imageWrapper) {
                imageWrapper.style.zIndex = '1'; // Garante que a imagem de fundo seja visível
            }
            if (topImage && bottomImage) {
                topImage.style.zIndex = '0'; // Coloca a imagem acima da lista
                bottomImage.style.zIndex = '0';
            }
            imageContent.style.display = 'none'; // Esconde o content da imagem
        }, 1000); // Inicia o processo logo após a animação (300ms para suavizar)

    });
});

document.addEventListener('click', (e) => {
    const isInsideCard = e.target.closest('.image-container'); // Verifica se o clique foi dentro de um card

    if (!isInsideCard) {
        document.querySelectorAll('.image-container').forEach(container => {
            const imageContent = container.querySelector('.image-content');
            const ul = container.querySelector('ul');
            const section = container.closest('section');
            const overlay = section.querySelector('.overlay');
            const imageWrapper = section.querySelector('.image-wrapper');
            const topImage = section.querySelector('.top-image');
            const bottomImage = section.querySelector('.bottom-image');

            if (imageContent && ul) {
                // Esconde a lista
                ul.classList.add('hidden');
                ul.style.zIndex = ''; // Reseta o z-index do <ul>
                imageContent.style.display = 'flex';

                // Restaura o overlay e as imagens
                if (overlay) {
                    overlay.style.zIndex = ''; // Restaura o z-index do overlay
                    overlay.style.display = 'flex'; // Restaura o overlay
                }

                if (imageWrapper) {
                    imageWrapper.style.zIndex = '3'; // Restaura o z-index do image-wrapper
                }

                if (topImage && bottomImage) {
                    topImage.style.zIndex = '1'; // Restaura a posição das imagens
                    bottomImage.style.zIndex = '1';
                }

                // Remove animação caso tenha sido ativada
                section.classList.remove('animar');
            }
        });
    }
});
