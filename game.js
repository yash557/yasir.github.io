const grid = document.getElementById('cardGrid');
const secretIndex = Math.floor(Math.random() * 9);

for (let i = 0; i < 9; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = '🎁';

    card.addEventListener('click', () => {
        if (i === secretIndex) {
            card.textContent = '🎉';
            card.style.backgroundColor = '#a5d6a7';
            alert('🎉 You found the secret message!');
            setTimeout(() => {
                window.location.href = 'memories.html';
            }, 1000);
        } else {
            card.textContent = '❌';
            card.style.backgroundColor = '#ef9a9a';
            card.style.pointerEvents = 'none'; // disable after clicked
        }
    });

    grid.appendChild(card);
}