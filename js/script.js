let slideIndex = 0;
const slides = document.querySelector('.slides');
const dotsContainer = document.querySelector('.dots');
const slidesCount = document.querySelectorAll('.slide').length;
let autoPlayTimer;

// Función para iniciar el auto-play
function startAutoPlay() {
  autoPlayTimer = setInterval(() => {
    goToSlide(slideIndex + 1);
  }, 4000);
}

// Función para reiniciar el auto-play
function resetAutoPlay() {
  clearInterval(autoPlayTimer);
  startAutoPlay();
}

// Crear puntos
for (let i = 0; i < slidesCount; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    goToSlide(i);
    resetAutoPlay();
  });
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function goToSlide(index) {
  slideIndex = index;
  if (slideIndex >= slidesCount) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slidesCount - 1;
  
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  updateDots();
}

document.querySelector('.prev').addEventListener('click', () => {
  goToSlide(slideIndex - 1);
  resetAutoPlay();
});

document.querySelector('.next').addEventListener('click', () => {
  goToSlide(slideIndex + 1);
  resetAutoPlay();
});

// Inicializar
dots[0].classList.add('active');
startAutoPlay(); // Iniciar el auto-play al cargar

document.querySelectorAll('.CAJA1').forEach(function(element) {
  element.addEventListener('click', function() {
      const url = element.getAttribute('data-url');
      if (url) {
          window.location.href = url;
      }
  });
});

document.querySelectorAll('.slide').forEach(slide => {
  const link = document.createElement('a');
  link.href = slide.dataset.url;
  link.className = 'slide-link';
  slide.insertBefore(link, slide.firstChild);
});

// Asegúrate de detener el auto-play al hacer clic en una slide
document.querySelectorAll('.slide').forEach(slide => {
  slide.addEventListener('click', (e) => {
    if (e.target.closest('.prev, .next, .dot')) return; // Ignora clics en controles
    clearInterval(autoPlayTimer);
  });
});