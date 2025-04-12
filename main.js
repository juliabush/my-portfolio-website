window.addEventListener('DOMContentLoaded', () => {
    const familyCarousel = document.getElementById('carousel-container');
    const track = document.getElementById('carousel-track');
  
    // Properly append children (not the node itself)
    const clone = track.cloneNode(true);
    while (clone.firstChild) {
      track.appendChild(clone.firstChild);
    }
  
    let scrollAmount = 0;
    let isPaused = false;
  
    function scrollCarousel() {
      if (!isPaused) {
        scrollAmount += 1;
        familyCarousel.scrollLeft = scrollAmount;
  
        if (scrollAmount >= track.scrollWidth / 2) {
          scrollAmount = 0;
          familyCarousel.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scrollCarousel);
    }
  
    familyCarousel.addEventListener('mouseenter', () => {
      isPaused = true;
    });
  
    familyCarousel.addEventListener('mouseleave', () => {
      isPaused = false;
    });
  
    requestAnimationFrame(scrollCarousel);
  });
  