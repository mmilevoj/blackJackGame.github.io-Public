
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let mySong = document.getElementById('mySong')
let playIcon = document.getElementById('playIcon')




function playMusic(){
    if(mySong.paused){
        mySong.play();
        playIcon.scr="/Projekt- Black Jack Game/img/icons8-pause-30.png"
    } else{
        mySong.pause();
        
    }
}

function getRandomCard() {
     // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    if(randomNumber > 10){
        return 10;
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber;
    }
}

function startGame () {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame()
}

function renderGame () {
    cardsEl.textContent = `Cards: `;
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + "     ";
    }
    if (sum < 21) {
        message ='Do you want to draw another card?';
    } else if(sum === 21) {
        message = `You've got Black Jack`;
        hasBlackJack = true;
    } else{
        message ='You are out of the game, best of luck next time';
        isAlive = false;
    }
   
    messageEl.textContent = message;
    sumEl.textContent = `Sum: ${sum}`;
    
}


function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);    
        renderGame()
    }
};



