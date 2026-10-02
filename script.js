const canvas = document.getElementById('halloween-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

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
            ctx.fillStyle = '#a822ff';
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

for (let i = 0; i < 65; i++) particles.push(new HalloweenParticle());

function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.innerText = newTheme === 'light' ? '🌾 Pumpkin Patch' : '🎃 Spooky Night';
}

function copyFieldValue(id, label) {
    const val = document.getElementById(id).value;
    navigator.clipboard.writeText(val).then(() => showToast(`${label}: ${val}`));
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.className = 'show';
    setTimeout(() => { toast.className = ''; }, 3000);
}

const allAuras = [
    { name: "Common", color: "#a0a0a0", chance: "1 in 2" },
    { name: "Uncommon", color: "#00d2ff", chance: "1 in 4" },
    { name: "Good", color: "#00ff66", chance: "1 in 5" },
    { name: "Natural", color: "#88cc44", chance: "1 in 8" },
    { name: "Rare", color: "#0088ff", chance: "1 in 16" },
    { name: "Divinus", color: "#ffff88", chance: "1 in 32" },
    { name: "Crystallized", color: "#00ffff", chance: "1 in 64" },
    { name: "Topaz", color: "#ffaa00", chance: "1 in 125" },
    { name: "Ruby", color: "#ff0044", chance: "1 in 250" },
    { name: "Emerald", color: "#00ff88", chance: "1 in 500" },
    { name: "Gilded", color: "#ffd700", chance: "1 in 512" },
    { name: "Gilded : Jackpot", color: "#ffea00", chance: "1 in 777" },
    { name: "Ink", color: "#444444", chance: "1 in 700" },
    { name: "Wind", color: "#aaffff", chance: "1 in 900" },
    { name: "Aquamarine", color: "#00bfff", chance: "1 in 1,200" },
    { name: "Diaboli", color: "#aa0000", chance: "1 in 1,004" },
    { name: "Precious", color: "#ff66cc", chance: "1 in 1,024" },
    { name: "Glock", color: "#666666", chance: "1 in 1,700" },
    { name: "Magnetic", color: "#ff00bb", chance: "1 in 2,048" },
    { name: "Sidarium", color: "#778899", chance: "1 in 2,500" },
    { name: "Bleeding", color: "#990000", chance: "1 in 3,000" },
    { name: "Solar", color: "#ff8800", chance: "1 in 5,000" },
    { name: "Lunar", color: "#aa88ff", chance: "1 in 5,000" },
    { name: "Hazard", color: "#ccff00", chance: "1 in 7,000" },
    { name: "Flared", color: "#ff4400", chance: "1 in 8,192" },
    { name: "Glacier", color: "#88ffff", chance: "1 in 9,208" },
    { name: "Corrosive", color: "#00ff33", chance: "1 in 12,000" },
    { name: "Rage", color: "#ff2200", chance: "1 in 12,800" },
    { name: "Rage : Heated", color: "#ff5500", chance: "1 in 128,000" },
    { name: "Quartz", color: "#ffffff", chance: "1 in 15,000" },
    { name: "Starlight", color: "#ffffaa", chance: "1 in 20,000" },
    { name: "Permafrost", color: "#00aaff", chance: "1 in 24,500" },
    { name: "Starlight : Rebirth", color: "#ffee88", chance: "1 in 50,000" },
    { name: "Boundless", color: "#4400cc", chance: "1 in 60,000" },
    { name: "Gilded : Midas", color: "#ffcc00", chance: "1 in 64,000" },
    { name: "Comet", color: "#0099ff", chance: "1 in 120,000" },
    { name: "Jade", color: "#00cc66", chance: "1 in 125,000" },
    { name: "Nectar", color: "#ffaa33", chance: "1 in 150,000" },
    { name: "Chaos", color: "#8800bb", chance: "1 in 200,000" },
    { name: "Kyawthuite", color: "#ff3366", chance: "1 in 250,000" },
    { name: "Arcane", color: "#a822ff", chance: "1 in 1,000,000" },
    { name: "Gravitational", color: "#330066", chance: "1 in 2,000,000" },
    { name: "Virtual", color: "#00ffcc", chance: "1 in 2,500,000" },
    { name: "Pumpkin-King", color: "#ff6600", chance: "1 in 3,100,000" },
    { name: "Jack-O'-Glow", color: "#ff9900", chance: "1 in 4,500,000" },
    { name: "Sailor", color: "#0066cc", chance: "1 in 3,000,000" },
    { name: "Poseidon", color: "#0099cc", chance: "1 in 4,000,000" },
    { name: "Aquarius", color: "#33ffff", chance: "1 in 4,500,000" },
    { name: "Diaboli : Void", color: "#330000", chance: "1 in 10,040,000" },
    { name: "Hades", color: "#ff0000", chance: "1 in 6,666,666" },
    { name: "Hyper-Volt", color: "#ffff00", chance: "1 in 7,500,000" },
    { name: "Glitch", color: "#00ffaa", chance: "1 in 12,345,678" },
    { name: "Celestial", color: "#ff88ff", chance: "1 in 15,000,000" },
    ...Array.from({ length: 50 }, (_, i) => ({
        name: `Sol-Aura Mark ${i + 1}`,
        color: ["#ff7700", "#a822ff", "#00ff66", "#00d2ff", "#ff0055"][i % 5],
        chance: `1 in ${(i + 1) * 150000}`
    }))
];

function renderAuraGrid(aurasToRender) {
    const grid = document.getElementById('aura-grid-display');
    grid.innerHTML = '';
    aurasToRender.forEach(a => {
        const card = document.createElement('div');
        card.className = 'aura-card';
        card.innerHTML = `
            <div class="aura-card-name" style="color: ${a.color};">${a.name}</div>
            <div class="aura-card-chance">${a.chance}</div>
        `;
        grid.appendChild(card);
    });
}

renderAuraGrid(allAuras);

function filterAuras() {
    const query = document.getElementById('aura-search').value.toLowerCase();
    const filtered = allAuras.filter(a => a.name.toLowerCase().includes(query));
    renderAuraGrid(filtered);
}

function rollAuraSimulator() {
    const nameElem = document.getElementById('roll-name');
    const chanceElem = document.getElementById('roll-chance');
    nameElem.innerText = "🎲 Rolling...";
    chanceElem.innerText = "Invoking Sol's RNG Engine...";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * allAuras.length);
        const rolled = allAuras[randomIndex];
        nameElem.style.color = rolled.color;
        nameElem.innerText = rolled.name;
        chanceElem.innerText = `Rarity: ${rolled.chance}`;
    }, 350);
}

function toggleFaq(btn) {
    const ans = btn.nextElementSibling;
    ans.classList.toggle('active');
}
