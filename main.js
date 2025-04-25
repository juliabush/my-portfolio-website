document.addEventListener("DOMContentLoaded", () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const openMenu = document.getElementById("open-menu");
  const menuContents = document.getElementById("menu-contents")
  dropdownMenu.addEventListener("click", () => {
    dropdownMenu.classList.add("invisible");
    openMenu.classList.add("visible");
    menuContents.classList.add("visible");
  });
  openMenu.addEventListener("click", () => {
    dropdownMenu.classList.remove("invisible");
    openMenu.classList.remove("visible");
    menuContents.classList.remove("visible");
  });
});



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
