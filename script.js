'use strict';
//Document object model: Structure Representation of HTML document. 
// Allows Javascript to access HTML element and styles to manipulate them

//Change text,html attribute and even css style.

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;

document.querySelector('.guess').value=0;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20)+1;
let score=20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
};
const displayScore = function(score){
    document.querySelector('.score').textContent=score;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(guess, typeof guess);

//for Emojis: Window + .
    //when guess is 0
    if(guess==0){
        if(score>1){
            displayMessage('😒No Number! "ZERO"');
            score--;
            displayScore(score);
        }
        else{
            document.querySelector('.message').textContent='😭You lost the Game';
            displayScore(0);
        }
    }
    //when guess is -ve number
    else if(guess<0){
        if(score>1){
            displayMessage('😒-ve Number!');
            score--;
            displayScore(score);
        }
        else{
            displayMessage('😭You lost the Game');
            displayScore(0);
        }
    }

    //When players Wins
    else if(guess==secretNumber){
        displayMessage('👍Correct Number!');
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').style.width='30rem';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
    //when guess is not secretNumber
    else if(guess != secretNumber){
        if(score>1){
            displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
            score--;
            displayScore(score);
        }else{
            displayMessage('😭You lost the Game');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('😁Start guessing...');
    displayScore(score);

    document.querySelector('.number').textContent='?';
    
    //error in line 93
    document.querySelector('.guess').textContent='';
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem';
});
