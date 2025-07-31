// Manejo de múltiples carruseles
document.querySelectorAll('.carrusel-productos').forEach((carrusel, index) => {
    const imagenes = carrusel.querySelectorAll('.producto-imagen');
    let currentIndex = 0;

    const mostrarImagen = (index) => {
        imagenes.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    const prevBtn = carrusel.querySelector('.carrusel-btn.left');
    const nextBtn = carrusel.querySelector('.carrusel-btn.right');

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imagenes.length;
        mostrarImagen(currentIndex);
    });

    // Mostrar la primera imagen al cargar
    mostrarImagen(currentIndex);
});

