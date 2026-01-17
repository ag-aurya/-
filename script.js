// Scroll animation
const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

// FAQ

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;

    // Fecha os outros (efeito mais profissional)
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');
  });
});


//document.querySelectorAll(".faq-btn").forEach(btn => {
  //btn.addEventListener("click", () => {
    //const content = btn.nextElementSibling;
    //content.style.display =
      //content.style.display === "block" ? "none" : "block";
  //});
//});

// Form
document.getElementById("leadForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("status").innerText =
    "Recebemos seu contato. Em breve falaremos com você.";
  e.target.reset();
});
