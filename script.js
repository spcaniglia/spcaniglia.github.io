document.addEventListener('DOMContentLoaded', () => {
    const text = "I'm Sebastian Caniglia.";
    const typingText = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }

    // Start typing animation after the "Hi." fades in
    setTimeout(typeWriter, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
    const aboutText = document.getElementById('about-text');

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (aboutText.classList.contains('hidden')) {
            aboutText.classList.remove('hidden');
            // Small delay to allow display: none to be removed before starting the fade
            setTimeout(() => {
                aboutText.classList.add('visible');
            }, 10);
        } else {
            aboutText.classList.remove('visible');
            // Wait for opacity transition to finish before hiding
            setTimeout(() => {
                aboutText.classList.add('hidden');
            }, 500);
        }
    });
}); 