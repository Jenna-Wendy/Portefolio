document.addEventListener("DOMContentLoaded", function() {
    // Get all the divs and the close buttons
    const divs = document.querySelectorAll('.grid .item');
    const closeButtons = document.querySelectorAll('.close-button');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);  // Stop observing the element after it becomes visible
            }
        });
    }, {
        threshold: 0.25
    });

    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
        if (window.innerWidth >= 640) { // Check viewport width before applying fade-in
            observer.observe(section);
        }
    });

    // Initialize Lightgallery for each gallery
    var allGalleries = document.querySelectorAll('.lightgallery');
    allGalleries.forEach(function(gallery) {
        lightGallery(gallery, {
            plugins: [lgZoom, lgFullscreen],
            thumbnail: true,
            animateThumb: false,
            showThumbByDefault: false
        });
    });
});