'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const body = document.querySelector('body');
const numberField = document.querySelector('.number');
const scoreField = document.querySelector('.score');
const highscoreField = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkButton.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🔢 Not a valid Number!');
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct, you won!');
    body.style.backgroundColor = '#60b347';
    numberField.textContent = secretNumber;
    numberField.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highscoreField.textContent = highscore;
    }
    return;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreField.textContent = score;
    } else {
      displayMessage('😩 You lose. Try again');
      body.style.backgroundColor = '#c10420';
      score = 0;
      scoreField.textContent = score;
    }
  }
});

againButton.addEventListener('click', function () {
  score = 20;
  body.style.backgroundColor = '#222';
  numberField.style.width = '15rem';
  scoreField.textContent = score;
  highscoreField.textContent = highscore;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');

  numberField.textContent = '?';
  document.querySelector('.guess').value = '';
});
