const player1Btn = document.querySelector('#player1btn');
const player2Btn = document.querySelector('#player2btn');
const reset = document.querySelector('#reset');

const player1Score = document.querySelector('#currentScoreP1');
const player2Score = document.querySelector('#currentScoreP2');


player1Btn.addEventListener('click', function (e) {
    e.preventDefault();
    updatedP1Score = player1Score.innerText++;
});


player2Btn.addEventListener('click', function (e) {
    e.preventDefault();
    updatedP2Score = player2Score.innerText++;
});

reset.addEventListener('click', (e) => {
    e.preventDefault();
    resetScore = player1Score.innerText='0';
    resetScore = player2Score.innerText='0';
})