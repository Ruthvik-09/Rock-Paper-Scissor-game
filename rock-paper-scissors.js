const score = {
    win : 0,
    losses : 0,
    tie : 0
 };

function getComputerMove(){
    const number = Math.random();
    let computerMove = '';
    if(number>= 0 && number<1/3){
        computerMove = 'Rock';
    }
    else if(number>= 1/3 && number < 2/3){
        computerMove = 'Paper';
    }
    else if(number>= 2/3 && number <1){
        computerMove = 'Scissor';
    }
    return computerMove;
}
let isAutoPlay = false;
let intervalId;
function autoPlay(){
    if(!isAutoPlay){
        intervalId = setInterval(function(){
            const playerMove = getComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlay = true;}
    else{
        clearInterval(intervalId);
        isAutoPlay= false;
    }
}

document.querySelector('.js-rock-button').addEventListener(
    'click', () => {
        playGame('Rock');
    }
);

document.querySelector('.js-paper-button').addEventListener(
    'click', () => {
        playGame('Paper');
    }
);

document.querySelector('.js-scissor-button').addEventListener(
    'click', () => {
        playGame('Scissor');
    }
);

document.querySelector('.js-reset').addEventListener(
    'click', () => {
        score.win = 0;
        score.losses = 0;
        score.tie = 0;
    }
);

document.querySelector('.js-auto-play').addEventListener(
    'click', () => {
        autoPlay();
    }
);

document.body.addEventListener('keydown', (event) => {
    if(event.key == 'r'){
        playGame('Rock');
    }
    else if(event.key == 'p'){
        playGame('Paper');
    }
    else if(event.key == 's'){
        playGame('Scissor')
    }
});
function playGame(playerMove){
    const computerMove = getComputerMove();
    let result ='';
    if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie';
        }
        else if(computerMove === 'Paper'){
            result = 'You Loose';
        }
        else if(computerMove === 'Scissor'){
            result = 'You Win';
        }
    }
    if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You Win';
        }
        else if(computerMove === 'Paper'){
            result = 'Tie';
        }
        else if(computerMove === 'Scissor'){
            result = 'You Loose';
        }
    }
    if(playerMove === 'Scissor'){
        if(computerMove === 'Rock'){
            result = 'You Loose';
        }
        else if(computerMove === 'Paper'){
            result = 'You Win';
        }
        else if(computerMove === 'Scissor'){
            result = 'Tie';
        }
    }

    if(result === 'You Win'){
        score.win++;
    }
    else if(result === 'You Loose'){
        score.losses++;
    }
    else if(result === 'Tie'){
        score.tie++;
    }

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `You <img src="${playerMove}-emoji.png" class="Img"> <img src="${computerMove}-emoji.png" class="Img"> Computer`;
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.tie}`;
}