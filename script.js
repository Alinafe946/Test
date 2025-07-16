// Simple slider functionality with auto-slide

let currentSlide = 0; // Index of the currently visible slide
const slides = document.querySelectorAll('.slide'); // All slide elements
const prevBtn = document.getElementById('prevBtn'); // Previous button element
const nextBtn = document.getElementById('nextBtn'); // Next button element
let autoSlideInterval; // Variable to store the interval ID for auto sliding

// Show the slide at the given index and hide others
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); // Add 'active' class to the current slide
    });
}

// Move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Increment and wrap around
    showSlide(currentSlide); // Show the new slide
}

// Move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Decrement and wrap around
    showSlide(currentSlide); // Show the new slide
}

// Start automatic sliding every 5 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Call nextSlide every 5000ms
}

// Reset the auto-slide timer (useful after manual navigation)
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Stop the current interval
    startAutoSlide(); // Start a new interval
}

// When previous button is clicked, go to previous slide and reset timer
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

// When next button is clicked, go to next slide and reset timer
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

// Initialize the slider by showing the first slide and starting auto-slide
showSlide(currentSlide);
startAutoSlide();
