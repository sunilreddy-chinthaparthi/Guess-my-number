'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secreatNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no number
  if (!guess) {
    // document.querySelector('.message').textContent = 'Enter a number to check!';
    displayMessage('Enter a number to check!');
    //when player wins
  } else if (guess === secreatNumber) {
    // document.querySelector('.message').textContent = 'correct number';
    displayMessage('correct number');
    document.querySelector('.number').textContent = secreatNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '300px';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is not eqal to secreat number
  } else if (guess !== secreatNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secreatNumber
      //     ? 'guess a smaller number'
      //     : 'guess a larger number';
      displayMessage(
        guess > secreatNumber ? 'guess smaller 👎' : 'guess larger 👍'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lost the game';
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  // when guess is larger than secreat number
  // } else if (guess > secreatNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'guess a smaller number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }

  //   //when guess is smaller than secreat number
  // } else if (guess < secreatNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'guess a larger number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

// clearing the screen using again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '150px';
});
