// Get all the divs, the Swiper container, and the close button
const divs = document.querySelectorAll('.grid .item');
const swiperContainer = document.querySelector('.swiper-container');
const closeButton = document.querySelector('.close-button');

// Initialize the Swiper
let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Loop through the divs
divs.forEach((div, index) => {
    // Add a click event listener to each div
    div.addEventListener('click', () => {
        // Show the Swiper container
        swiperContainer.style.display = 'block';

        // Slide to the corresponding slide
        swiper.slideTo(index);
    });
});

// Add a click event listener to the close button
closeButton.addEventListener('click', () => {
    // Hide the Swiper container
    swiperContainer.style.display = 'none';
});

// Add a click event listener to the Swiper container
swiperContainer.addEventListener('click', (event) => {
    // If the click was outside the slide, hide the Swiper container
    if (!event.target.closest('.swiper-slide')) {
        swiperContainer.style.display = 'none';
    }
});