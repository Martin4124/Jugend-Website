// loadimages.js

async function loadGallery(year, festType) {
    // Ersetze dies durch deine echte Web-App-URL von Google
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyOORWuVYfJHQZQDYyT4GZ70DFsFU-7OI4_wX42oSJEnst9JY54JBIGnZb-C0o9PL8Spw/exec';
    const galleryContainer = document.getElementById('gallery-container');
    
    // Prüfen, ob der Container auf der aktuellen Seite existiert
    if (!galleryContainer) {
        console.error("Fehler: Kein Element mit der ID 'gallery-container' gefunden!");
        return;
    }
    
    galleryContainer.innerHTML = "<p style='color:white; text-align:center;'>Bilder werden geladen...</p>";

    try {
        const response = await fetch(`${scriptUrl}?year=${year}&fest=${festType}`);
        const images = await response.json();

        if (images.error) {
            galleryContainer.innerHTML = `<p style='color:white; text-align:center;'>Keine Fotos für ${festType} ${year} gefunden.</p>`;
            return;
        }

        let html = '';
        images.forEach(img => {
            html += `
                <article class="card retro-item justified-item">
                    <a href="${img.url}">
                        <img src="${img.url}" alt="${img.name}" loading="lazy" >
                    <div class="card-txt retro-caption">
                        <h3>${img.name}</h3>
                    </div>
                    </a>
                </article>`;
        });
        galleryContainer.innerHTML = html;

    } catch (err) {
        console.error("Verbindungsfehler zum Google Script:", err);
        galleryContainer.innerHTML = "<p style='color:white;'>Fehler beim Laden der Galerie.</p>";
    }
}