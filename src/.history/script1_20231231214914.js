document.addEventListener('DOMContentLoaded', function () {
    const fireworksContainer = document.getElementById('fireworks-container');
    const happyNewYear = document.getElementById('happy-new-year');

    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        fireworksContainer.appendChild(firework);

        anime({
            targets: firework,
            translateX: x,
            translateY: y,
            scale: [1, anime.random(1.5, 2)],
            opacity: [1, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            complete: function () {
                fireworksContainer.removeChild(firework);
            }
        });
    }

    function animateText() {
        anime({
            targets: happyNewYear,
            opacity: [0, 1],
            translateY: ['-50%', 0],
            easing: 'easeInOutQuad',
            duration: 2000
        });
    }

    function startAnimation() {
        animateText();

        setInterval(function () {
            const x = anime.random(0, window.innerWidth);
            const y = anime.random(0, window.innerHeight);
            createFirework(x, y);
        }, 800);
    }

    startAnimation();
});
