const elements = document.querySelectorAll('.TextBlock-Container');

function checkScroll() {
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop <= window.innerHeight * 0.8) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);