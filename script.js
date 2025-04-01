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