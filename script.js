// ==========================================
// 1. DEINE DATENBANK (Beispiele)
// ==========================================
const eventDatabase = {
    // Ära 1: Retro (bis 2007)
  "2001": [
    { "title": "Jugendball", "text": "Thema: Adam & Eva", "img": "https://drive.google.com/thumbnail?id=1jB-zC9m40wb25wr3lZM83TU_n2ETlNfX&sz=s1200" },
    { "title": "s'Festl", "text": "Das erste organisierte Fest", "img": "https://drive.google.com/thumbnail?id=1VsPbSHy-w6ojY0UU_plMrxkyeTY_DtmA&sz=s1200" }
  ],

  "2002": [
    { "title": "Jugendball", "text": "Thema: Eine Welt", "img": "https://drive.google.com/thumbnail?id=1YfIfB420p3kpr6VHbjSD-1zAAvE-OmKR&sz=s1200" }
  ],

  "2003": [
    { "title": "Jugendball", "text": "Thema: Mythen und Legenden", "img": "https://drive.google.com/thumbnail?id=1sJ6glmlJ3dGLQCGP2lcVp9b7i4fiHWxe&sz=s1200" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2004": [
    { "title": "Jugendball", "text": "Thema: Himmel & Hölle", "img": "https://drive.google.com/thumbnail?id=1Y7Z-DCt1q9tjRHBhdF2YtxkIA3YNoNdz&sz=s1200" },
    { "title": "Maifest", "text": "Das legendäre Maifest", "img": "https://drive.google.com/thumbnail?id=1pIM2xz5vOTRRP2J8b1nh_WTV-_b47uvm&sz=s1200" },
    { "title": "Seifenkistenrennen", "text": "", "img": "" }
  ],

  "2005": [
    { "title": "Jugendball", "text": "Thema: Märchen", "img": "https://drive.google.com/thumbnail?id=13QKJWJrlvYA1p5e6Qr10gagC_RqRFOGd&sz=s1200" },
    { "title": "Schneebar", "text": "", "img": "https://drive.google.com/thumbnail?id=1DngwUVnAiK4rwJKEEQ02fAFva3TLrWq3&sz=s1200" },
    { "title": "Seifenkistenrennen", "text": "", "img": "" }
  ],

  "2006": [
    { "title": "Jugendball", "text": "Thema: Liebe", "img": "https://drive.google.com/thumbnail?id=1WkVznUpXz52cMpJS9lzM9yZ3poWW-m_H&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2007": [
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2008": [
    { "title": "Jugendball", "text": "Thema: Sweet Dreams", "img": "https://drive.google.com/thumbnail?id=1pmYWQYLxGPhgwqJan58BFPbvPghU_eIM&sz=s1200" },
    { "title": "Festl", "text": "", "img": "https://drive.google.com/thumbnail?id=123Tcbg1cFzuUTkNvawDYpy2LiyEcGrXe&sz=s1200" }
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
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Silvesterwanderung", "text": "", "img": "" },
    { "title": "Gemeinnützigkeit", "text": "", "img": "" }
  ],

  "2013": [
    { "title": "Jugendball", "text": "Thema: Wild, Wild West", "img": "" },
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Divers", "text": "", "img": "" }
  ],

  "2014": [
    { "title": "Jugendball", "text": "Thema: Rock'n Blues", "img": "" },
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" },
    { "title": "Maibaumstellen", "text": "", "img": "" }
  ],

  "2015": [
    { "title": "Jugendball", "text": "Thema: Jungle", "img": "" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" },
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Christbaum", "text": "", "img": "" },
    { "title": "Diverses", "text": "", "img": "" }
  ],

  "2016": [
    { "title": "Jugendball", "text": "Thema: Frozen", "img": "" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" },
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Nikolo", "text": "", "img": "https://drive.google.com/thumbnail?id=1dBhrVAqvAPjTruloPHpOV-OWff2GJnAt&sz=s1200" },
    { "title": "Diverses", "text": "", "img": "" }
  ],

  "2017": [
    { "title": "Jugendball", "text": "Thema: Moulin Rouge", "img": "https://drive.google.com/thumbnail?id=123Tcbg1cFzuUTkNvawDYpy2LiyEcGrXe&sz=s1200" },
    { "title": "Diverses", "text": "", "img": "" },
    { "title": "Trefferoeffnung", "text": "", "img": "" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" },
    { "title": "Maibaum", "text": "", "img": "" },
    { "title": "Snowattack", "text": "", "img": "https://drive.google.com/thumbnail?id=1xwyvvcZYwv98-7ADH0sBsE1fIzOVv4Cs&sz=s1200" }
  ],

  "2018": [
    { "title": "Jugendball", "text": "Thema: Wonderland", "img": "https://drive.google.com/thumbnail?id=1dUj9Fyu6XA3RmOsRM7Xe8N1qt3ckrBs4&sz=s1200" },
    { "title": "Maibaumstellen", "text": "", "img": "" },
    { "title": "Snowattack", "text": "", "img": "https://drive.google.com/thumbnail?id=1iUj-CiltuW2XwYPKD1KCN3XOv6zVcthT&sz=s1200" },
    { "title": "Beachvolleyballturnier", "text": "", "img": "" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" }
  ],

  "2019": [
    { "title": "Jugendball", "text": "Thema: Fire & Ice", "img": "https://drive.google.com/thumbnail?id=1bYhlLT9Rc0lpMZSVS2pqlmyAGJjCi10u&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" }
  ],

  "2020": [
    { "title": "Jugendball", "text": "Thema: Griechischer Olymp", "img": "https://drive.google.com/thumbnail?id=1IO0l6frUgneyigFgxUhd0yppis-MDLnI&sz=s1200" },
    { "title": "Festl", "text": "", "img": "" }
  ],

  "2021": [
    { "title": "Julifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1lG--UM8hFZBkDLjv0LoZcTy5sNHqITln&sz=s1200" }
  ],

  "2022": [
    { "title": "Julifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1Z3zECtmkS5JZgff057ZKr8Nn8z-Z768r&sz=s1200" },
    { "title": "SnowAttack", "text": "", "img": "https://drive.google.com/thumbnail?id=1k12GlhEqsKYmCbC_KY99vyMiGC2oTxlg&sz=s1200" }

  ],

  "2023": [
    { "title": "Jugendball", "text": "Thema: Great Gatsby", "img": "" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1_x6TL4q0cBNlNkTUx4tmXLNQ33YqEG9s&sz=s1200" },
    { "title": "SnowAttack", "text": "", "img": "https://drive.google.com/thumbnail?id=1Z3zECtmkS5JZgff057ZKr8Nn8z-Z768r&sz=s1200" }

  ],

  "2024": [
    { "title": "Jugendball", "text": "Thema: Flower Power", "img": "https://drive.google.com/thumbnail?id=1lstD3-SiSNj_9uXXaHlKdGVesiHwFlvZ&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1wESYgaEyd1TtnYKYNTg7OnyDQHnDiojB&sz=s1200" }
  ],

  "2025": [
    { "title": "Jugendball", "text": "Thema: Mamma Mia", "img": "https://drive.google.com/thumbnail?id=13BDWwxIdgUinkyUqTSVPiMir8V2VqntK&sz=s1200" },
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
                <a href="${galleryUrl}" style="text-decoration: none; color: inherit;">
                    <img src="${imgSrc}" alt="${event.title}">
                    <div class="card-txt">
                        <h3>${event.title}</h3>
                        <p>${event.text}</p>
                        ${linkHtml} 
                    </div>
                </a>
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