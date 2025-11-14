const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 100,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += 2;
        if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}
drawConfetti();
window.addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    music.muted = false;
    music.play();
}, { once: true });
document.getElementById('play-music').addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    music.muted = false;
    music.play();
});