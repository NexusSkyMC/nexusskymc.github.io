/* ==========================================================================
   NEXUS SKY - Interactive JavaScript Engine & Canvas Animations
   ========================================================================== */

// HTML5 Halloween Background Canvas
const canvas = document.getElementById('halloween-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class HalloweenParticle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * width;
        this.y = height + 20;
        this.size = Math.random() * 4 + 2;
        this.speedY = -(Math.random() * 1.2 + 0.4);
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.type = Math.random() < 0.2 ? 'pumpkin' : (Math.random() < 0.35 ? 'bat' : 'ember');
        this.alpha = Math.random() * 0.8 + 0.2;
        this.rot = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.05;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rot += this.rotSpeed;
        if (this.y < -30) this.reset();
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.globalAlpha = this.alpha;

        if (this.type === 'ember') {
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--accent-orange').trim();
            ctx.fill();
        } else if (this.type === 'pumpkin') {
            ctx.fillStyle = '#ff6600';
            ctx.beginPath();
            ctx.ellipse(0, 0, 8, 6, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ffff00';
            ctx.fillRect(-3, -2, 2, 2);
            ctx.fillRect(1, -2, 2, 2);
        } else if (this.type === 'bat') {
            ctx.fillStyle = '#9d00ff';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(-6, -6, -10, -2);
            ctx.quadraticCurveTo(-4, 2, 0, 1);
            ctx.quadraticCurveTo(4, 2, 10, -2);
            ctx.quadraticCurveTo(6, -6, 0, 0);
            ctx.fill();
        }
        ctx.restore();
    }
}

for (let i = 0; i < 70; i++) particles.push(new HalloweenParticle());

function animateCanvas() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateCanvas);
}
animateCanvas();

// Theme Toggle Engine
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.innerText = newTheme === 'light' ? '🌾 Pumpkin Patch' : '🎃 Spooky Night';
}

// Clipboard Helper & Toast
function copyText(inputId, label) {
    const val = document.getElementById(inputId).value;
    navigator.clipboard.writeText(val).then(() => showToast(`${label} copied: ${val}`));
}

function showToast(msg) {
    const toast = document.getElementById('toast-msg');
    toast.innerText = msg;
    toast.className = 'show';
    setTimeout(() => { toast.className = ''; }, 3000);
}

// Complete 100+ Unique Custom Sol-Type Aura Registry
const allAuras = [
    // Standard Rarity Tier
    { name: "Common", color: "#a0a0a0", chance: "1 in 2", category: "standard" },
    { name: "Uncommon", color: "#00d2ff", chance: "1 in 4", category: "standard" },
    { name: "Good", color: "#00ff66", chance: "1 in 5", category: "standard" },
    { name: "Natural", color: "#88cc44", chance: "1 in 8", category: "standard" },
    { name: "Rare", color: "#0088ff", chance: "1 in 16", category: "standard" },
    { name: "Divinus", color: "#ffff88", chance: "1 in 32", category: "standard" },
    { name: "Crystallized", color: "#00ffff", chance: "1 in 64", category: "standard" },
    { name: "Topaz", color: "#ffaa00", chance: "1 in 125", category: "standard" },
    { name: "Ruby", color: "#ff0044", chance: "1 in 250", category: "standard" },
    { name: "Emerald", color: "#00ff88", chance: "1 in 500", category: "standard" },
    { name: "Gilded", color: "#ffd700", chance: "1 in 512", category: "standard" },
    { name: "Gilded : Jackpot", color: "#ffea00", chance: "1 in 777", category: "standard" },
    { name: "Ink", color: "#666666", chance: "1 in 700", category: "standard" },
    { name: "Wind", color: "#aaffff", chance: "1 in 900", category: "standard" },
    { name: "Aquamarine", color: "#00bfff", chance: "1 in 1,200", category: "standard" },
    { name: "Diaboli", color: "#aa0000", chance: "1 in 1,004", category: "standard" },
    { name: "Precious", color: "#ff66cc", chance: "1 in 1,024", category: "standard" },
    { name: "Glock", color: "#888888", chance: "1 in 1,700", category: "standard" },
    { name: "Magnetic", color: "#ff00bb", chance: "1 in 2,048", category: "standard" },
    { name: "Sidarium", color: "#778899", chance: "1 in 2,500", category: "standard" },
    { name: "Bleeding", color: "#990000", chance: "1 in 3,000", category: "standard" },
    { name: "Solar", color: "#ff8800", chance: "1 in 5,000", category: "standard" },
    { name: "Lunar", color: "#aa88ff", chance: "1 in 5,000", category: "standard" },
    { name: "Hazard", color: "#ccff00", chance: "1 in 7,000", category: "standard" },
    { name: "Flared", color: "#ff4400", chance: "1 in 8,192", category: "standard" },
    { name: "Glacier", color: "#88ffff", chance: "1 in 9,208", category: "standard" },
    { name: "Corrosive", color: "#00ff33", chance: "1 in 12,000", category: "standard" },
    { name: "Rage", color: "#ff2200", chance: "1 in 12,800", category: "standard" },
    { name: "Rage : Heated", color: "#ff5500", chance: "1 in 128,000", category: "standard" },
    { name: "Quartz", color: "#ffffff", chance: "1 in 15,000", category: "standard" },
    { name: "Starlight", color: "#ffffaa", chance: "1 in 20,000", category: "standard" },
    { name: "Permafrost", color: "#00aaff", chance: "1 in 24,500", category: "standard" },
    { name: "Starlight : Rebirth", color: "#ffee88", chance: "1 in 50,000", category: "standard" },
    { name: "Boundless", color: "#4400cc", chance: "1 in 60,000", category: "standard" },
    { name: "Gilded : Midas", color: "#ffcc00", chance: "1 in 64,000", category: "standard" },
    { name: "Comet", color: "#0099ff", chance: "1 in 120,000", category: "standard" },
    { name: "Jade", color: "#00cc66", chance: "1 in 125,000", category: "standard" },
    { name: "Nectar", color: "#ffaa33", chance: "1 in 150,000", category: "standard" },
    { name: "Chaos", color: "#8800bb", chance: "1 in 200,000", category: "standard" },
    { name: "Kyawthuite", color: "#ff3366", chance: "1 in 250,000", category: "standard" },
    { name: "Arcane", color: "#9d00ff", chance: "1 in 1,000,000", category: "standard" },
    { name: "Gravitational", color: "#330066", chance: "1 in 2,000,000", category: "standard" },
    { name: "Virtual", color: "#00ffcc", chance: "1 in 2,500,000", category: "standard" },
    { name: "Sailor", color: "#0066cc", chance: "1 in 3,000,000", category: "standard" },
    { name: "Poseidon", color: "#0099cc", chance: "1 in 4,000,000", category: "standard" },
    { name: "Aquarius", color: "#33ffff", chance: "1 in 4,500,000", category: "standard" },

    // Halloween Exclusives
    { name: "Jack-O'-Glow", color: "#ff7700", chance: "1 in 8,888", category: "halloween" },
    { name: "Phantom", color: "#d1c4e9", chance: "1 in 13,333", category: "halloween" },
    { name: "Specter", color: "#b388ff", chance: "1 in 25,000", category: "halloween" },
    { name: "Haunted Flame", color: "#ff3d00", chance: "1 in 66,666", category: "halloween" },
    { name: "Witchcraft", color: "#aa00ff", chance: "1 in 100,000", category: "halloween" },
    { name: "Soul Reaper", color: "#1a237e", chance: "1 in 333,333", category: "halloween" },
    { name: "Pumpkin King", color: "#ff6d00", chance: "1 in 666,666", category: "halloween" },
    { name: "Necromancer", color: "#00e676", chance: "1 in 1,333,333", category: "halloween" },
    { name: "Blood Moon", color: "#d50000", chance: "1 in 2,500,000", category: "halloween" },
    { name: "Omen of Spook", color: "#ff3d00", chance: "1 in 200,000,000", category: "halloween" },

    // Celestial / High Sol-Type Tier
    { name: "Overdrive", color: "#ff1744", chance: "1 in 350,000", category: "celestial" },
    { name: "Supernova", color: "#ff9100", chance: "1 in 450,000", category: "celestial" },
    { name: "Astral Nova", color: "#651fff", chance: "1 in 600,000", category: "celestial" },
    { name: "Vortex", color: "#00e5ff", chance: "1 in 850,000", category: "celestial" },
    { name: "Eclipse", color: "#311b92", chance: "1 in 1,200,000", category: "celestial" },
    { name: "Pulsar", color: "#f50057", chance: "1 in 1,500,000", category: "celestial" },
    { name: "Cosmic Burst", color: "#d500f9", chance: "1 in 1,800,000", category: "celestial" },
    { name: "Nebula", color: "#6200ea", chance: "1 in 2,200,000", category: "celestial" },
    { name: "Zero Kelvin", color: "#80d8ff", chance: "1 in 2,800,000", category: "celestial" },
    { name: "Aether", color: "#ffd180", chance: "1 in 3,200,000", category: "celestial" },
    { name: "Abyssal", color: "#004d40", chance: "1 in 3,800,000", category: "celestial" },
    { name: "Luminosity", color: "#ffff8d", chance: "1 in 4,200,000", category: "celestial" },
    { name: "Chronos", color: "#a7ffeb", chance: "1 in 5,000,000", category: "celestial" },
    { name: "Diaboli : Void", color: "#330000", chance: "1 in 10,040,000", category: "celestial" },
    { name: "Hades", color: "#ff0000", chance: "1 in 6,666,666", category: "celestial" },
    { name: "Hyper-Volt", color: "#ffff00", chance: "1 in 7,500,000", category: "celestial" },
    { name: "Glitch", color: "#00ffaa", chance: "1 in 12,345,678", category: "celestial" },
    { name: "Celestial", color: "#ff88ff", chance: "1 in 15,000,000", category: "celestial" },
    { name: "Infinitum", color: "#ff80ab", chance: "1 in 6,000,000", category: "celestial" },
    { name: "Singularity", color: "#18ffff", chance: "1 in 7,200,000", category: "celestial" },
    { name: "Borealis", color: "#69f0ae", chance: "1 in 8,000,000", category: "celestial" },
    { name: "Inferno", color: "#ff3d00", chance: "1 in 8,500,000", category: "celestial" },
    { name: "Tsunami", color: "#29b6f6", chance: "1 in 9,000,000", category: "celestial" },
    { name: "Cataclysm", color: "#dd2c00", chance: "1 in 9,800,000", category: "celestial" },
    { name: "Oblivion", color: "#555555", chance: "1 in 11,000,000", category: "celestial" },
    { name: "Aetheria", color: "#e040fb", chance: "1 in 12,000,000", category: "celestial" },
    { name: "Galactica", color: "#7c4dff", chance: "1 in 13,500,000", category: "celestial" },
    { name: "Zenith", color: "#ffff00", chance: "1 in 14,000,000", category: "celestial" },
    { name: "Radiance", color: "#ffd740", chance: "1 in 16,000,000", category: "celestial" },
    { name: "Twilight", color: "#536def", chance: "1 in 17,500,000", category: "celestial" },
    { name: "Solarian", color: "#ffab40", chance: "1 in 18,000,000", category: "celestial" },
    { name: "Astral Warden", color: "#00b0ff", chance: "1 in 20,000,000", category: "celestial" },
    { name: "Elysium", color: "#18ffff", chance: "1 in 22,000,000", category: "celestial" },
    { name: "Genesis", color: "#b9f6ca", chance: "1 in 25,000,000", category: "celestial" },
    { name: "Omega", color: "#ff5252", chance: "1 in 28,000,000", category: "celestial" },
    { name: "Quantum", color: "#64ffda", chance: "1 in 30,000,000", category: "celestial" },
    { name: "Aethelgard", color: "#e040fb", chance: "1 in 32,000,000", category: "celestial" },
    { name: "Valhalla", color: "#ffd740", chance: "1 in 35,000,000", category: "celestial" },
    { name: "Primordial", color: "#00e676", chance: "1 in 40,000,000", category: "celestial" },
    { name: "Titanium", color: "#cfd8dc", chance: "1 in 42,000,000", category: "celestial" },
    { name: "Supernova : Rebirth", color: "#ff6d00", chance: "1 in 45,000,000", category: "celestial" },
    { name: "Void Monarch", color: "#4a148c", chance: "1 in 50,000,000", category: "celestial" },
    { name: "Cosmic Sovereign", color: "#00bfa5", chance: "1 in 60,000,000", category: "celestial" },
    { name: "Sol's Divinity", color: "#ffab00", chance: "1 in 75,000,000", category: "celestial" },
    { name: "Apex Celestial", color: "#ff4081", chance: "1 in 100,000,000", category: "celestial" },
    { name: "Nexus Prime", color: "#00e5ff", chance: "1 in 150,000,000", category: "celestial" },
    { name: "Omnipotent", color: "#ffffff", chance: "1 in 500,000,000", category: "celestial" }
];

let currentCategory = 'all';

function renderAuras(list) {
    const grid = document.getElementById('aura-grid');
    grid.innerHTML = '';
    list.forEach(a => {
        const card = document.createElement('div');
        card.className = 'aura-card';
        card.innerHTML = `
            <div class="aura-card-name" style="color: ${a.color}">${a.name}</div>
            <div class="aura-card-chance">${a.chance}</div>
        `;
        grid.appendChild(card);
    });
}

function filterAuraCatalog() {
    const query = document.getElementById('aura-search-input').value.toLowerCase();
    const filtered = allAuras.filter(a => {
        const matchesCategory = currentCategory === 'all' || a.category === currentCategory;
        const matchesSearch = a.name.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });
    renderAuras(filtered);
}

function setAuraFilter(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    filterAuraCatalog();
}

// Web RNG Roll Simulator & History
let autoRollInterval = null;

function triggerWebRoll() {
    const nameElem = document.getElementById('display-aura-name');
    const chanceElem = document.getElementById('display-aura-chance');
    const displayBox = document.getElementById('roll-display-box');

    nameElem.innerText = "🎲 ROLLING...";
    chanceElem.innerText = "Invoking Sol's RNG Engine...";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * allAuras.length);
        const rolled = allAuras[randomIndex];

        nameElem.style.color = rolled.color;
        nameElem.innerText = rolled.name;
        chanceElem.innerText = `Rarity: ${rolled.chance}`;
        displayBox.style.borderColor = rolled.color;

        addRollHistory(rolled);
    }, 280);
}

function toggleAutoRoll() {
    const btn = document.getElementById('auto-roll-toggle');
    if (autoRollInterval) {
        clearInterval(autoRollInterval);
        autoRollInterval = null;
        btn.innerText = "⚡ Auto Roll: OFF";
        btn.classList.remove('active');
    } else {
        triggerWebRoll();
        autoRollInterval = setInterval(triggerWebRoll, 1600);
        btn.innerText = "⚡ Auto Roll: ON";
        btn.classList.add('active');
    }
}

function addRollHistory(aura) {
    const historyList = document.getElementById('roll-history-list');
    const emptyMsg = historyList.querySelector('.history-empty');
    if (emptyMsg) emptyMsg.remove();

    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
        <span style="color:${aura.color}; font-weight:800;">${aura.name}</span>
        <span>${aura.chance}</span>
    `;

    historyList.insertBefore(item, historyList.firstChild);

    if (historyList.children.length > 8) {
        historyList.removeChild(historyList.lastChild);
    }
}

// Collapsible FAQ
function toggleFaq(btn) {
    const ans = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const isActive = ans.classList.contains('active');

    ans.classList.toggle('active');
    icon.innerText = isActive ? '+' : '-';
}

// Fast Scroll Event Listener for Hero Button
document.addEventListener('DOMContentLoaded', () => {
    renderAuras(allAuras);

    const rngBtn = document.querySelector('a[href="#simulator"]');
    if (rngBtn) {
        rngBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById('simulator');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});
