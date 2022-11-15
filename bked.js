let playerScore = 0;
let computerScore = 0;
let draw = 0;

let usrRock = document.querySelector('#imgrock');
let usrPaper = document.querySelector('#imgpaper');
let usrScissor = document.querySelector('#imgscissor');

function getComputerChoice () {
    let selector = ['rock', 'paper', 'scissor'];
    let selectedWord = selector[Math.floor(Math.random() * selector.length)];
    if(selectedWord == 'rock') {
        imgpch.setAttribute('src', 'rock.png');
    } else if (selectedWord =='paper') {
        imgpch.setAttribute('src', 'paper.png');
    } else {
        imgpch.setAttribute('src', 'scissors.png');
    }
    return selectedWord;
};

usrRock.addEventListener('click', () => {
    let a = getComputerChoice();
     if (a == 'paper') {
         computerScore++;
     } else if (a == 'scissor') {
         playerScore++;
     } else {
         draw++;
     }
     yourscore.innerHTML = `Your score is: ${playerScore}`;
     pcscore.innerHTML = `Computer score is: ${computerScore}`;
});

usrPaper.addEventListener('click', () => {
    let a = getComputerChoice();
    if (a == 'scissor') {
        computerScore++;
    } else if (a == 'rock') {
        playerScore++;
    } else {
        draw++;
    }
    yourscore.innerHTML = `Your score is ${playerScore}`;
    pcscore.innerHTML = `Computer score is ${computerScore}`;
});

usrScissor.addEventListener('click', () => {
    let a = getComputerChoice();
    if (a == 'rock') {
        computerScore++;
    } else if (a == 'paper') {
        playerScore++;
    } else {
        draw++;
    }
    yourscore.innerHTML = `Your score is ${playerScore}`;
    pcscore.innerHTML = `Computer score is ${computerScore}`;
});