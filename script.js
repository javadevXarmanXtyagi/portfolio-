// Typing Effect using Typed.js
const typed = new Typed(".typing", {
  strings: ["Aspiring Java Full Stack Developer"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// Theme Toggle (Light/Dark)
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Scroll Animation (Fade in)
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});