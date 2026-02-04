// MENU MOBILE
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

// cria botão hamburguer dinamicamente
const menuBtn = document.createElement('button');
menuBtn.classList.add('menu-toggle');
menuBtn.setAttribute('aria-label', 'Abrir menu');
menuBtn.innerHTML = '☰';
header.querySelector('.header-content').appendChild(menuBtn);

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  const expanded = nav.classList.contains('active');
  menuBtn.setAttribute('aria-expanded', expanded);
});

// fecha menu ao clicar em link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

// FAQ ACCORDION
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = document.getElementById(btn.getAttribute('aria-controls'));
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    if (expanded) {
      btn.setAttribute('aria-expanded', 'false');
      answer.hidden = true;
      btn.querySelector('.icon').textContent = '+';
    } else {
      btn.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
      btn.querySelector('.icon').textContent = '−';
    }
  });
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
