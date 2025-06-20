const flipCoinButton = document.getElementById('flip-coin');
const coinImage = document.getElementById('coin');
const resultMessage = document.getElementById('result');

function flipCoin() {
  const result = Math.random(); // número aleatório de 0 a 1

  if (result < 0.5) {
    coinImage.src = 'assets/cara.png';
    coinImage.setAttribute('alt', 'moeda de um real com a cara virada para cima');
    resultMessage.textContent = 'cara';
    resultMessage.className = 'cara';
  } else {
    coinImage.src = 'assets/coroa.png';
    coinImage.setAttribute('alt', 'moeda de um real com a coroa virada para cima');
    resultMessage.textContent = 'coroa';
    resultMessage.className = 'coroa';
  }
}

flipCoinButton.addEventListener('click', () => {
  resultMessage.textContent = '';
  resultMessage.className = '';
  coinImage.classList.add('flip-animation');

  setTimeout(() => {
    flipCoin();
    coinImage.classList.remove('flip-animation');
  }, 1000);
});
