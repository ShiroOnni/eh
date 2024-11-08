// Création d'effets de cœurs flottants
const heartContainer = document.getElementById('hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heartContainer.appendChild(heart);

    // Position aléatoire et animation de durée
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 4 + 's';

    // Taille aléatoire pour varier les cœurs
    const randomSize = Math.random() * 20 + 30; // Taille entre 30px et 50px
    heart.style.width = `${randomSize}px`;
    heart.style.height = `${randomSize}px`;

    setTimeout(() => {
        heart.remove();
    }, 6000); // Nettoie les cœurs après leur animation
}

// Génère un cœur toutes les 700 millisecondes
setInterval(createHeart, 700);

// Contrôle de la musique
const music = document.getElementById('background-music');
const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const musicIcon = document.getElementById('music-icon');

function startMusic() {
    music.play();
    startScreen.style.display = 'none';  // Cache l'écran de démarrage
    mainContent.style.display = 'block'; // Affiche le contenu principal
    musicIcon.style.display = 'block';   // Affiche l'icône de contrôle du son
}

// Fonction pour alterner entre jouer et pause
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.textContent = "🔊";
    } else {
        music.pause();
        musicIcon.textContent = "🔇";
    }
}
