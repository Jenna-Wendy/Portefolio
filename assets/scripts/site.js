document.addEventListener("DOMContentLoaded", function() {
    // Get all the divs, the Swiper containers, and the close buttons
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
        observer.observe(section);
    });

    // Function to update slides per view based on viewport width
    function updateSlidesPerView(swiper, index) {
        const slidesPerView = getSlidesPerView(index);
        swiper.params.slidesPerView = slidesPerView;
        swiper.update();
    }

    // Function to get slides per view based on viewport width
    function getSlidesPerView(index) {
        if (index === 5 || index === 6) {
            return 1; // Always 1 slide for indexes 5 and 6
        } else {
            // Responsive settings based on viewport width
            if (window.innerWidth < 600) {
                return 1; // 1 slide on small screens
            } else if (window.innerWidth < 1024) {
                return 2; // 2 slides on medium screens
            } else {
                return 3; // 3 slides on large screens
            }
        }
    }

    // Loop through the divs
    divs.forEach((div, index) => {
        // Get the corresponding swiper container
        let swiper = new Swiper(`#swip-0${index + 1}`, {
            pagination: {
                el: `.swiper-pagination`,
                clickable: true,
            },
            navigation: {
                nextEl: `.swiper-button-next`,
                prevEl: `.swiper-button-prev`,
            },
            slidesPerView: getSlidesPerView(index + 1),
            spaceBetween: 30,
        });

        // Add a click event listener to each div
        div.addEventListener('click', () => {
            // Toggle visibility
            if (swiper.el.style.display === "none" || swiper.el.style.display === "") {
                swiper.el.style.display = "block";
            } else {
                swiper.el.style.display = "none";
            }
        });

        // Update slides per view on window resize
        window.addEventListener('resize', () => {
            updateSlidesPerView(swiper, index + 1);
        });
    });

    // Add click event listeners to the close buttons
    closeButtons.forEach((closeButton, index) => {
        let swiper = document.getElementById(`swip-0${index + 1}`);
        closeButton.addEventListener('click', () => {
            // Hide the corresponding swiper container
            swiper.style.display = "none";
        });
    });
});