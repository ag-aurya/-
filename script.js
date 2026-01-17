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
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Form
document.getElementById("leadForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("status").innerText =
    "Recebemos seu contato. Em breve falaremos com você.";
  e.target.reset();
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtctcNQPseVHpQd61sI_1seLOb3-krj0c",
  authDomain: "aurya-hub.firebaseapp.com",
  projectId: "aurya-hub",
  storageBucket: "aurya-hub.firebasestorage.app",
  messagingSenderId: "283097338550",
  appId: "1:283097338550:web:42d0edf2ed975525fd8c17",
  measurementId: "G-LJ0LENVLB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

