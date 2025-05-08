// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain');
    const thunderContainer = document.querySelector('.thunder');
    const lightningImages = ['ls1.png', 'ls2.png', 'ls3.png']; // List of your lightning images
    const maxRaindrops = 500; // Maximum number of raindrops
    let raindropCount = 0;

    const createRaindrop = () => {
        if (raindropCount < maxRaindrops) {
            const raindrop = document.createElement('div');
            raindrop.classList.add('raindrop');
            raindrop.style.left = `${Math.random() * 100}vw`;
            raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`;
            raindrop.style.animationDelay = `${Math.random() * 2}s`;
            rainContainer.appendChild(raindrop);
            raindropCount++;
            
            // Remove the raindrop after the animation ends
            raindrop.addEventListener('animationend', () => {
                raindrop.remove();
                raindropCount--;
            });
        }
    };

    const createLightning = () => {
        const lightning = document.createElement('img');
        lightning.src = lightningImages[Math.floor(Math.random() * lightningImages.length)];
        lightning.classList.add('lightning');
        lightning.style.left = `${Math.random() * 100}vw`;
        lightning.style.width = `${Math.random() * 100 + 100}px`;
        lightning.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        thunderContainer.appendChild(lightning);

        const fadeDuration = Math.random() * 1900 + 100; // Random duration between 100ms and 2000ms
        
        // Flash effect
        setTimeout(() => {
            lightning.style.opacity = '1';
        }, 100);
        setTimeout(() => {
            lightning.style.transition = `opacity ${fadeDuration}ms ease-out`;
            lightning.style.opacity = '0';
        }, 100 + fadeDuration);

        // Remove the lightning after the animation ends
        setTimeout(() => {
            lightning.remove();
        }, 100 + fadeDuration * 2);
    };

    // Generate multiple raindrops at varying rates
    setInterval(() => {
        const rainIntensity = Math.random() * (10 - 1) + 1; // Random intensity between 1 and 10
        for (let i = 0; i < rainIntensity; i++) {
            createRaindrop();
        }
    }, 100);

    // Generate lightning
    setInterval(createLightning, Math.random() * 5000 + 5000);
});
