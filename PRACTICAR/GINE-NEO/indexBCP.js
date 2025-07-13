// Funcionalidad del slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
	slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlider();
});

prevBtn.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlider();
});

// Funcionalidad de giro de tarjetas
document.querySelectorAll('.flip-btn').forEach(button => {
	button.addEventListener('click', () => {
		const card = button.closest('.card');
		card.classList.toggle('flip');
	});
});