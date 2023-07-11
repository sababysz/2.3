// Obtém o elemento do botão "Explore"
const botaoExplore = document.getElementById('botao-explore');

// Atribui um evento de clique ao botão "Explore"
botaoExplore.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection('#quebra-galho');
});

// Obtém o elemento do botão "Mais"
const botaoMais = document.getElementById('botao-mais');

// Atribui um evento de clique ao botão "Mais"
botaoMais.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection('#footer');
});

// Função para rolar suavemente até uma seção específica
function scrollToSection(selector) {
  const section = document.querySelector(selector);
  section.scrollIntoView({ behavior: 'smooth' });
}

// SCRIPT DOS BOTÕES HOME ☝️


// SCRIPT DO SLIDER 👇
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 3000);
showSlide();
// SCRIPT DO SLIDER ☝️
