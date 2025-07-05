// Este evento asegura que el código se ejecute solo cuando toda la página esté cargada.
document.addEventListener('DOMContentLoaded', function () {

    // Lógica para el menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Lógica para el Modal de Donación
    const donateModal = document.getElementById('donate-modal');
    if (donateModal) {
        const openModalButtons = document.querySelectorAll('#open-donate-modal');
        const closeModalButton = document.getElementById('close-donate-modal');
        
        const openModal = () => donateModal.classList.remove('hidden');
        const closeModal = () => donateModal.classList.add('hidden');

        openModalButtons.forEach(btn => btn.addEventListener('click', openModal));
        if(closeModalButton) closeModalButton.addEventListener('click', closeModal);
        
        donateModal.addEventListener('click', (e) => {
            if (e.target === donateModal) { closeModal(); }
        });

        const tabExtranjero = document.getElementById('tab-extranjero');
        const tabBolivia = document.getElementById('tab-bolivia');
        const contentExtranjero = document.getElementById('content-extranjero');
        const contentBolivia = document.getElementById('content-bolivia');
        if (tabExtranjero && tabBolivia && contentExtranjero && contentBolivia) {
            tabExtranjero.addEventListener('click', () => {
                contentExtranjero.classList.remove('hidden');
                contentBolivia.classList.add('hidden');
                tabExtranjero.classList.add('border-red-600', 'text-gray-800');
                tabExtranjero.classList.remove('text-gray-500');
                tabBolivia.classList.remove('border-red-600', 'text-gray-800');
                tabBolivia.classList.add('text-gray-500');
            });
            tabBolivia.addEventListener('click', () => {
                contentBolivia.classList.remove('hidden');
                contentExtranjero.classList.add('hidden');
                tabBolivia.classList.add('border-red-600', 'text-gray-800');
                tabBolivia.classList.remove('text-gray-500');
                tabExtranjero.classList.remove('border-red-600', 'text-gray-800');
                tabExtranjero.classList.add('text-gray-500');
            });
        }
    }

    // Lógica para el Modal de Servicios WhatsApp
    const whatsappServicesModal = document.getElementById('whatsapp-services-modal');
    if (whatsappServicesModal) {
        const openWhatsappModalButtons = document.querySelectorAll('#open-whatsapp-modal, #open-whatsapp-modal-cta');
        const closeWhatsappModalButton = document.getElementById('close-whatsapp-modal');

        const openWhatsappModal = () => whatsappServicesModal.classList.remove('hidden');
        const closeWhatsappModal = () => whatsappServicesModal.classList.add('hidden');

        openWhatsappModalButtons.forEach(btn => btn.addEventListener('click', openWhatsappModal));
        if(closeWhatsappModalButton) closeWhatsappModalButton.addEventListener('click', closeWhatsappModal);

        whatsappServicesModal.addEventListener('click', (e) => {
            if (e.target === whatsappServicesModal) { closeWhatsappModal(); }
        });
    }

    // Lógica para el Carrusel de Perspectiva
    const carouselContainer = document.querySelector('.perspective-carousel-container');
    if (carouselContainer) {
        const items = carouselContainer.querySelectorAll('.carousel-item');
        const dotsContainer = document.getElementById('carousel-dots');
        const prevButton = document.getElementById('carousel-prev');
        const nextButton = document.getElementById('carousel-next');

        if (items.length > 0) {
            let currentIndex = 0;
            
            if(dotsContainer) {
                items.forEach((_, index) => {
                    const dot = document.createElement('button');
                    dot.classList.add('carousel-dot');
                    dot.setAttribute('aria-label', `Ir a la noticia ${index + 1}`);
                    dot.addEventListener('click', () => {
                        currentIndex = index;
                        updateCarousel();
                    });
                    dotsContainer.appendChild(dot);
                });
            }

            const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];

            function updateCarousel() {
                items.forEach((item, index) => {
                    item.classList.remove('active', 'prev', 'next', 'hidden-prev', 'hidden-next');
                    if (index === currentIndex) item.classList.add('active');
                    else if (index === currentIndex - 1) item.classList.add('prev');
                    else if (index === currentIndex + 1) item.classList.add('next');
                    else if (index < currentIndex - 1) item.classList.add('hidden-prev');
                    else item.classList.add('hidden-next');
                });

                if(dots.length > 0) {
                    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
                }
            }

            if(nextButton) {
                nextButton.addEventListener('click', () => {
                    if (currentIndex < items.length - 1) {
                        currentIndex++;
                        updateCarousel();
                    }
                });
            }

            if(prevButton) {
                prevButton.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateCarousel();
                    }
                });
            }
            
            updateCarousel();
        }
    }
})
