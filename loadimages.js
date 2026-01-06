// loadimages.js

async function loadGallery(year, festType) {
    // Ersetze dies durch deine echte Web-App-URL von Google
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyFps8R4HactMraUyzaAlvnbfCvT1aQN_8kJ7HMEReWtC4oQAZNlyoN56oG2BYc3NQo5g/exec';
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

async function loadFirstImageOnly(year, festType) {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyFps8R4HactMraUyzaAlvnbfCvT1aQN_8kJ7HMEReWtC4oQAZNlyoN56oG2BYc3NQo5g/exec';
    
    try {
        const response = await fetch(`${scriptUrl}?year=${year}&fest=${festType}`);
        const images = await response.json();

        // Prüfen, ob Bilder vorhanden sind
        if (images && images.length > 0 && !images.error) {
            const img = images[0]; // Nur das erste Bild nehmen
            
            return img.url;
        } else {
            return `https://picsum.photos/400/300?random=${Math.random()}`;
        }
    } catch (err) {
        console.error("Fehler beim Laden des Titelbildes:", err);
    }
}