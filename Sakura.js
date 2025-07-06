const container = document.querySelector('.sakura-container');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('sakura');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (5 + Math.random() * 5) + 's';
  petal.style.opacity = Math.random();
  petal.style.fontSize = (12 + Math.random() * 10) + 'px';
  container.appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 300);
