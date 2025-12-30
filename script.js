// ==========================================
// 1. DEINE DATENBANK (Beispiele)
// ==========================================
const eventDatabase = {
    // Ära 1: Retro (bis 2007)
    "2001":[{title:"Jugendball",text:"Thema: Adam & Eva",img:"",link:"2001/Jugendball2001.html"},{title:"s'Festl",text:"Das erste organisierte Fest",img:"",link:"2001/sFestl2001.html"}],
    "2002":[{title:"Jugendball",text:"Thema: Eine Welt",img:"https://drive.google.com/thumbnail?id=1gogTIC9YMdMMWtVCguxaad7JwMw72Xvt&sz=w1000",link:"2002/Jugendball2002.html"}],
    "2003":[{title:"Jugendball",text:"Thema: Mythen und Legenden",img:"",link:"2003/Jugendball2003.html"}],
    "2004":[{title:"Jugendball",text:"Thema: Himmel & Hölle",img:"",link:"2004/Jugendball2004.html"},{title:"Maifest",text:"Das legendäre Maifest",img:""},{title:"Seifenkistenrennen",text:"",img:""}],
    "2005":[{title:"Jugendball",text:"Thema: Märchen",img:"",link:"2005/Jugendball2005.html"}],
    "2006":[{title:"Jugendball",text:"Thema: Liebe",img:"",link:"2006/Jugendball2006.html"}],

    "2007": [ ],

    
    "2008":[{title:"Jugendball",text:"Thema: Sweet Dreams",img:"",link:"2008/Jugendball2008.html"}],
    "2009":[{title:"Jugendball",text:"Thema: Movies",img:"",link:"2009/Jugendball2009.html"}],
    "2010":[{title:"Jugendball",text:"Thema: Music",img:"",link:"2010/Jugendball2010.html"}],
    "2011":[{title:"Jugendball",text:"Thema: Casino Royale & 10 Jahre Jugend",img:"",link:"2011/Jugendball2011.html"}],
    "2012":[{title:"Jugendball",text:"Thema: Under the Sea",img:"",link:"2012/Jugendball2012.html"}],

    "2013":[{title:"Jugendball",text:"Thema: Wild, Wild West",img:"",link:"2013/Jugendball2013.html"}],
    "2014":[{title:"Jugendball",text:"Thema: Rock'n Blues",img:"",link:"2014/Jugendball2014.html"}],
    "2015":[{title:"Jugendball",text:"Thema: Jungle",img:"",link:"2015/Jugendball2015.html"}],
    "2016":[{title:"Jugendball",text:"Thema: Frozen",img:"",link:"2016/Jugendball2016.html"}],
    "2017":[{title:"Jugendball",text:"Thema: Moulin Rouge",img:"",link:"2017/Jugendball2017.html"}],
    "2018":[{title:"Jugendball",text:"Thema: Wonderland",img:"",link:"2018/Jugendball2018.html"}],
    "2019":[{title:"Jugendball",text:"Thema: Fire & Ice",img:"",link:"2019/Jugendball2019.html"}],
    "2020":[{title:"Jugendball",text:"Thema: Griechischer Olymp",img:"",link:"2020/Jugendball2020.html"}],

    "2021":[],
    "2022":[],
    "2023":[{title:"Jugendball",text:"Thema: Great Gatsby",img:"",link:"2023/Jugendball2023.html"}],
    "2024":[{title:"Jugendball",text:"Thema: Flower Power",img:"",link:"2024/Jugendball2024.html"}],
    "2025":[{title:"Jugendball",text:"Thema: Mamma Mia",img:"",link:"2025/Jugendball2025.html"}],

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
    else if (year >= 2015 && year <= 2020) {
        newStyle = 'style-neon';
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
                    <img src="${imgSrc}" alt="${event.title}">
                    <div class="card-txt">
                        <h3>${event.title}</h3>
                        <p>${event.text}</p>
                    </div>
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

function renderContent(year) {
    let html = '';
    
    if (eventDatabase[year]) {
        eventDatabase[year].forEach(event => {
            const imgSrc = event.img ? event.img : `https://picsum.photos/400/300?random=${Math.random()}`;
            
            // Prüfen ob ein Link da ist, falls ja -> HTML für Button erstellen
            const linkHtml = event.link ? `<a href="${event.link}" class="card-link" target="_blank">MEHR INFOS</a>` : '';
            
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
        });
    } else {
        html = `<div style="width: 100%; text-align: center; padding: 40px; opacity: 0.6;">
                    <p>Keine Einträge für das Jahr ${year} gefunden.</p>
                </div>`;
    }
    gallery.innerHTML = html;
}