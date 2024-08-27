document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openmenu(){
    sidemenu.classList.remove("close-menu");
    sidemenu.classList.add("open-menu");
}

function closemenu(){
    sidemenu.classList.remove("open-menu");
    sidemenu.classList.add("close-menu");
}

document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.getElementById('animated-text');

    // Reset the width to 0 to start the animation
    animatedText.style.width = '0';

    // Trigger the animation
    setTimeout(() => {
        animatedText.style.animation = 'typing 3s steps(30, end) forwards, blink 0.5s step-end infinite';
    }, 500); // Delay to ensure the page is fully loaded
});
