const flipCoinButton = document.getElementById('flip-coin');
const coinImage = document.getElementById('coin');
const resultMessage = document.getElementById('result');

flipCoinButton.addEventListener('click', () => {
  const result = Math.random(); // número aleatório de 0 a 1

  if (result < 0.5) {
    coinImage.src = 'assets/cara.png';
    resultMessage.textContent = 'cara';
    resultMessage.className = 'cara';
  } else {
    coinImage.src = 'assets/coroa.png';
    resultMessage.textContent = 'coroa';
    resultMessage.className = 'coroa';
  }
});
