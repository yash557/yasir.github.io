let currentPage = 0;
const pages = document.querySelectorAll('.page');

document.getElementById('book').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.opacity = 0;
        currentPage++;
        pages[currentPage].style.opacity = 1;
    }
});

// Unmute music on first click
window.addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    music.muted = false;
    music.play();
}, { once: true });

// Countdown Timer for Dec 23
function updateCountdown() {
    const targetDate = new Date('2025-12-23T00:00:00');
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('timer').textContent = "🎉 It's your day!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);