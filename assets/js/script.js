// Coin flipper

let flipTotal = 0
let numHeads = 0
let numTails = 0
let headsPercent = 0
let tailsPercent = 0
let flipDisplay = document.querySelector('#flip-message')
let imagePennyDisplay = document.querySelector('#penny')
let headsDisplay = document.querySelector('#heads')
let tailsDisplay = document.querySelector('#tails')
let tailsPercDisplay = document.querySelector('#tails-percent')
let headsPercDisplay = document.querySelector('#heads-percent')


function updateScoreboardPenny() {
    if (numHeads != 0 && flipTotal != 0) {
        headsPercent = Math.round(numHeads/flipTotal * 100)
    } else {
        headsPercent = 0
    }
    if (numTails != 0 && flipTotal != 0) {
        tailsPercent = Math.round(numTails/flipTotal * 100)
    } else {
        tailsPercent = 0
    }
    headsDisplay.textContent = `${numHeads}`
    tailsDisplay.textContent = `${numTails}`
    headsPercDisplay.textContent = `${headsPercent}%`
    tailsPercDisplay.textContent = `${tailsPercent}%`
}

let flipCoin = document.querySelector('#flip')
flipCoin.addEventListener('click', function() {
    let flip = Math.round(Math.random() * 100)
    if (flip > 50) {
        numHeads ++
        flipTotal ++
        flipDisplay.textContent = `You Flipped Heads!`
        imagePennyDisplay.src = '../assets/images/penny-heads.jpg'
        updateScoreboardPenny()
    }
    else if (flip <= 50) {
        numTails ++
        flipTotal ++
        flipDisplay.textContent = `You Flipped Tails!`
        imagePennyDisplay.src = '../assets/images/penny-tails.jpg'
        updateScoreboardPenny()
    }
})

let clearScore1 = document.querySelector('#clear1')
clearScore1.addEventListener('click', function() {
    numHeads = 0
    numTails = 0
    flipTotal = 0
    updateScoreboardPenny()
    imagePennyDisplay.src = '../assets/images/penny-heads.jpg'
    flipDisplay.textContent = "Let's Get Rolling!"
})

// Dice roller

let rollTotal = 0
let numOne = 0
let numTwo = 0
let numThree = 0
let numFour = 0
let numFive = 0
let numSix = 0
let numOnePercent = 0
let numTwoPercent = 0
let numThreePercent = 0
let numFourPercent = 0
let numFivePercent = 0
let numSixPercent = 0
let rollDisplay = document.querySelector('#roll-message')
let imageDiceDisplay = document.querySelector('#dice')
let onesDisplay = document.querySelector('#ones')
let onesPercDisplay = document.querySelector('#ones-percent')
let twosDisplay = document.querySelector('#twos')
let twosPercDisplay = document.querySelector('#twos-percent')
let threesDisplay = document.querySelector('#threes')
let threesPercDisplay = document.querySelector('#threes-percent')
let foursDisplay = document.querySelector('#fours')
let foursPercDisplay = document.querySelector('#fours-percent')
let fivesDisplay = document.querySelector('#fives')
let fivesPercDisplay = document.querySelector('#fives-percent')
let sixesDisplay = document.querySelector('#sixes')
let sixesPercDisplay = document.querySelector('#sixes-percent')

function updateScoreboardDice() {
    if (numOne != 0 && rollTotal != 0) {
        numOnePercent = Math.round(numOne/rollTotal * 100)
    } else {
        numOnePercent = 0
    }
    if (numTwo != 0 && rollTotal != 0) {
        numTwoPercent = Math.round(numTwo/rollTotal * 100)
    } else {
        numTwoPercent = 0
    }
    if (numThree != 0 && rollTotal != 0) {
        numThreePercent = Math.round(numThree/rollTotal * 100)
    } else {
        numThreePercent = 0
    }
    if (numFour != 0 && rollTotal != 0) {
        numFourPercent = Math.round(numFour/rollTotal * 100)
    } else {
        numFourPercent = 0
    }
    if (numFive != 0 && rollTotal != 0) {
        numFivePercent = Math.round(numFive/rollTotal * 100)
    } else {
        numFivePercent = 0
    }
    if (numSix != 0 && rollTotal != 0) {
        numSixPercent = Math.round(numSix/rollTotal * 100)
    } else {
        numSixPercent = 0
    }
    onesDisplay.textContent = `${numOne}`
    onesPercDisplay.textContent = `${numOnePercent}%`
    twosDisplay.textContent = `${numTwo}`
    twosPercDisplay.textContent = `${numTwoPercent}%`
    threesDisplay.textContent = `${numThree}`
    threesPercDisplay.textContent = `${numThreePercent}%`
    foursDisplay.textContent = `${numFour}`
    foursPercDisplay.textContent = `${numFourPercent}%`
    fivesDisplay.textContent = `${numFive}`
    fivesPercDisplay.textContent = `${numFivePercent}%`
    sixesDisplay.textContent = `${numSix}`
    sixesPercDisplay.textContent = `${numSixPercent}%`
}

let rollDice = document.querySelector('#roll')
rollDice.addEventListener('click', function(){
    let roll = Math.ceil(Math.random() * 6)
    console.log(roll)
    if (roll === 1) {
        numOne ++
        rollTotal ++
        imageDiceDisplay.src = '../assets/images/dice/dice1.png'
        rollDisplay.textContent = 'You Rolled One!'
        updateScoreboardDice()
    } else if (roll === 2) {
        numTwo ++
        rollTotal ++
        imageDiceDisplay.src = '../assets/images/dice/dice2.png'
        rollDisplay.textContent = 'You Rolled Two!'
        updateScoreboardDice()
    } else if (roll === 3) {
        numThree ++
        rollTotal ++
        imageDiceDisplay.src = '../assets/images/dice/dice3.png'
        rollDisplay.textContent = 'You Rolled Three!'
        updateScoreboardDice()
    } else if (roll === 4) {
        numFour ++
        rollTotal ++
        imageDiceDisplay.src = '../assets/images/dice/dice4.png'
        rollDisplay.textContent = 'You Rolled Four!'
        updateScoreboardDice()
    } else if (roll === 5) {
        numFive ++
        rollTotal ++
        imageDiceDisplay.src = '../assets/images/dice/dice5.png'
        rollDisplay.textContent = 'You Rolled Five!'
        updateScoreboardDice()
    } else if (roll === 6) {
        numSix ++
        rollTotal ++
        imageDiceDisplay.src = '../assets/images/dice/dice6.png'
        rollDisplay.textContent = 'You Rolled Six!'
        updateScoreboardDice()
    }
})

let clearScore2 = document.querySelector('#clear2')
clearScore2.addEventListener('click', function(){
    numOne = 0
    numTwo = 0
    numThree = 0
    numFour = 0
    numFive = 0
    numSix = 0
    rollTotal = 0
    updateScoreboardDice()
    imageDiceDisplay.src = '../assets/images/dice/dice1.png'
    rollDisplay.textContent = "Let's Get Rolling!"
})