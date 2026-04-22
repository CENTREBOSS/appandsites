// --- MA'LUMOTLAR BAZASI (Siz shu yerdan tahrirlaysiz) ---
const database = [
    {
        id: 1,
        type: "app", // 'app' - bu ilova uchun
        name: "DualStack Secure Mobile",
        description: "Mobil qurilmalar uchun kuchaytirilgan xavfsizlik ilovasi.",
        url: "./files/dualstack-secure.apk" // APK faylingizning saytdagi manzili
    },
    {
        id: 2,
        type: "app",
        name: "DualStack VPN 2023",
        description: "Korporativ tarmoqqa xavfsiz ulanish uchun VPN mijoz.",
        url: "./files/dualstack-vpn.apk"
    },
    {
        id: 3,
        type: "site", // 'site' - bu veb-sayt uchun
        name: "DualStackSecurity Link Detective",
        description: "Linklarning xavfsizligini tekshirish, virus yoki fishingdan saqlanish.",
        url: "https://https://dualstacklink.vercel.app/" // Haqiqiy sayt manzili
    },
    {
        id: 4,
        type: "site",
        name: "DualStackSecurity INFO",
        description: "DSS haqida ma'lumotlar.",
        url: "https://DualStackSecurity.vercel.app"
    }
];

// Dastur ishga tushganda ishlashi kerak bo'lgan funksiyalar
document.addEventListener("DOMContentLoaded", () => {
    renderItems();
    setupSupportForm();
});

// Ma'lumotlarni HTML ga chizish (Render) funksiyasi
function renderItems() {
    const appsContainer = document.getElementById("apps-container");
    const sitesContainer = document.getElementById("sites-container");

    database.forEach(item => {
        // Karta (Card) yaratamiz
        const card = document.createElement("div");
        card.className = "card";
        
        let buttonHTML = "";

        // Agar turi 'app' bo'lsa (Yuklab olish tugmasi)
        if (item.type === "app") {
            buttonHTML = `<a href="${item.url}" download class="btn btn-download">APK Yuklab olish</a>`;
        } 
        // Agar turi 'site' bo'lsa (Saytga kirish tugmasi)
        else if (item.type === "site") {
            buttonHTML = `<a href="${item.url}" target="_blank" class="btn btn-visit">Saytga kirish</a>`;
        }

        // Kartaning ichki qismini yozamiz
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            ${buttonHTML}
        `;

        // Tegishli bo'limga qo'shamiz
        if (item.type === "app") {
            appsContainer.appendChild(card);
        } else if (item.type === "site") {
            sitesContainer.appendChild(card);
        }
    });
}

// Qo'llab-quvvatlash qismi (Support Form)
function setupSupportForm() {
    const form = document.getElementById("support-form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Sayt yangilanib ketishining oldini olish
        
        const name = document.getElementById("user-name").value;
        const message = document.getElementById("user-message").value;
        
        // Email manzili va xat mazmunini tayyorlash
        const email = "DualStackSecurity@gmail.com";
        const subject = encodeURIComponent("Support - Dual Stack Security");
        const body = encodeURIComponent(`Ism: ${name}\n\nXabar:\n${message}`);
        
        // Foydalanuvchining default pochta dasturini ochish (mailto)
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        
        // Formani tozalash
        form.reset();
    });
}
