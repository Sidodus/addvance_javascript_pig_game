
//  Advance Pig Game Development Using Module & Revealing Module Pattern

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL Score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game.

*/



let StateCtrl = (function () {



    // Return Public Methods
    return {
        start: function (getUISelectors) {

            // Randomise Player To Start
            let randomNumber = Math.floor(Math.random() * 2);
            let randomPlayer;
            if (randomNumber === 0) {
                randomPlayer = getUISelectors.player0;
                // Reset ClassName
                document.querySelector(getUISelectors.player0Panel).className = 'player-0-panel';
                document.querySelector(getUISelectors.player1Panel).className = 'player-1-panel';
                // Set ClassName
                document.querySelector(getUISelectors.player0Panel).className = 'player-0-panel active';
            } else {
                randomPlayer = getUISelectors.player1;
                // Reset ClassName
                document.querySelector(getUISelectors.player0Panel).className = 'player-0-panel';
                document.querySelector(getUISelectors.player1Panel).className = 'player-1-panel';
                // Set ClassName
                document.querySelector(getUISelectors.player1Panel).className = 'player-1-panel active';
            }



//            console.log(randomPlayer);
//            console.log(randomNumber);
        },
        currentScoreField: [],

        randomizeDice: function () {
            // Get Selectors
            let UISelectors = UICtrl.getUISelectors();

            let currentSCORES = StateCtrl.currentScoreField;

            // Randomise Dice
            let randomDiceNumber = Math.floor(Math.random() * 6) + 1;

            let randomDice;
            let diceRoller;
            let currentScoresTotal = 0;
            if (randomDiceNumber === 1) {
                randomDice = UISelectors.dice1;
//                console.log(randomDiceNumber);

                randomDiceNumber = 0;

                return {
                    randomDiceNumber,
                    randomDice
                };

            } else if (randomDiceNumber === 2) {
                randomDice = UISelectors.dice2;
//                console.log(randomDiceNumber);

                return {
                    randomDiceNumber,
                    randomDice
                };
            } else if (randomDiceNumber === 3) {
                randomDice = UISelectors.dice3;
//                console.log(randomDiceNumber);

                return {
                    randomDiceNumber,
                    randomDice
                };
            } else if (randomDiceNumber === 4) {
                randomDice = UISelectors.dice4;
//                console.log(randomDiceNumber);

                return {
                    randomDiceNumber,
                    randomDice
                };
            } else if (randomDiceNumber === 5) {
                randomDice = UISelectors.dice5;
//                console.log(randomDiceNumber);

                return {
                    randomDiceNumber,
                    randomDice
                };
            } else {
                randomDice = UISelectors.dice6;
//                console.log(randomDiceNumber);

                return {
                    randomDiceNumber,
                    randomDice
                };
            }
        }
    };
})(); // END OF StateCtrl


let UICtrl = (function () {

    let UISelectors = {
        newGameBTN: '.btn-new',
        rollDiceBTN: '.btn-roll',
        holdBTN: '.btn-hold',
        player0: '#name-0',
        player1: '#name-1',
        player0Panel: '.player-0-panel',
        player1Panel: '.player-1-panel',
        currentScore0: '#current-0',
        currentScore1: '#current-1',
        globalPlayersScores: '.player-score',
        globalScore0: '#score-0',
        globalScore1: '#score-1',
        displayDice: '.dice',
        dice1: 'dice-1.png',
        dice2: 'dice-2.png',
        dice3: 'dice-3.png',
        dice4: 'dice-4.png',
        dice5: 'dice-5.png',
        dice6: 'dice-6.png',
        modalTitle: '.modal-title',
        modalBodyId: '#modal-body-id',
        modalFooter: document.getElementById('modal-footer')
    };

    // Return Public Methods
    return {
        getUISelectors: function () {
            return UISelectors;
        },
    }; // END OF RETURN
})(); // END OF UICtrl


let AppCtrl = (function (stateCtrl, uiCtrl) {
    const UISelectors = uiCtrl.getUISelectors();

    // Event Listener
    let allEvent = function () {
        // Listen To Stop Game Event
        let element0 = document.querySelector(UISelectors.globalScore0);
        let element1 = document.querySelector(UISelectors.globalScore1);

        element0.addEventListener('DOMSubtreeModified', stopGame0);
        element1.addEventListener('DOMSubtreeModified', stopGame1);

        // Listen For New Game
        document.querySelector(UISelectors.newGameBTN).addEventListener('click', newGame);

        // Listen For Roll Dice Event
        document.querySelector(UISelectors.rollDiceBTN).addEventListener('click', rollDice);

        // Listen For Hold BTN Event
        document.querySelector(UISelectors.holdBTN).addEventListener('click', holdPlay);

        // Stop Game0
        function stopGame0() {
            // End Game
            let globalScore0 = Number(document.querySelector(UISelectors.globalScore0).textContent);
            if (globalScore0 >= 50) {
                // Alert Game Over & Hide Roll & Hold BTN
                document.querySelector('.modal-body').classList.remove('bg-warning');
                document.querySelector('.modal-body').classList.add('bg-primary');
                document.querySelector('#modal-body-span').style.color = 'white';
                document.querySelector(UISelectors.modalTitle).innerHTML = 'GAME OVER';
                document.querySelector('#playerID').innerHTML = 'Player 1 Wins The Game With ';
                document.querySelector('#modal-body-span').innerHTML = `${globalScore0} Points`;
                UISelectors.modalFooter.innerHTML = 'Close';
                // Click Modal Btn
                let clickClose = document.querySelector('.btnClose');
                clickClose.click();

                document.querySelector(UISelectors.player0).textContent = 'WINNER!';
                document.querySelector(UISelectors.player0).classList.add('winner');
                document.querySelector(UISelectors.rollDiceBTN).style.display = 'none';
                document.querySelector(UISelectors.holdBTN).style.display = 'none';
            }
        }

        // Stop Game1
        function stopGame1() {
            // End Game
            let globalScore1 = Number(document.querySelector(UISelectors.globalScore1).textContent);
            if (globalScore1 >= 50) {
                // Alert Game Over & Hide Roll & Hold BTN
                document.querySelector('.modal-body').classList.remove('bg-warning');
                document.querySelector('.modal-body').classList.add('bg-primary');
                document.querySelector('#modal-body-span').style.color = 'white';
                document.querySelector(UISelectors.modalTitle).innerHTML = 'GAME OVER';
                document.querySelector('#playerID').innerHTML = 'Player 2 Wins The Game With ';
                document.querySelector('#modal-body-span').innerHTML = `${globalScore1} Points`;
                UISelectors.modalFooter.innerHTML = 'Close';
                // Click Modal Btn
                let clickClose = document.querySelector('.btnClose');
                clickClose.click();

                document.querySelector(UISelectors.player1).textContent = 'WINNER!';
                document.querySelector(UISelectors.player1).classList.add('winner');
                document.querySelector(UISelectors.rollDiceBTN).style.display = 'none';
                document.querySelector(UISelectors.holdBTN).style.display = 'none';
            }
        }

        function newGame() {
            let selectPlayer0 = document.querySelector(UISelectors.player0);
            let selectPlayer1 = document.querySelector(UISelectors.player1);
            let selectDisplayDice = document.querySelector(UISelectors.displayDice);
            let selectRollDiceBTN = document.querySelector(UISelectors.rollDiceBTN);
            let selectHoldBTN = document.querySelector(UISelectors.holdBTN);
            let selectGlobalScore0 = document.querySelector(UISelectors.globalScore0);
            let selectGlobalScore1 = document.querySelector(UISelectors.globalScore1);
            let selectCurrentScore0 = document.querySelector(UISelectors.currentScore0);
            let selectCurrentScore1 = document.querySelector(UISelectors.currentScore1);

//            console.log('selectCurrentScore0:', selectCurrentScore0.textContent);
//            console.log('selectCurrentScore1:', selectCurrentScore1.textContent);

            function resetUI() {
                selectDisplayDice.setAttribute('src', UISelectors.dice6);
                selectRollDiceBTN.style.display = 'inline-flex';
                selectHoldBTN.style.display = 'inline-flex';
                selectPlayer0.textContent = 'Player 0';
                selectPlayer1.textContent = 'Player 1';
                selectPlayer0.classList.remove('winner');
                selectPlayer1.classList.remove('winner');



                stateCtrl.start(UISelectors);
                stateCtrl.currentScoreField = [];
                selectGlobalScore0.innerHTML = 0;
                selectGlobalScore1.innerHTML = 0;
                selectCurrentScore0.innerHTML = 0;
                selectCurrentScore1.innerHTML = 0;
            } //END OF resetUI()

            if (selectRollDiceBTN.style.display === 'none') {
                // Game Is Alredy Over So No Need To Confirm
                // Just End The Game
                resetUI();
            } else if (selectGlobalScore0.textContent == '0' && selectGlobalScore1.textContent == '0') {
                resetUI();
            } else {
                // Confirm Player Wants To End Game
                let endGame = confirm('Do You Want To End Game!!!');

                if (endGame === true) {
                    resetUI();
                } else {
                    return;
                }
            }
        }

        // Roll Dice
        function rollDice(e) {

            // Get Dice Number & PNG
            let randomizeDiceResults = stateCtrl.randomizeDice();

            // Push Dice Number To stateCtrl.currentScoreField
            let currentScoreFieldArr = stateCtrl.currentScoreField;
            let currentScoresTotal = 0;
            if (randomizeDiceResults.randomDiceNumber === 0) {

                // Change Displayed Dice & Total
                document.querySelector(UISelectors.displayDice).setAttribute('src', randomizeDiceResults.randomDice);

                // Play Fault Audio
                let audio = new Audio('Wrong-answer-sound-effect.mp3');
                audio.play();

                // Change Background Image
                document.body.style.background = "url('back-2.png')";

                // Reset BG & Dice After 1.25Sec
                setTimeout(function(){
                    // Reset Background Image
                    document.body.style.background = "linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(back.jpg)";
                    document.body.style.backgroundPosition = 'center';
                    document.body.style.backgroundSize = 'cover';

                    // Change Displayed Dice & Total
                    document.querySelector(UISelectors.displayDice).setAttribute('src', UISelectors.dice6);
                }, 1250)

                // Reset currentScoreField To 0
                let currentScoreFieldArrLength = currentScoreFieldArr.length;
                currentScoreFieldArr.splice(0, currentScoreFieldArrLength);

                // Play Active Player
                if (document.querySelector(UISelectors.player0Panel).classList.contains('active')) {
                    document.querySelector(UISelectors.currentScore0).innerHTML = 0;
                    document.querySelector(UISelectors.player0Panel).classList.remove('active');
                    document.querySelector(UISelectors.player1Panel).classList.add('active');
                } else {
                    document.querySelector(UISelectors.currentScore1).innerHTML = 0;
                    document.querySelector(UISelectors.player1Panel).classList.remove('active');
                    document.querySelector(UISelectors.player0Panel).classList.add('active');
                }

            } else {
//                // Reset Background Image
//                document.body.style.background = "linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(back.jpg)";
//                document.body.style.backgroundPosition = 'center';
//                document.body.style.backgroundSize = 'cover';

                currentScoreFieldArr.push(randomizeDiceResults.randomDiceNumber);
//                console.log('currentScoreFieldArr', currentScoreFieldArr);

                // Display Current Score Total
                currentScoreFieldArr.forEach(function (score) {
                    currentScoresTotal += score;
                });
//                console.log('currentScoresTotal', currentScoresTotal);

                // Change Displayed Dice & Total
                document.querySelector(UISelectors.displayDice).setAttribute('src', randomizeDiceResults.randomDice);

                // Play Active Player
                if (document.querySelector(UISelectors.player0Panel).classList.contains('active')) {
                    document.querySelector(UISelectors.currentScore0).innerHTML = currentScoresTotal;
                } else {
                    document.querySelector(UISelectors.currentScore1).innerHTML = currentScoresTotal;
                }
            }
            e.preventDefault();
        } // END OF ROLL DICE

        // Hold Play
        function holdPlay() {
            let selectCurrentScore0 = document.querySelector(UISelectors.currentScore0);
            let selectCurrentScore1 = document.querySelector(UISelectors.currentScore1);
            if (selectCurrentScore0.innerHTML != 0 || selectCurrentScore1.innerHTML != 0) {
                let currentScoreFieldArr = stateCtrl.currentScoreField;
                let currentScoresTotal = 0;

                currentScoreFieldArr.forEach(function (score) {
                    currentScoresTotal += score;
                });
//                console.log('CurrentScoresTotal 2', currentScoresTotal);

                // Declear Global Scores Variables
                let globalScore = 0;
                let globalScoreTotal;

                // Play Active Player
                if (document.querySelector(UISelectors.player0Panel).classList.contains('active')) {

                    // Get Score From Global Score
                    globalScore = Number(document.querySelector(UISelectors.globalScore0).textContent);
//                    console.log(globalScore)
                    // Add Current Score To Global Score
                    globalScoreTotal = Number(globalScore) + Number(currentScoresTotal);
                    // Display New Global Score & Clear Current Score
                    document.querySelector(UISelectors.globalScore0).textContent = globalScoreTotal;
                    selectCurrentScore0.innerHTML = 0;

//                    console.log(typeof document.querySelector(UISelectors.globalScore0).innerHTML)

                    // Reset currentScoreField To 0
                    let currentScoreFieldArrLength = currentScoreFieldArr.length;
                    currentScoreFieldArr.splice(0, currentScoreFieldArrLength);

                    document.querySelector(UISelectors.player0Panel).classList.remove('active');
                    document.querySelector(UISelectors.player1Panel).classList.add('active');

                } else {
                    // Get Score From Global Score
                    globalScore = Number(document.querySelector(UISelectors.globalScore1).textContent);
//                    console.log(globalScore)
                    // Add Current Score To Global Score
                    globalScoreTotal = Number(globalScore) + Number(currentScoresTotal);
                    // Add Current Score To Global Score
                    document.querySelector(UISelectors.globalScore1).textContent = globalScoreTotal;
                    selectCurrentScore1.innerHTML = 0;

//                    console.log(typeof document.querySelector(UISelectors.globalScore1).innerHTML)

                    // Reset currentScoreField To 0
                    let currentScoreFieldArrLength = currentScoreFieldArr.length;
                    currentScoreFieldArr.splice(0, currentScoreFieldArrLength);

                    document.querySelector(UISelectors.player1Panel).classList.remove('active');
                    document.querySelector(UISelectors.player0Panel).classList.add('active');
                }
            } else {
                // Return Alert
                let title = 'You Are Not Allowed To Skip Your Turn';
                let body = 'RETURN TO PLAY GAME :)';
                let clickClose = document.querySelector('.btnClose');

                document.querySelector('.modal-body').classList.remove('bg-primary');
                document.querySelector('.modal-body').classList.add('bg-warning');
                document.querySelector('#modal-body-span').style.color ='black';
                document.querySelector(UISelectors.modalTitle).innerHTML = title;
                document.querySelector('#playerID').innerHTML = '';
                document.querySelector('#modal-body-span').innerHTML = body;
                UISelectors.modalFooter.innerHTML = 'Return';

                clickClose.click();
            }
        } // END OF holdPlay

    } // END OF allEvent





    // Return Public Methods
    return {
        init: function () {
//            console.log('Initializing...');

            // Get Selectors
            let getUISelectors = uiCtrl.getUISelectors();

            document.querySelector(getUISelectors.globalScore0).innerHTML = 0;
            document.querySelector(getUISelectors.globalScore1).innerHTML = 0;

            // Determine First Player To Start
            stateCtrl.start(getUISelectors);

            // Call Events
            allEvent();

        }
    }
})(StateCtrl, UICtrl); // END OF StateCtrl


// Call AppCtrl.init()
AppCtrl.init();
