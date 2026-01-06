// ==========================================
// 1. DEINE DATENBANK (Beispiele)
// ==========================================
const eventDatabase = {
    // Ära 1: Retro (bis 2007)
  "2001": [
    { "title": "Jugendball", "text": "Thema: Adam & Eva", "img": "" },
    { "title": "s'Festl", "text": "Das erste organisierte Fest", "img": "" }
  ],

  "2002": [
    { "title": "Jugendball", "text": "Thema: Eine Welt", "img": "" }
  ],

  "2003": [
    { "title": "Jugendball", "text": "Thema: Mythen und Legenden", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2004": [
    { "title": "Jugendball", "text": "Thema: Himmel & Hölle", "img": "" },
    { "title": "Maifest", "text": "Das legendäre Maifest", "img": "" },
    { "title": "Seifenkistenrennen", "text": "", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2005": [
    { "title": "Jugendball", "text": "Thema: Märchen", "img": "" },
    { "title": "Schneebar", "text": "", "img": "" },
    { "title": "Seifenkistenrennen", "text": "", "img": "" }
  ],

  "2006": [
    { "title": "Jugendball", "text": "Thema: Liebe", "img": "" },
    { "title": "Maifest", "text": "", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2007": [
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2008": [
    { "title": "Jugendball", "text": "Thema: Sweet Dreams", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2009": [
    { "title": "Jugendball", "text": "Thema: Movies", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2010": [
    { "title": "Jugendball", "text": "Thema: Music", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2011": [
    { "title": "Jugendball", "text": "Thema: Casino Royale & 10 Jahre Jugend", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2012": [
    { "title": "Jugendball", "text": "Thema: Under the Sea", "img": "" },
    { "title": "Umbau", "text": "", "img": "" },
    { "title": "Silvesterwanderung", "text": "", "img": "" },
    { "title": "Gemeinnützigkeit", "text": "", "img": "" }
  ],

  "2013": [
    { "title": "Jugendball", "text": "Thema: Wild, Wild West", "img": "" },
    { "title": "Umbau", "text": "", "img": "" },
    { "title": "Divers", "text": "", "img": "" }
  ],

  "2014": [
    { "title": "Jugendball", "text": "Thema: Rock'n Blues", "img": "" },
    { "title": "Umbau", "text": "", "img": "" },
    { "title": "Maifest", "text": "", "img": "" },
    { "title": "Maibaumstellen", "text": "", "img": "" }
  ],

  "2015": [
    { "title": "Jugendball", "text": "Thema: Jungle", "img": "" },
    { "title": "Maifest", "text": "", "img": "" },
    { "title": "Umbau", "text": "", "img": "" },
    { "title": "Christbaum", "text": "", "img": "" },
    { "title": "Diverses", "text": "", "img": "" }
  ],

  "2016": [
    { "title": "Jugendball", "text": "Thema: Frozen", "img": "" },
    { "title": "Maifest", "text": "", "img": "" },
    { "title": "Umbau", "text": "", "img": "" },
    { "title": "Nikolo", "text": "", "img": "" },
    { "title": "Diverses", "text": "", "img": "" }
  ],

  "2017": [
    { "title": "Jugendball", "text": "Thema: Moulin Rouge", "img": "" },
    { "title": "Diverses", "text": "", "img": "" },
    { "title": "Trefferoeffnung", "text": "", "img": "" },
    { "title": "Maifest", "text": "", "img": "" },
    { "title": "Maibaum", "text": "", "img": "" },
    { "title": "Snowattack", "text": "", "img": "" }
  ],

  "2018": [
    { "title": "Jugendball", "text": "Thema: Wonderland", "img": "" },
    { "title": "Maibaumstellen", "text": "", "img": "" },
    { "title": "Snowattack", "text": "", "img": "" },
    { "title": "Beachvolleyballturnier", "text": "", "img": "" },
    { "title": "Maifest", "text": "", "img": "" }
  ],

  "2019": [
    { "title": "Jugendball", "text": "Thema: Fire & Ice", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2020": [
    { "title": "Jugendball", "text": "Thema: Griechischer Olymp", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2021": [
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2022": [
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2023": [
    { "title": "Jugendball", "text": "Thema: Great Gatsby", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2024": [
    { "title": "Jugendball", "text": "Thema: Flower Power", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2025": [
    { "title": "Jugendball", "text": "Thema: Mamma Mia", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ]



};

// ==========================================
// 2. PROGRAMM LOGIK
// ==========================================
const yearDisplay = document.getElementById('year-display');
const body = document.body;
const gallery = document.getElementById('gallery-container');
const eraTitle = document.getElementById('era-title');
const currentYearTexts = document.querySelectorAll('.current-year-text');

// Start beim Laden mit 2025
window.onload = () => {
    updateTimeline(2025);
};

function updateTimeline(year) {
    year = parseInt(year);
    yearDisplay.innerText = year;
    currentYearTexts.forEach(el => el.innerText = year);

    let newStyle = '';
    let titleText = '';

    if (year <= 2005) {
        newStyle = 'style-retro';
        titleText = '+++ ARCHIV ZUGRIFF +++';
    } 
    // NEU: Das 2006-2010 Theme (Basierend auf deinem Screenshot)
    else if (year >= 2006 && year <= 2010) {
        newStyle = 'style-2006';
        titleText = 'JUGEND HOF ONLINE';
    }
    else if (year >= 2011 && year <= 2014) {
        newStyle = 'style-mid';
        titleText = '';
    } 
    else if (year >= 2015 && year <= 2018) {
        newStyle = 'style-himmel';
        titleText = '';
    } 
    else {
        newStyle = 'style-sunset';
        titleText = '';
    }

    body.className = newStyle;
    eraTitle.innerText = titleText;
    renderContent(year);
}
function renderContent(year) {
    let html = '';
    
    // Prüfen, ob wir Daten für das Jahr haben
    if (eventDatabase[year]) {
        eventDatabase[year].forEach(event => {
            // Platzhalter Bild, falls keines angegeben ist
            const imgSrc = event.img ? event.img : `https://picsum.photos/400/300?random=${Math.random()}`;

            
            html += `
                <article class="card">
                    <a href="${galleryUrl}">
                        <img src="${imgSrc}" alt="${event.title}">
                        <div class="card-txt">
                            <h3>${event.title}</h3>
                            <p>${event.text}</p>
                        </div>
                    </a>
                </article>
            `;
        });
    } else {
        // Leere Meldung, wenn keine Daten da sind
        html = `
            <div style="width: 100%; text-align: center; padding: 40px; opacity: 0.6;">
                <p>Keine Einträge für das Jahr ${year} gefunden.</p>
            </div>
        `;
    }

    gallery.innerHTML = html;
}

async function renderContent(year) {
    let html = '';
    
    if (eventDatabase[year]) {
        for (const event of eventDatabase[year]) {
            const imgSrc = event.img;

            const festSafe = event.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            // Muss die Jahr logik noch einfügen
            let galleryUrl = '';
            const currentYear = parseInt(year); // In Zahl umwandeln

            // 2. Korrekte Bereichsabfrage mit && (UND)
            if (currentYear >= 2001 && currentYear <= 2005) {
                galleryUrl = `2001gallery.html?year=${year}&fest=${festSafe}`;
            } else if (currentYear >= 2006 && currentYear <= 2010) {
                galleryUrl = `2006gallery.html?year=${year}&fest=${festSafe}`;
            } else if (currentYear >= 2011 && currentYear <= 2014) {
                galleryUrl = `2011gallery.html?year=${year}&fest=${festSafe}`;
            } else if (currentYear >= 2015 && currentYear <= 2020) {
                galleryUrl = `2015gallery.html?year=${year}&fest=${festSafe}`;
            } else if (currentYear >= 2021 && currentYear <= 2025) {
                galleryUrl = `2021gallery.html?year=${year}&fest=${festSafe}`;
            } else {
                galleryUrl = `2001gallery.html?year=${year}&fest=${festSafe}`;
            }
            
            // Prüfen ob ein Link da ist, falls ja -> HTML für Button erstellen
            const linkHtml =  `<a href="${galleryUrl}" class="card-link" target="_blank">MEHR INFOS</a>`;
            
            html += `
                <article class="card">
                    <img src="${imgSrc}" alt="${event.title}">
                    <div class="card-txt">
                        <h3>${event.title}</h3>
                        <p>${event.text}</p>
                        ${linkHtml} 
                    </div>
                </article>
            `;
        };
    } else {
        html = `<div style="width: 100%; text-align: center; padding: 40px; opacity: 0.6;">
                    <p>Keine Einträge für das Jahr ${year} gefunden.</p>
                </div>`;
    }
    gallery.innerHTML = html;
}