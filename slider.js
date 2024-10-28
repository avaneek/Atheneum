let currentSlide = 0;
let slideInterval;
const slideDuration = 3000; // Duration between auto-slide in milliseconds

// Function to move slides
function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Update current slide index
    currentSlide += direction;

    // Wrap around logic (for infinite sliding)
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Move the slider to show the current slide
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide function
function startAutoSlide() {
    slideInterval = setInterval(() => {
        moveSlide(1); // Move to the next slide every slideDuration milliseconds
    }, slideDuration);
}

// Pause auto-slide when hovering over the slider
function pauseSlider() {
    clearInterval(slideInterval);
}

// Resume auto-slide when mouse leaves the slider area
function resumeSlider() {
    startAutoSlide();
}

// Start auto-slide when the page loads
window.onload = () => {
    startAutoSlide();
};
