document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // 3. Dynamic Gallery Rendering and Filtering (if on galeria.html)
    const galleryContainer = document.getElementById('dynamic-gallery');
    const filtersContainer = document.getElementById('gallery-filters');
    
    // Check if the gallery container and obrasDeArte data exist
    if (galleryContainer && typeof obrasDeArte !== 'undefined') {
        
        const representativeImages = {
            'America': 'California',
            'Emociones': 'N5',
            'Japoneses': 'N7',
            'Tierra': 'Rodeo'
        };

        // Function to render the series overview
        const renderSeriesOverview = () => {
            galleryContainer.innerHTML = ''; // Clear current gallery
            filtersContainer.style.display = 'none'; // Hide filters on overview
            
            // Get unique series
            const seriesSet = new Set();
            obrasDeArte.forEach(obra => {
                if (obra.serie && obra.serie.trim() !== '') {
                    seriesSet.add(obra.serie.trim());
                }
            });

            seriesSet.forEach(serie => {
                // Find representative artwork
                const repTitle = representativeImages[serie];
                let repArtwork = obrasDeArte.find(o => o.serie === serie && o.titulo === repTitle);
                
                // Fallback to first artwork of the series if not found
                if (!repArtwork) {
                    repArtwork = obrasDeArte.find(o => o.serie === serie);
                }

                if (repArtwork) {
                    const article = document.createElement('article');
                    article.className = 'artwork-card series-card';
                    // We make the whole card clickable to enter the series
                    article.style.cursor = 'pointer';
                    article.onclick = () => {
                        // Mark the correct filter button as active
                        const filterBtns = filtersContainer.querySelectorAll('.filter-btn');
                        filterBtns.forEach(b => b.classList.remove('active'));
                        const targetBtn = Array.from(filterBtns).find(b => b.dataset.filter === serie);
                        if (targetBtn) targetBtn.classList.add('active');
                        
                        renderGallery(serie);
                    };
                    
                    article.innerHTML = `
                        <div class="card-image">
                            <img src="${repArtwork.imagen}" alt="Serie ${serie}" loading="lazy">
                        </div>
                        <div class="card-info" style="text-align: center;">
                            <h3 style="font-size: 1.5rem; margin-bottom: 0;">Serie ${serie}</h3>
                            <button class="btn btn-action" style="margin-top: 1rem;">Ver Obras</button>
                        </div>
                    `;
                    
                    galleryContainer.appendChild(article);
                }
            });
        };

        // Function to render the gallery based on a filter
        const renderGallery = (filterSerie) => {
            galleryContainer.innerHTML = ''; // Clear current gallery
            filtersContainer.style.display = 'flex'; // Show filters when viewing a series
            
            // Volver al principio de la pantalla
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Filter the artworks
            let filteredObras = obrasDeArte.filter(obra => obra.serie === filterSerie);
            
            // Sort to put "No Disponible" at the end
            filteredObras.sort((a, b) => {
                const aNoDisp = a.precio.toLowerCase().includes('no disponible');
                const bNoDisp = b.precio.toLowerCase().includes('no disponible');
                if (aNoDisp && !bNoDisp) return 1; // a goes after b
                if (!aNoDisp && bNoDisp) return -1; // a goes before b
                return 0; // maintain original order
            });

            filteredObras.forEach(obra => {
                // Create article
                const article = document.createElement('article');
                article.className = 'artwork-card';
                
                // Safe string for serie if it exists
                const serieHTML = obra.serie ? `<p class="serie">${obra.serie}</p>` : '';
                const serieParam = obra.serie ? obra.serie : '';
                
                // Combine specs (tecnica + tamaño)
                let specsCombine = obra.tecnica;
                if (obra.tamaño) {
                    let sizeStr = `${obra.tamaño} cm`;
                    specsCombine = specsCombine ? `${specsCombine} | ${sizeStr}` : sizeStr;
                }
                
                // Render inner HTML
                article.innerHTML = `
                    <div class="card-image" onclick="openModal('${obra.imagen}', '${obra.titulo}', '${specsCombine}', '${obra.precio}', '${serieParam}')">
                        <img src="${obra.imagen}" alt="${obra.titulo}" loading="lazy">
                    </div>
                    <div class="card-info">
                        <h3>${obra.titulo}</h3>
                        ${serieHTML}
                        <p class="specs">${specsCombine}</p>
                        <p class="price">${obra.precio}</p>
                        <button class="btn btn-action" onclick="openModal('${obra.imagen}', '${obra.titulo}', '${specsCombine}', '${obra.precio}', '${serieParam}')">Consultar</button>
                    </div>
                `;
                
                galleryContainer.appendChild(article);
            });
        };

        // Extract unique series from data
        if (filtersContainer) {
            const seriesSet = new Set();
            obrasDeArte.forEach(obra => {
                if (obra.serie && obra.serie.trim() !== '') {
                    seriesSet.add(obra.serie.trim());
                }
            });
            
            // Only show filters if there is at least one series
            if (seriesSet.size > 0) {
                // Create button for each series
                seriesSet.forEach(serie => {
                    const btn = document.createElement('button');
                    btn.className = 'filter-btn';
                    btn.textContent = serie;
                    btn.dataset.filter = serie;
                    filtersContainer.appendChild(btn);
                });

                // Add click events to filter buttons
                const filterBtns = filtersContainer.querySelectorAll('.filter-btn');
                filterBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        // Remove active class from all
                        filterBtns.forEach(b => b.classList.remove('active'));
                        // Add active to clicked
                        e.target.classList.add('active');
                        
                        const selectedFilter = e.target.dataset.filter;
                        if (selectedFilter === 'overview') {
                            renderSeriesOverview();
                        } else {
                            renderGallery(selectedFilter);
                        }
                    });
                });
            }
        }
        
        // Render Initial Gallery (Series Overview)
        renderSeriesOverview();
    }
});

// ==========================================================================
// Modal / Lightbox Logic
// ==========================================================================
const modal = document.getElementById('lightbox');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalSpecs = document.getElementById('modal-specs');
const modalPrice = document.getElementById('modal-price');
const modalWhatsapp = document.getElementById('modal-whatsapp');

// Base WhatsApp number (Replace with real number)
const WHATSAPP_NUMBER = '5491161872365'; 

function openModal(imageSrc, title, specs, price, serie = '') {
    // Populate Modal Data
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    
    // Add serie to specs if it exists
    if (serie) {
        modalSpecs.innerHTML = `<span style="color: var(--accent-color); font-style: italic; display: block; margin-bottom: 0.5rem;">${serie}</span>${specs}`;
    } else {
        modalSpecs.textContent = specs;
    }
    
    modalPrice.textContent = price;

    // Generate WhatsApp Link
    const message = encodeURIComponent(`Hola, me interesa la obra "${title}". Me gustaría recibir más información.`);
    modalWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scrolling
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
