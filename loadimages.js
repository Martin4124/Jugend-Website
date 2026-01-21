// loadimages.js

async function loadGallery(year, festType) {
    const galleryContainer = document.getElementById('gallery-container');
    
    if (!galleryContainer) {
        console.error("Fehler: Kein Element mit der ID 'gallery-container' gefunden!");
        return;
    }
    
    galleryContainer.innerHTML = "<p style='color:white; text-align:center;'>Bilder werden geladen...</p>";

    try {
        // 1. Lade die lokale JSON Datei (Pfad eventuell anpassen, falls im Unterordner)
        const response = await fetch('Json/images.json');
        const allData = await response.json();

        // 2. Suche exakt nach Jahr und Fest
        // Wir nutzen .toLowerCase(), weil in deiner JSON "jugendball" (klein) steht,
        // dein Aufruf aber vielleicht "Jugendball" (groß) übergibt.
        const images = allData[year] ? allData[year][festType.toLowerCase()] : null;

        // 3. Wenn keine Bilder gefunden wurden
        if (!images || images.length === 0) {
            galleryContainer.innerHTML = `<p style='color:white; text-align:center;'>Keine Fotos für ${festType} ${year} gefunden.</p>`;
            return;
        }

        // 4. HTML generieren (Struktur bleibt wie in deinem Original)
        let html = '';
        images.forEach(img => {
            html += `
                <article class="card retro-item justified-item">
                    <a href="${img.url}">
                        <img src="${img.url}" alt="${img.name}" loading="lazy">
                        <div class="card-txt retro-caption">
                            <h3></h3>
                        </div>
                    </a>
                </article>`;
        });
        
        galleryContainer.innerHTML = html;

    } catch (err) {
        console.error("Fehler beim Laden der lokalen JSON:", err);
        galleryContainer.innerHTML = "<p style='color:white; text-align:center;'>Fehler beim Laden der Galerie.</p>";
    }
}
