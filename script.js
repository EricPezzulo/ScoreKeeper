const player1Btn = document.querySelector('#player1btn');
const player2Btn = document.querySelector('#player2btn');
const resetButton = document.querySelector('#reset');
const roundSelect = document.querySelector('#roundNum');

const player1Display = document.querySelector('#p1Display');
const player2Display = document.querySelector('#p2Display');
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;


player1Btn.addEventListener('click', () => {

    if (!isGameOver){
        p1Score +=1;
        if (p1Score === winningScore){
            isGameOver = true;
            player1Display.classList.add('winner');
            player2Display.classList.add('loser');
        }
        player1Display.textContent = p1Score;
    }
});

player2Btn.addEventListener('click', () => {
    if (!isGameOver){
        p2Score +=1;
        if (p2Score === winningScore){
            isGameOver = true;
            player2Display.classList.add('winner');
            player1Display.classList.add('loser');
        }
        player2Display.textContent = p2Score;
    }
});

roundSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    resetScore = player1Display.textContent='0';
    resetScore = player2Display.textContent='0';
    player1Display.classList.remove('winner', 'loser');
    player2Display.classList.remove('winner', 'loser');
}


