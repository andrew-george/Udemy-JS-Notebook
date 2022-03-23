'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let message = document.querySelector('.message');
let highscoreField = document.querySelector('.highscore');
let scoreField = document.querySelector('.score');
let secretNumberField = document.querySelector('.number');

let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  message.textContent = msg;
};

let checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');

    //When player win
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    secretNumberField.style.width = '30rem';
    secretNumberField.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      highscoreField.textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '⬆ Guess is too High!' : '⬇ Guess is too Low!'
      );
      score--;
      scoreField.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreField.textContent = 0;
    }
  }
});

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', () => {
  score = 20;
  scoreField.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  secretNumberField.textContent = '?';
  secretNumberField.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
