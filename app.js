document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const showButton = document.getElementById('showButton');
    const hiddenText = document.getElementById('hiddenText');
    let isTextVisible = false;
    
    showButton.addEventListener('click', () => {
      if (isTextVisible) {
        hiddenText.style.display = 'none';
        showButton.textContent = 'Read';
      } else {
        hiddenText.style.display = 'block';
        showButton.textContent = 'Hide';
      }
      isTextVisible = !isTextVisible;
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Забороняємо стандартну дію посилання (перехід за посиланням)
        
        const targetId = this.getAttribute('href').substring(1); // Отримуємо ідентифікатор абзацу
        const targetElement = document.getElementById(targetId); // Знаходимо абзац за ідентифікатором
        
        if (targetElement) {
          // Виконуємо плавне прокручування до абзацу
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Додаємо плавну анімацію
          });
        }
      });
    });
  });