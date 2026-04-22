// 1. MA'LUMOTLAR BAZASI (Shu yerni tahrirlashingiz mumkin)
const database = [
    {
        id: 1,
        title: "Security Shield App",
        description: "Android uchun kuchli antivirus va himoya.",
        link: "https://example.com/files/security-shield.apk",
        type: "app" // APK yuklab olish uchun
    },
    {
        id: 2,
        title: "Link detective",
        description: "Link xavfsizligini tekshiruvchi sayt.",
        link: "https://dualstacksecuritydetective.netlify.app",
        type: "site" // Brauzerda ochish uchun
    },
    {
        id: 3,
        title: "Cyber Monitoring",
        description: "Tizimni real vaqtda kuzatish ilovasi.",
        link: "https://mysite.uz/app.apk",
        type: "app"
    }
];

// 2. ELEMENTLARNI EKRANGA CHIQARISH
const appContainer = document.getElementById('app-container');
const siteContainer = document.getElementById('site-container');

function loadData() {
    database.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button class="btn" onclick="handleAction('${item.link}', '${item.type}')">
                ${item.type === 'app' ? 'Yuklab olish (APK)' : 'Saytga o'tish'}
            </button>
        `;

        if (item.type === 'app') {
            appContainer.appendChild(card);
        } else {
            siteContainer.appendChild(card);
        }
    });
}

// 3. YUKLAB OLISH YOKI SAYTNI OCHISH LOGIKASI
function handleAction(link, type) {
    if (type === 'app') {
        // APK faylni yuklab olish uchun "download" atributini simulyatsiya qilamiz
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.download = ''; 
        anchor.target = '_blank';
        anchor.click();
    } else {
        // Saytni yangi oynada ochish
        window.open(link, '_blank');
    }
}

// 4. SUPPORT (EMAIL) FUNKSIYASI
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = "DualStackSecurity@gmail.com";
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('message').value;
    
    // Default email klienti ochiladi
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
});

// Sayt yuklanganda ma'lumotlarni chiqarish
window.onload = loadData;
