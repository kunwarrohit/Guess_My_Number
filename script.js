'use strict';

let secretNumber=Math.trunc( Math.random() * 20 ) + 1;

let score=20;
let highscore=0;

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',
function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent='No Number!'
        displayMessage('No Number!');
    }
    //when player wins
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent='Correct Number!👍';
        displayMessage('Correct Number!👍');

        document.querySelector('.number').textContent=secretNumber;
        score++;
        document.querySelector('.score').textContent=score;

        document.querySelector('body').style.backgroundColor='#60b347';
        
        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;            
        }
        
    }
    //when guess is wrong
    else if(quess!==secretNumber){
        if(score >1){
            // document.querySelector('.message').textContent=guess > secretNumber ? '📉Too Low!':'📈Too High!';
            displayMessage(guess > secretNumber ? '📉Too High!':'📈Too Low!');

            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            // document.querySelector('.message').textContent='😬You Lost the Game'
            displayMessage('😬You Lost the Game');
            document.querySelector('.score').textContent=0;
        }
    }

    // //when guess is too high
    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent='📈Too High!';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent='😬You Lost the Game';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
    // //when guess is too low
    // else{
    //     if(score >1){
    //         document.querySelector('.message').textContent='📉Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent='😬You Lost the Game'
    //         document.querySelector('.score').textContent=0;
    //     }
    // }

});


document.querySelector('.again').addEventListener('click', 
function(){
    score=20;
    secretNumber=Math.trunc( Math.random() * 20 ) + 1;

    // document.querySelector('.message').textContent='Start guessing rohit....';
    displayMessage('Start guessing rohit....');

    document.querySelector('.score').textContent=score;

    document.querySelector('.number').textContent='?';

    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'

});
