import * as Ancients from "./data/ancients.js";
import * as Blue from "./data/mythicCards/blue/index.js";
import * as Brown from "./data/mythicCards/brown/index.js";
import * as Green from "./data/mythicCards/green/index.js";

const azathothImage = document.querySelector('.Azathoth');
const cthulthuImage = document.querySelector('.Cthulthu');
const iogSothothImage = document.querySelector('.IogSothoth');
const shubNiggurathImage = document.querySelector('.ShubNiggurath');
const buttons = document.querySelectorAll('.difficulty');
const difficultyContainer = document.querySelector('.difficulty-container');
const trackContainer = document.querySelector('.track-container');

const firstGreen = document.querySelector('.first-green-count');
const firstBrown = document.querySelector('.first-brown-count');
const firstBlue = document.querySelector('.first-blue-count');

const secondGreen = document.querySelector('.second-green-count');
const secondBrown = document.querySelector('.second-brown-count');
const secondBlue = document.querySelector('.second-blue-count');

const thirdBrown = document.querySelector('.third-brown-count');
const thirdGreen = document.querySelector('.third-green-count');
const thirdBlue = document.querySelector('.third-blue-count');

const firstStageTitle = document.querySelector('.first-title');
const secondStageTitle = document.querySelector('.second-title');
const thirdStageTitle = document.querySelector('.third-title');

const deckImage = document.querySelector('.deck');
const openCard = document.querySelector('.open-card');



let choosedAncient = {};
let deck = [];
let gameDeck = [];

azathothImage.addEventListener('click', () => {
    cthulthuImage.classList.remove('active-ancident');
    iogSothothImage.classList.remove('active-ancident');
    shubNiggurathImage.classList.remove('active-ancident');
    azathothImage.classList.add('active-ancident');
    difficultyContainer.style.opacity = '1';
    choosedAncient = Ancients.ancientsData[0];
    deckImage.classList.remove('deck-active');
    openCard.style.background = 'none';
    trackContainer.classList.remove('track-active');
    buttons.forEach(elem => {
        elem.classList.remove('difficulty-active');
    })
    buttons[buttons.length - 1].classList.remove('shuffle-active');
    firstStageTitle.classList.remove('finished');
    secondStageTitle.classList.remove('finished');
    thirdStageTitle.classList.remove('finished');
})

cthulthuImage.addEventListener('click', () => {
    iogSothothImage.classList.remove('active-ancient');
    shubNiggurathImage.classList.remove('active-ancient');
    azathothImage.classList.remove('active-ancient');
    cthulthuImage.classList.add('active-ancient');
    difficultyContainer.style.opacity = '1';
    choosedAncient = Ancients.ancientsData[1];
    deckImage.classList.remove('deck-active');
    openCard.style.background = 'none';
    trackContainer.classList.remove('track-active');
    buttons.forEach(elem => {
        elem.classList.remove('difficulty-active');
    })
    buttons[buttons.length - 1].classList.remove('shuffle-active');
    firstStageTitle.classList.remove('finished');
    secondStageTitle.classList.remove('finished');
    thirdStageTitle.classList.remove('finished');
})

iogSothothImage.addEventListener('click', () => {
    cthulthuImage.classList.remove('active-ancident');
    shubNiggurathImage.classList.remove('active-ancident');
    azathothImage.classList.remove('active-ancident');
    iogSothothImage.classList.add('active-ancident');
    difficultyContainer.style.opacity = '1';
    choosedAncient = Ancients.ancientsData[2];
    deckImage.classList.remove('deck-active');
    openCard.style.background = 'none';
    trackContainer.classList.remove('track-active');
    buttons.forEach(elem => {
        elem.classList.remove('difficulty-active');
    })
    buttons[buttons.length - 1].classList.remove('shuffle-active');
    firstStageTitle.classList.remove('finished');
    secondStageTitle.classList.remove('finished');
    thirdStageTitle.classList.remove('finished');
})

shubNiggurathImage.addEventListener('click', () => {
    cthulthuImage.classList.remove('active-ancident');
    iogSothothImage.classList.remove('active-ancident');
    azathothImage.classList.remove('active-ancident');
    shubNiggurathImage.classList.add('active-ancident');
    difficultyContainer.style.opacity = '1';
    choosedAncient = Ancients.ancientsData[3];
    deckImage.classList.remove('deck-active');
    openCard.style.background = 'none';
    trackContainer.classList.remove('track-active');
    buttons.forEach(elem => {
        elem.classList.remove('difficulty-active');
    })
    buttons[buttons.length - 1].classList.remove('shuffle-active');
    firstStageTitle.classList.remove('finished');
    secondStageTitle.classList.remove('finished');
    thirdStageTitle.classList.remove('finished');
})

deckImage.addEventListener('click', () => {

    let popCard;
    if (!gameDeck[0].every(val => val.length === 0)) {
        while (!popCard) {
            popCard = deleteCard(gameDeck[0]);
        }
        openCard.style.background = `url(${popCard.cardFace})`;
        openCard.style.backgroundSize = "contain";
        openCard.style.backgroundRepeat = "no-repeat";
        rewrite(gameDeck);

        if (gameDeck[0].flat(Infinity).length === 0) {
            firstStageTitle.classList.add('finished');
        }

    } else if (!gameDeck[1].every(val => val.length === 0)) {

        while (!popCard) {
            popCard = deleteCard(gameDeck[1]);
        }
        openCard.style.background = `url(${popCard.cardFace})`;
        openCard.style.backgroundSize = "contain";
        openCard.style.backgroundRepeat = "no-repeat";
        rewrite(gameDeck);

        if (gameDeck[1].flat(Infinity).length === 0) {
            secondStageTitle.classList.add('finished');
        }

    } else if (!gameDeck[2].every(val => val.length === 0)) {
        while (!popCard) {
            popCard = deleteCard(gameDeck[2]);
        }
        openCard.style.background = `url(${popCard.cardFace})`;
        openCard.style.backgroundSize = "contain";
        openCard.style.backgroundRepeat = "no-repeat";
        rewrite(gameDeck);

        if (gameDeck[2].flat(Infinity).length === 0) {
            thirdStageTitle.classList.add('finished');
        }
    }
    if (gameDeck.flat(Infinity).length === 0) {
        deckImage.classList.remove('deck-active');
    }
})

const deleteCard = (deckArray) => {
    if (deckArray) {
        let randNumb = Math.floor(Math.random() * 3);
        return deckArray[randNumb].pop();
    }
}

buttons.forEach(elem => {
    elem.addEventListener('click', (event) => {
        firstStageTitle.classList.remove('finished');
        secondStageTitle.classList.remove('finished');
        thirdStageTitle.classList.remove('finished');
        deckImage.classList.remove('deck-active');
        openCard.style.background = 'none';
        trackContainer.classList.remove('track-active');
        buttons.forEach(item => {
            if (!event.target.classList.contains('shuffle-button')) {
                item.classList.remove('difficulty-active')
            }
        })
        if (event.target.classList.contains('veryeasy-button')) {
            deck = buildDeckfromDifficulty(Blue, Brown, Green, 'veryeasy');
            buttons[buttons.length - 1].classList.add('shuffle-active');
            elem.classList.add('difficulty-active');
        } else if (event.target.classList.contains('easy-button')) {
            deck = shuffle(buildDeckfromDifficulty(Blue, Brown, Green, 'easy'))
            buttons[buttons.length - 1].classList.add('shuffle-active');
            elem.classList.add('difficulty-active');
        } else if (event.target.classList.contains('normal-button')) {
            deck = shuffle(buildDeckfromDifficulty(Blue, Brown, Green, 'normal'))
            buttons[buttons.length - 1].classList.add('shuffle-active');
            elem.classList.add('difficulty-active');
        } else if (event.target.classList.contains('hard-button')) {
            deck = shuffle(buildDeckfromDifficulty(Blue, Brown, Green, 'hard'))
            buttons[buttons.length - 1].classList.add('shuffle-active');
            elem.classList.add('difficulty-active');
        } else if (event.target.classList.contains('veryhard-button')) {
            deck = buildDeckfromDifficulty(Blue, Brown, Green, 'veryhard');
            buttons[buttons.length - 1].classList.add('shuffle-active');
            elem.classList.add('difficulty-active');
        } else if (event.target.classList.contains('shuffle-button')) {
            gameDeck = shuffleDeck(choosedAncient);
            rewrite(gameDeck);
            deckImage.classList.add('deck-active');
            trackContainer.classList.add('track-active');
            buttons[buttons.length - 1].classList.remove('shuffle-active');
        }
    })
})


const buildDeckfromDifficulty = (Blue, Brown, Green, difficulty) => {
    let fullDeck = [...Blue.cardsData, ...Brown.cardsData, ...Green.cardsData];
    let easyCards = [];
    let normalCards = [];
    let hardCards = [];
    fullDeck.forEach(elem => {
        if (elem.difficulty === 'easy') {
            easyCards.push(elem);
        } else if (elem.difficulty === 'normal') {
            normalCards.push(elem);
        } else {
            hardCards.push(elem);
        }
    })
    switch (difficulty) {
        case 'veryeasy': {
            return [...shuffle(easyCards), ...shuffle(normalCards)];
        }
        case 'easy': {
            return [...shuffle(easyCards), ...shuffle(normalCards)];
        }
        case 'normal': {
            return [...shuffle(easyCards), ...shuffle(normalCards), ...shuffle(hardCards)];
        }
        case 'hard': {
            return [...shuffle(normalCards), ...shuffle(hardCards)];
        }
        case 'veryhard': {
            return [...shuffle(hardCards), ...shuffle(normalCards)];
        }
    }

}

const stagesCreate = (stage, deck) => {

    let greenCards = [];
    let brownCards = [];
    let blueCards = [];

    for (const key in stage) {
        for (let i = 0; i < stage[key]; i++) {
            if (key === 'greenCards') {
                const index = deck.findIndex(value => value.color === 'green');
                greenCards.push(...deck.splice(index, 1));
            } else if (key === 'brownCards') {
                const index = deck.findIndex(value => value.color === 'brown');
                brownCards.push(...deck.splice(index, 1));
            } else if (key === 'blueCards') {
                const index = deck.findIndex(value => value.color === 'blue');
                blueCards.push(...deck.splice(index, 1));
            }
        }
    }
    return [shuffle(greenCards), shuffle(brownCards), shuffle(blueCards)]

}



const shuffleDeck = (boss) => {

    const first = stagesCreate(boss.firstStage, deck);
    const second = stagesCreate(boss.secondStage, deck);
    const third = stagesCreate(boss.thirdStage, deck);

    return [first, second, third];


}

const rewrite = (array) => {

    firstGreen.textContent = array[0][0].length;
    firstBrown.textContent = array[0][1].length;
    firstBlue.textContent = array[0][2].length;

    secondGreen.textContent = array[1][0].length;
    secondBrown.textContent = array[1][1].length;
    secondBlue.textContent = array[1][2].length;

    thirdGreen.textContent = array[2][0].length;
    thirdBrown.textContent = array[2][1].length;
    thirdBlue.textContent = array[2][2].length;
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}