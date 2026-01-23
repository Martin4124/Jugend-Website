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
    { "title": "Jugendball", "text": "Thema: Mythen und Legenden", "img": "https://drive.google.com/thumbnail?id=1sJ6glmlJ3dGLQCGP2lcVp9b7i4fiHWxe&sz=s1200" }
  ],

  "2004": [
    { "title": "Jugendball", "text": "Thema: Himmel & Hölle", "img": "https://drive.google.com/thumbnail?id=1Y7Z-DCt1q9tjRHBhdF2YtxkIA3YNoNdz&sz=s1200" },
    { "title": "Maifest", "text": "Das legendäre Maifest", "img": "https://drive.google.com/thumbnail?id=1pIM2xz5vOTRRP2J8b1nh_WTV-_b47uvm&sz=s1200" },
    { "title": "Seifenkistenrennen", "text": "", "img": "" }
  ],

  "2005": [
    { "title": "Jugendball", "text": "Thema: Märchen", "img": "https://drive.google.com/thumbnail?id=13QKJWJrlvYA1p5e6Qr10gagC_RqRFOGd&sz=s1200" },
    { "title": "Schneebar", "text": "", "img": "https://drive.google.com/thumbnail?id=1DngwUVnAiK4rwJKEEQ02fAFva3TLrWq3&sz=s1200" },
    { "title": "Seifenkistenrennen", "text": "", "img": "https://drive.google.com/thumbnail?id=1gRz3BQ0Jlk2XGJW1S_94e1l-H17vIDyg&sz=s1200" }
  ],

  "2006": [
    { "title": "Jugendball", "text": "Thema: Liebe", "img": "https://drive.google.com/thumbnail?id=1WkVznUpXz52cMpJS9lzM9yZ3poWW-m_H&sz=s1200" }
  ],

  "2007": [
  ],

  "2008": [
    { "title": "Jugendball", "text": "Thema: Sweet Dreams", "img": "https://drive.google.com/thumbnail?id=1pmYWQYLxGPhgwqJan58BFPbvPghU_eIM&sz=s1200" }
  ],

  "2009": [
    { "title": "Jugendball", "text": "Thema: Movies", "img": "" }
  ],

  "2010": [
    { "title": "Jugendball", "text": "Thema: Music", "img": "https://drive.google.com/thumbnail?id=1eWXOEuYzRGLhEFPztkqPibEGEkHrIlXK&sz=s1200" }
  ],

  "2011": [
    { "title": "Jugendball", "text": "Thema: Casino Royale & 10 Jahre Jugend", "img": "https://drive.google.com/thumbnail?id=1A-ErhdjB2LP8vHRbdQbL2InFUTtXQOve&sz=s1200" }
  ],

  "2012": [
    { "title": "Jugendball", "text": "Thema: Under the Sea", "img": "https://drive.google.com/thumbnail?id=1Ag_ybY3aRQJ-ZjL51WTpeuqSWc-qg6UB&sz=s1200" },
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Silvesterwanderung", "text": "", "img": "" },
    { "title": "Gemeinnützigkeit", "text": "", "img": "" }
  ],

  "2013": [
    { "title": "Jugendball", "text": "Thema: Wild, Wild West", "img": "https://drive.google.com/thumbnail?id=18O-JOUfnIpWsp2uOrFdhsNc0emB1g7Dt&sz=s1200" },
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Divers", "text": "", "img": "" },
    {"title": "Tag der offenen Baustelle", "text": "", "img": "https://drive.google.com/thumbnail?id=11SCDea5tFrSQXvKcPmPx6MLCOP1eai5D&sz=s1200"}
  ],

  "2014": [
    { "title": "Jugendball", "text": "Thema: Rock'n Blues", "img": "https://drive.google.com/thumbnail?id=1VdbIhIfWFZCV7j4OoPv-vIBTmtdKz3XJ&sz=s1200" },
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" },
    { "title": "Maibaumstellen", "text": "", "img": "https://drive.google.com/thumbnail?id=10PY00Yb79kst7nmeTHxfbX-rZnaRX9C6&sz=s1200" }
  ],

  "2015": [
    { "title": "Jugendball", "text": "Thema: Jungle", "img": "https://drive.google.com/thumbnail?id=1nYqYmAuD8Oy1XXiyK_-80JzVdHtdmZAt&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" },
    { "title": "Umbau", "text": "", "img": "https://drive.google.com/thumbnail?id=1TRt7bVllFICsW3y2K5Suw-iT_7lA1nAh&sz=s1200" },
    { "title": "Christbaum", "text": "", "img": "" },
    { "title": "Diverses", "text": "", "img": "" }
  ],

  "2016": [
    { "title": "Jugendball", "text": "Thema: Frozen", "img": "https://drive.google.com/thumbnail?id=1Fs9T_2ThdDZAYVaAZpOLEAGsso5fR4TC&sz=s1200]" },
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
    { "title": "Maibaum", "text": "", "img": "https://drive.google.com/thumbnail?id=10PY00Yb79kst7nmeTHxfbX-rZnaRX9C6&sz=s1200" },
    { "title": "Snowattack", "text": "", "img": "https://drive.google.com/thumbnail?id=1xwyvvcZYwv98-7ADH0sBsE1fIzOVv4Cs&sz=s1200" }
  ],

  "2018": [
    { "title": "Jugendball", "text": "Thema: Wonderland", "img": "https://drive.google.com/thumbnail?id=1dUj9Fyu6XA3RmOsRM7Xe8N1qt3ckrBs4&sz=s1200" },
    { "title": "Maibaumstellen", "text": "", "img": "https://drive.google.com/thumbnail?id=10PY00Yb79kst7nmeTHxfbX-rZnaRX9C6&sz=s1200" },
    { "title": "Snowattack", "text": "", "img": "https://drive.google.com/thumbnail?id=1iUj-CiltuW2XwYPKD1KCN3XOv6zVcthT&sz=s1200" },
    { "title": "Beachvolleyballturnier", "text": "", "img": "https://drive.google.com/thumbnail?id=1ZHVYQWW3yEWWDadYC3CEaGKS1L2Gn2Tn&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" }
  ],

  "2019": [
    { "title": "Jugendball", "text": "Thema: Fire & Ice", "img": "https://drive.google.com/thumbnail?id=1bYhlLT9Rc0lpMZSVS2pqlmyAGJjCi10u&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1N_bWhtA1dLIeFFIz6ZVUx1wR9Xk7_x0E&sz=s1200" },
    { "title": "Maibaumstellen", "text": "", "img": "https://drive.google.com/thumbnail?id=10PY00Yb79kst7nmeTHxfbX-rZnaRX9C6&sz=s1200" },
    { "title": "Snowattack", "text": "", "img": "" },
    { "title": "Divers", "text": "", "img": "" },

  ],

  "2020": [
    { "title": "Jugendball", "text": "Thema: Griechischer Olymp", "img": "https://drive.google.com/thumbnail?id=1IO0l6frUgneyigFgxUhd0yppis-MDLnI&sz=s1200" },
    { "title": "Nikolo", "text": "", "img": "https://drive.google.com/thumbnail?id=1wsdggk4xiEmNuN2MWLI8_V1w21KriJtY&sz=s1200" },
  ],

  "2021": [
    { "title": "Julifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1lG--UM8hFZBkDLjv0LoZcTy5sNHqITln&sz=s1200" }
  ],

  "2022": [
    { "title": "Julifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1Z3zECtmkS5JZgff057ZKr8Nn8z-Z768r&sz=s1200" },
    { "title": "SnowAttack", "text": "", "img": "https://drive.google.com/thumbnail?id=1_x6TL4q0cBNlNkTUx4tmXLNQ33YqEG9s&sz=s1200" },
    { "title": "Divers", "text": "", "img": "" },
    { "title": "Maibaumstellen", "text": "", "img": "https://drive.google.com/thumbnail?id=10PY00Yb79kst7nmeTHxfbX-rZnaRX9C6&sz=s1200" }

  ],

  "2023": [
    { "title": "Jugendball", "text": "Thema: Great Gatsby", "img": "https://drive.google.com/thumbnail?id=1BsarTqHCbBRu5GSqrNEr8JzMtiUuJQ_K&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1lPwvGpTV4hMIaYl5L-8qQegFDxu_oQdY&sz=s1200" },
    { "title": "SnowAttack", "text": "", "img": "https://drive.google.com/thumbnail?id=1_x6TL4q0cBNlNkTUx4tmXLNQ33YqEG9s&sz=s1200" },
    { "title": "Maibaumstellen", "text": "", "img": "https://drive.google.com/thumbnail?id=10PY00Yb79kst7nmeTHxfbX-rZnaRX9C6&sz=s1200" }


  ],

  "2024": [
    { "title": "Jugendball", "text": "Thema: Flower Power", "img": "https://drive.google.com/thumbnail?id=1lstD3-SiSNj_9uXXaHlKdGVesiHwFlvZ&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1wESYgaEyd1TtnYKYNTg7OnyDQHnDiojB&sz=s1200" },
    { "title": "Volleyballturnier", "text": "", "img": "https://drive.google.com/thumbnail?id=15NdcUAT_WIyktCGR6PkNPYoXqKg2FBnl&sz=s1200" },
    { "title": "Sonnwendfeier", "text": "", "img": "https://drive.google.com/thumbnail?id=1ZIIn-Tk3Mxhe2N6iBMGDprNUhsbxId1M&sz=s1200" }
  ],

  "2025": [
    { "title": "Jugendball", "text": "Thema: Mamma Mia", "img": "https://drive.google.com/thumbnail?id=13BDWwxIdgUinkyUqTSVPiMir8V2VqntK&sz=s1200" },
    { "title": "Maifest", "text": "", "img": "https://drive.google.com/thumbnail?id=1wESYgaEyd1TtnYKYNTg7OnyDQHnDiojB&sz=s1200" },
    { "title": "Volleyballturnier", "text": "", "img": "https://drive.google.com/thumbnail?id=15NdcUAT_WIyktCGR6PkNPYoXqKg2FBnl&sz=s1200" },
    { "title": "Sonnwendfeier", "text": "", "img": "https://drive.google.com/thumbnail?id=1ZIIn-Tk3Mxhe2N6iBMGDprNUhsbxId1M&sz=s1200" },
    { "title": "SnowAttack", "text": "", "img": "https://drive.google.com/thumbnail?id=1_x6TL4q0cBNlNkTUx4tmXLNQ33YqEG9s&sz=s1200" },
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

async function renderContent(year) {
    let html = '';
    
    // 1. Prüfen, ob Daten für das Jahr in der eventDatabase existieren
    if (eventDatabase[year]) {
        for (const event of eventDatabase[year]) {
            
            // 2. URL-Logik (unverändert)
            const festSafe = event.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            let galleryUrl = '';
            const currentYear = parseInt(year);

            if (currentYear >= 2001 && currentYear <= 2005) {
                galleryUrl = `2001gallery.html?year=${year}&fest=${festSafe}`;
            } else if (currentYear >= 2006 && currentYear <= 2010) {
                galleryUrl = `2006gallery.html?year=${year}&fest=${festSafe}`;
            } else if (currentYear >= 2011 && currentYear <= 2014) {
                galleryUrl = `2011gallery.html?year=${year}&fest=${festSafe}`;
            } else if (currentYear >= 2015 && currentYear <= 2020) {
                galleryUrl = `2015gallery.html?year=${year}&fest=${festSafe}`;
            } else {
                galleryUrl = `2021gallery.html?year=${year}&fest=${festSafe}`;
            }
            
            // 3. Bild-Logik: Nur ein <img>-Tag erstellen, wenn event.img existiert und nicht leer ist
            let imgHtml = '';
            if (event.img && event.img.trim() !== "") {
                imgHtml = `<img src="${event.img}" alt="${event.title}">`;
            }

            // 4. HTML zusammenbauen
            html += `
                <article class="card">
                    <a href="${galleryUrl}" style="text-decoration: none; color: inherit;">
                        ${imgHtml}
                        <div class="card-txt">
                            <h3>${event.title}</h3>
                            <p>${event.text || ""}</p>
                            <span class="card-link">MEHR INFOS</span>
                        </div>
                    </a>
                </article>
            `;
        }
    } else {
        html = `<div style="width: 100%; text-align: center; padding: 40px; opacity: 0.6;">
                    <p>Keine Einträge für das Jahr ${year} gefunden.</p>
                </div>`;
    }
    
    // 5. In den Container schreiben
    gallery.innerHTML = html;
}