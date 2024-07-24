// Update: JS code is now switched to pure vanilla for proper page functionality with Recent work section / jQuery is still in use for other functions

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    var main = document.getElementById('main');
    var parallaxFactor = 20;
    var isParallaxEnabled = true;

    // Function to handle parallax effect
    function updateParallax() {
        if (isParallaxEnabled) {
            var scrollTop = window.scrollY;
            header.style.backgroundPosition = 'left ' + (-scrollTop / parallaxFactor) + 'px';
        }
    }

    // Event listener for scroll
    window.addEventListener('scroll', updateParallax);

    // Initial parallax update
    updateParallax();

    // Handle load event
    window.addEventListener('load', function() {
        document.body.classList.remove('is-preload');
    });

    // Handle breakpoints
    function handleBreakpoints() {
        var windowWidth = window.innerWidth;

        if (windowWidth <= 737) { // Medium breakpoint or smaller
            if (footer.parentNode !== main.parentNode) {
                main.parentNode.insertBefore(footer, main.nextSibling);
            }
        } else { // Larger than medium
            if (footer.parentNode !== header) {
                header.appendChild(footer);
            }
        }
    }

    // Initial check
    handleBreakpoints();

    // Listen for resize events
    window.addEventListener('resize', handleBreakpoints);

    // Touch detection
    var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
        document.body.classList.add('is-touch');
    }
});
