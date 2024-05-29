let slideIndex = 0;
  function showSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
  }

  function nextSlide() {
    slideIndex++;
    showSlide();
  }

  function prevSlide() {
    slideIndex--;
    showSlide();
  }
 showSlide();