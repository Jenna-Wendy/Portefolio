document.getElementsByClassName('.animated-element').forEach(element => {
    element.addEventListener('mouseenter', () => {
        // Apply the animation
        element.style.animation = 'forwardAnimation 0.5s ease-in-out forwards';
    });

    element.addEventListener('mouseleave', () => {
        // Apply the reverse animation or reset styles
        element.style.animation = 'reverseAnimation 0.5s ease-in-out forwards';
    });
});

// TODO not working 