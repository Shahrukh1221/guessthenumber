'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //If user didnt input anything
  if (!guess) {
    displayMessage('⛔No number');
    console.log(!guess);
  }
  //If user inputs the correct number
  else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '💥💥💥Correct Number';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When the guess is not equal to my number
  else if (guess !== number) {
    displayMessage(guess > number ? 'Guess too High💹' : 'Guess to Low⏬');
    if (score > 1) {
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //If user guesses the number greater than the correct number
  //   else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Guess too High💹';
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //If user guesses the number greater than the correct number
  //   else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Guess to Low⏬';
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Again Functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
