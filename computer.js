//  Advance Pig Game Development Using Module & Revealing Module Pattern

/*
GAME RULES:

- The game has 2 players, playing in rounds (Now Enhanced With Computer Play Mode)
- In each turn, a player / Computer rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL Score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game.

GAME UPDATE:

Game Play With Computer Enabled.
Players Can Decide To Play Alone Or Play With Computer Just With A Click Of A Button (Default Play Is Manual Play).
Players Can Now Set A New End Game Number. You Only Have To Set It Once (But can Change It At Any Time);
Players Winning Ratio Is Calculated And Dispayed On Game Load And On Game Win/Lose.
Players Can Now Set Their Prefered Name.
*/

let ComputerCtrl = (function () {

    // Return Public Methods
    return {
        monitor: function () {

            // JavaScript - Jquery Mutation Plugin
            $(".player-0-panel").attrchange({
                trackValues: true, // Set To true so that the event object is updatedwitth old & new values
                callback: function (evnt) {
                    if (evnt.attributeName == 'class') { // The attribute to watch for changes
                        if (evnt.newValue.search(/active/i) == -1) { // The class name to searcch for
                            ComputerCtrl.computerNotPlaying();
                        } else {
                            ComputerCtrl.computerPlaying();
                            //                            console.trace()
                        }
                    }
                }
            }) // END OF JavaScript - Jquery Mutation Plugin
        }, // END OF ComputerCtrl monitor()

        // computerNotPlaying();
        computerNotPlaying: function () {
            let getUISelectors = UICtrl.getUISelectors();

//            console.log('computerNotPlaying()');

            if (getUISelectors.player0.classList.contains('winner') || getUISelectors.player1.classList.contains('winner')) {
//                console.log('Winner Emerged');

                getUISelectors.newGameBTN.style.display = 'block';

                // Adjust Background
                getUISelectors.player0Panel.style.background = '';
                getUISelectors.player0Panel.style.color = 'black';

                document.querySelector('#small-num').style.color = 'black';

                // Remove Active & Stop From Computer
                getUISelectors.player0.classList.remove('active');

            } else {
                getUISelectors.newGameBTN.style.display = 'block';
                getUISelectors.rollDiceBTN.style.display = 'block';
                getUISelectors.holdBTN.style.display = 'block';

                // Adjust Background
                getUISelectors.player1Panel.style.background = 'url("img/Saheed-Odulaja-JS-3D-Logo-JS-by-me+++.png")';
                getUISelectors.player1Panel.style.backgroundSize = 'cover';
                getUISelectors.player1Panel.style.backgroundPosition = 'center';

                // Adjust Background
                getUISelectors.player0Panel.style.background = '';
                getUISelectors.player0Panel.style.color = 'black';

                document.querySelector('#small-num').style.color = 'black';
            }
        }, // END OF computerNotPlaying()

        // computerPlaying
        computerPlaying: function () {
            //            console.trace()
            let getUISelectors = UICtrl.getUISelectors();

//            console.log('COMPUTER PLAYING')

            getUISelectors.newGameBTN.style.display = 'none';
            getUISelectors.rollDiceBTN.style.display = 'none';
            getUISelectors.holdBTN.style.display = 'none';

            // Adjust Background
            getUISelectors.player1Panel.style.background = '';

            // Adjust Background
            getUISelectors.player0Panel.style.background = 'url("img/giphy2.gif")';
            getUISelectors.player0Panel.style.color = 'white';

            document.querySelector('#small-num').style.color = 'white';

            /*
             **Get Random Number Btw 1 & 4
             */

            let randomNum = Math.floor(Math.random() * 4) + 1;
//            console.log('MAIN RANDOM NUMBER IS: ', randomNum)

//            console.trace()
            // Set Global Delay Of 1.8Sec Before Computer Starts Playing
            setTimeout(function () { //-------------------------------------------

                // Number Of Play Attempt
                if (randomNum === 1) {
//                    console.log('RANDOM NUMBER @: ', randomNum)
                    setTimeout(function () {
                        AppCtrl.rolling();
                        if (document.body.style.background === 'url("img/back-2.png")') {
//                            console.log("YES ERROR BG")
                            //                            return
                        } else {
//                            console.log("NO ERROR BG")
                            setTimeout(function () {
                                AppCtrl.holding();
                            }, 2000); // END OF 2ND TIMEOUT
                        } // END OF IF ELSE BACKGROUND
                    }, 1200)
                } else if (randomNum === 2) {
//                    console.log('RANDOM NUMBER @: ', randomNum)
                    setTimeout(function () {
                        AppCtrl.rolling();

                        if (document.body.style.background === 'url("img/back-2.png")') {
//                            console.log("YES ERROR BG")
                            //                            return
                        } else {
//                            console.log("NO ERROR BG")
                            setTimeout(function () {
                                AppCtrl.rolling();
                                if (document.body.style.background === 'url("img/back-2.png")') {
//                                    console.log("YES ERROR BG")
                                    //                                    return
                                } else {
//                                    console.log("NO ERROR BG")
                                    setTimeout(function () {
                                        AppCtrl.holding();
                                    }, 2800); // END OF 2ND TIMEOUT
                                } // END OF IF ELSE BACKGROUND
                            }, 2000); // END OF 2ND TIMEOUT
                        } // END OF IF ELSE BACKGROUND
                    }, 1200)
                } else if (randomNum === 3) {
//                    console.log('RANDOM NUMBER @: ', randomNum)
                    setTimeout(function () {
                        AppCtrl.rolling();
                        if (document.body.style.background === 'url("img/back-2.png")') {
//                            console.log("YES ERROR BG")
                            //                            return
                        } else {
//                            console.log("NO ERROR BG")
                            setTimeout(function () {
                                AppCtrl.rolling();
                                if (document.body.style.background === 'url("img/back-2.png")') {
//                                    console.log("YES ERROR BG")
                                    //                                    return
                                } else {
//                                    console.log("NO ERROR BG")
                                    setTimeout(function () {
                                        AppCtrl.rolling();
                                        if (document.body.style.background === 'url("img/back-2.png")') {
//                                            console.log("YES ERROR BG")
                                            //                                            return
                                        } else {
//                                            console.log("NO ERROR BG")
                                            setTimeout(function () {
                                                AppCtrl.holding();
                                            }, 3600); // END OF 2ND TIMEOUT
                                        } // END OF IF ELSE BACKGROUND
                                    }, 2800); // END OF 2ND TIMEOUT
                                } // END OF IF ELSE BACKGROUND
                            }, 2000); // END OF 2ND TIMEOUT
                        } // END OF IF ELSE BACKGROUND
                    }, 1200)
                } else {
//                    console.log('RANDOM NUMBER @: ', randomNum)
                    setTimeout(function () {
                        AppCtrl.rolling();
                        if (document.body.style.background === 'url("img/back-2.png")') {
//                            console.log("YES ERROR BG")
                            //                            return
                        } else {
//                            console.log("NO ERROR BG")
                            setTimeout(function () {
                                AppCtrl.rolling();
                                if (document.body.style.background === 'url("img/back-2.png")') {
//                                    console.log("YES ERROR BG")
                                    //                                    return
                                } else {
//                                    console.log("NO ERROR BG")
                                    setTimeout(function () {
                                        AppCtrl.rolling();
                                        if (document.body.style.background === 'url("img/back-2.png")') {
//                                            console.log("YES ERROR BG")
                                            //                                            return
                                        } else {
//                                            console.log("NO ERROR BG")
                                            setTimeout(function () {
                                                AppCtrl.rolling();
                                                if (document.body.style.background === 'url("img/back-2.png")') {
//                                                    console.log("YES ERROR BG")
                                                    //                                                    return
                                                } else {
//                                                    console.log("NO ERROR BG")
                                                    setTimeout(function () {
                                                        AppCtrl.holding();
                                                    }, 4200); // END OF 2ND TIMEOUT
                                                } // END OF IF ELSE BACKGROUND
                                            }, 3600); // END OF 2ND TIMEOUT
                                        } // END OF IF ELSE BACKGROUND
                                    }, 2800); // END OF 2ND TIMEOUT
                                } // END OF IF ELSE BACKGROUND
                            }, 2000); // END OF 2ND TIMEOUT
                        } // END OF IF ELSE BACKGROUND
                    }, 1200)
                } // END OF IF ELSE (randomNum)
            }, 1800) // GLOBAL IF ELSE DELAY(B4 COMP STARTS PAYING)

        } // END OF computerPlaying
    } // END OF ComputerCtrl() return
})(); // END OF ComputerCtrl()



let StateCtrl = (function () {

    // Return Public Methods
    return {
        start: function (getUISelectors) {

            // Randomise Player To Start
            let randomNumber = Math.floor(Math.random() * 2);
//            console.log('RandomNumber To Determine Which User Starts ...', randomNumber)
            randomNumber = 1 // always Start With Human ((((((((((((((((((((((()))))))))))))))))))))))
            let randomPlayer;
            if (randomNumber === 0) {
                randomPlayer = getUISelectors.player0;
                // Reset ClassName
                getUISelectors.player0Panel.className = 'player-0-panel';
                getUISelectors.player1Panel.className = 'player-1-panel';
                // Set ClassName
                getUISelectors.player0Panel.className = 'player-0-panel active';
            } else {
                randomPlayer = getUISelectors.player1;
                // Reset ClassName
                getUISelectors.player0Panel.className = 'player-0-panel';
                getUISelectors.player1Panel.className = 'player-1-panel';
                // Set ClassName
                getUISelectors.player1Panel.className = 'player-1-panel active';
            }
        }, // END OF Start()
        currentScoreField: [],

        randomizeDice: function () {
            // Get Selectors
            let UISelectors = UICtrl.getUISelectors();

            //            let currentSCORES = StateCtrl.currentScoreField;

            // Randomise Dice
            let randomDiceNumber = Math.floor(Math.random() * 6) + 1;

            let randomDice;

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
        } // END  OF randomizeDice
    }; // END OF return
})(); // END OF StateCtrl


let UICtrl = (function () {

    let UISelectors = {
        newGameBTN: document.querySelector('.btn-new'),
        endScore: document.getElementById('end-score'),
        rollDiceBTN: document.querySelector('.btn-roll'),
        holdBTN: document.querySelector('.btn-hold'),
        player0: document.querySelector('#name-0'),
        player1: document.querySelector('#name-1'),
        player0Panel: document.querySelector('.player-0-panel'),
        player1Panel: document.querySelector('.player-1-panel'),
        currentScore0: document.querySelector('#current-0'),
        currentScore1: document.querySelector('#current-1'),
        globalScore0: document.querySelector('#score-0'),
        globalScore1: document.querySelector('#score-1'),
        displayDice: document.querySelector('.dice'),
        dice1: 'img/dice-1.png',
        dice2: 'img/dice-2.png',
        dice3: 'img/dice-3.png',
        dice4: 'img/dice-4.png',
        dice5: 'img/dice-5.png',
        dice6: 'img/dice-6.png',
        dice2n2: 'img/dice-2-n2.png',
        dice3n2: 'img/dice-3-n2.png',
        dice4n2: 'img/dice-4-n2.png',
        dice5n2: 'img/dice-5-n2.png',
        dice6n2: 'img/dice-6-n2.png',
        modalTitle: document.querySelector('.modal-title'),
        modalBody: document.querySelector('.modal-body'),
        modalBodySpan: document.querySelector('#modal-body-span'),
        playerID: document.querySelector('#playerID'),
        //        modalBodyId: document.querySelector('#modal-body-id'),
        modalFooter: document.getElementById('modal-footer'),

        newName: JSON.parse(localStorage.getItem('Piggy Game Player Name'))
    };

    // Return Public Methods
    return {
        getUISelectors: function () {
            return UISelectors;
        },
    }; // END OF RETURN
})(); // END OF UICtrl


let AppCtrl = (function (computerCtrl, stateCtrl, uiCtrl) {
    const UISelectors = uiCtrl.getUISelectors();

    // Event Listener
    let allEvent = function () {
        // Listen To Stop Game Event On Winning
        let element0 = UISelectors.globalScore0;
        let element1 = UISelectors.globalScore1;

        element0.addEventListener('DOMSubtreeModified', winGame0);
        element1.addEventListener('DOMSubtreeModified', winGame1);

        // Listen For New Game
        UISelectors.newGameBTN.addEventListener('click', newGame);

        // Listen For Roll Dice Event
        UISelectors.rollDiceBTN.addEventListener('click', rollDice);

        // Listen For Hold BTN Event
        UISelectors.holdBTN.addEventListener('click', holdPlay);

    } // END OF allEvents()

    // Stop Game0
    const winGame0 = function () {
        // Get Winnig Number
        let inputValue = setInputValue();
        // End Game
        let globalScore0 = Number(UISelectors.globalScore0.textContent);

        // Disable Input Field Once Game Starts
        if (globalScore0 > 0) {
            // Disable Input Field
            UISelectors.endScore.disabled = true;
        }


        if (globalScore0 >= inputValue) {
            // Alert Game Over & Hide Roll & Hold BTN
            document.querySelector('.modal-body').classList.remove('bg-warning');
            document.querySelector('.modal-body').classList.add('bg-primary');
            document.querySelector('#modal-body-span').style.color = 'white';
            UISelectors.modalTitle.textContent = 'GAME OVER';
            document.querySelector('#playerID').textContent = 'You Lost!!! Computer Wins The Game With ';
            document.querySelector('#modal-body-span').innerHTML = `${globalScore0} Points`;
            UISelectors.modalFooter.textContent = 'Close';
            // Click Modal Btn
            let clickClose = document.querySelector('.btnClose');
            clickClose.click();

            UISelectors.player0.textContent = 'WINNER!';
            UISelectors.player0.classList.add('winner');
            UISelectors.rollDiceBTN.style.display = 'none';
            UISelectors.holdBTN.style.display = 'none';

            // Prevent Comp From Playing Again **********************************************************
            UISelectors.player0Panel.classList.remove('active');
            UISelectors.player1Panel.classList.remove('active');

            // Play Sound
            let audio = new Audio('audio/Game%20over%20lost.mp3');
            setTimeout(function () {
                audio.play()
                    .then(function (aud) {
//                        console.log(aud)
                    })
                    .catch(function (error) {
//                        console.error(error)
                    })
            }, 10);

            setTimeout(function () {
                audio.pause();
            }, 6760);

            // Save Win
            let comuterWin = Number(localStorage.getItem('Computer Win'));
            let comuterWinPoints = 0;

            if(comuterWin === 0){
                localStorage.setItem('Computer Win', '1')
            }else {
                comuterWinPoints = Number(comuterWin) + 1;
                localStorage.setItem('Computer Win', comuterWinPoints);

                // Retrive and Display Win Ratio
                let comuterWon = Number(localStorage.getItem('Computer Win'));
                let humanWon = Number(localStorage.getItem('Human Win'));

                if(comuterWon === 0 && humanWon === 0){
                    return
                }else{
                    let compWonPercent = (comuterWon / (comuterWon + humanWon) * 100).toFixed()
                    let humanWonPercent = (humanWon / (comuterWon + humanWon) * 100).toFixed()

                    console.log('compWinPercent ', compWonPercent, '\n', 'humanWinPercent ', humanWonPercent);
                    document.getElementById('win-ratio').textContent = `Win Ratio`;
                    document.getElementById('computer-ratio').textContent = `${compWonPercent}% `;
                    document.getElementById('human-ratio').textContent = ` ${humanWonPercent}%`;
                }

//                // Display Ratio To UI
//                displayRatio()
            }
        }
    } // END OF winGame0

    // Stop Game1
    const winGame1 = function () {
        // Get Winnig Number
        let inputValue = setInputValue();
        // End Game
        let globalScore1 = Number(UISelectors.globalScore1.textContent);

        // Disable Input Field Once Game Starts
        if (globalScore1 > 0) {
            // Disable Input Field
            UISelectors.endScore.disabled = true;
        }

        if (globalScore1 >= inputValue) {
            const myName = UISelectors.newName;
            // Alert Game Over & Hide Roll & Hold BTN
            document.querySelector('.modal-body').classList.remove('bg-warning');
            document.querySelector('.modal-body').classList.add('bg-primary');
            document.querySelector('#modal-body-span').style.color = 'white';
            UISelectors.modalTitle.textContent = 'GAME OVER';
            document.querySelector('#playerID').textContent = `HURRAY!!! ${myName} Won The Game With `;
            document.querySelector('#modal-body-span').innerHTML = `${globalScore1} Points`;
            UISelectors.modalFooter.textContent = 'Close';
            // Click Modal Btn
            let clickClose = document.querySelector('.btnClose');
            clickClose.click();

            UISelectors.player1.textContent = 'WINNER!';
            UISelectors.player1.classList.add('winner');
            UISelectors.rollDiceBTN.style.display = 'none';
            UISelectors.holdBTN.style.display = 'none';

            // Prevent Comp From Playing Again **********************************************************
            UISelectors.player0Panel.classList.remove('active');
            UISelectors.player1Panel.classList.remove('active');


                // Play Sound
                let audio = new Audio('audio/Win2.mp3');
            setTimeout(function () {
                audio.play()
                    .then(function (aud) {
//                        console.log(aud)
                    })
                    .catch(function (error) {
//                        console.error(error)
                    })
            }, 10);

            setTimeout(function () {
                audio.pause();
            }, 6760);

            // Save Win
            let comuterWin = Number(localStorage.getItem('Human Win'));
            let comuterWinPoints = 0;

            if(comuterWin === 0){
                localStorage.setItem('Human Win', '1')
            }else {
                comuterWinPoints = Number(comuterWin) + 1;
                localStorage.setItem('Human Win', comuterWinPoints);

                // Retrive and Display Win Ratio
                let comuterWon = Number(localStorage.getItem('Computer Win'));
                let humanWon = Number(localStorage.getItem('Human Win'));

                if(comuterWon === 0 && humanWon === 0){
                    return
                }else{
                    let compWonPercent = (comuterWon / (comuterWon + humanWon) * 100).toFixed()
                    let humanWonPercent = (humanWon / (comuterWon + humanWon) * 100).toFixed()

//                    console.log('compWinPercent ', compWonPercent, '\n', 'humanWinPercent ', humanWonPercent);
                    document.getElementById('win-ratio').textContent = `Win Ratio`;
                    document.getElementById('computer-ratio').textContent = `${compWonPercent}% `;
                    document.getElementById('human-ratio').textContent = ` ${humanWonPercent}%`;
                }

//                // Display Ratio To UI
//                displayRatio()
            }
        }
    } // END OF winGame1

    const newGame = function () {
        let selectPlayer0 = UISelectors.player0;
        let selectPlayer1 = UISelectors.player1;
        let selectDisplayDice = UISelectors.displayDice;
        let selectRollDiceBTN = UISelectors.rollDiceBTN;
        let selectHoldBTN = UISelectors.holdBTN;
        let selectGlobalScore0 = UISelectors.globalScore0;
        let selectGlobalScore1 = UISelectors.globalScore1;
        let selectCurrentScore0 = UISelectors.currentScore0;
        let selectCurrentScore1 = UISelectors.currentScore1;

        // Enable Input Field
        UISelectors.endScore.disabled = false;
        UISelectors.endScore.value = '';

        function resetUI() {
            selectDisplayDice.setAttribute('src', UISelectors.dice6);
            selectRollDiceBTN.style.display = 'inline-block';
            selectHoldBTN.style.display = 'inline-block';
            selectPlayer0.textContent = 'Computer';
            selectPlayer1.textContent = UISelectors.newName;
            selectPlayer0.classList.remove('winner');
            selectPlayer1.classList.remove('winner');



            stateCtrl.start(UISelectors);
            stateCtrl.currentScoreField = [];
            selectGlobalScore0.textContent = 0;
            selectGlobalScore1.textContent = 0;
            selectCurrentScore0.textContent = 0;
            selectCurrentScore1.textContent = 0;

//            // Display Ratio To UI
//            displayRatio()
        } //END OF resetUI()

        if (selectRollDiceBTN.style.display === 'none') {
            // Game Is Alredy Over So No Need To Confirm
            // Just End The Game
            resetUI();
        } else if (selectGlobalScore0.textContent == '0' && selectGlobalScore1.textContent == '0') {
            resetUI();
        } else {
            // Confirm Player Wants To End Game
            let endGame = confirm('Do You Want To End Game!!! \n You Would Lose Your Point');

            if (endGame === true) {

                resetUI();
            } else {
                // Disable Input Field
                let globalScore0 = Number(UISelectors.globalScore0.textContent);
                let globalScore1 = Number(UISelectors.globalScore1.textContent);

                UISelectors.endScore.disabled = true;
            }
        }
    } // END OF  newGame()

    const wrongAnsCall = function (diceNum) {
        // Change Displayed Dice & Total
        UISelectors.displayDice.setAttribute('src', diceNum);

        // Play Fault Audio
        let audio = new Audio('audio/Wrong-answer-sound-effect.mp3');
        setTimeout(function(){
            audio.play()
                .then(function (aud) {
//                console.log(aud)
            })
                .catch(function (error) {
//                console.error(error)
            })
        }, 10)

        // Change Background Image
        document.body.style.background = "url('img/back-2.png')";

        // Hide Roll & Hold BTN
        UISelectors.rollDiceBTN.style.display = 'none';
        UISelectors.holdBTN.style.display = 'none';

        // Reset BG & Dice After 1.25Sec
        setTimeout(function () {
            // Pause Audio
            audio.pause();

            // Hide Roll & Hold BTN
            UISelectors.rollDiceBTN.style.display = 'block';
            UISelectors.holdBTN.style.display = 'block';

            // Reset Background Image
            document.body.style.background = "linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(img/back.jpg)";
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundSize = 'cover';

            // Change Displayed Dice & Total
            UISelectors.displayDice.setAttribute('src', UISelectors.dice6);

            // Reset currentScoreField To 0
            let currentScoreFieldArr = stateCtrl.currentScoreField;
            let currentScoreFieldArrLength = currentScoreFieldArr.length;
            currentScoreFieldArr.splice(0, currentScoreFieldArrLength);

            // Play Active Player
            if (UISelectors.player0Panel.classList.contains('active')) {
                UISelectors.currentScore0.textContent = 0;
                UISelectors.player0Panel.classList.remove('active');
                UISelectors.player1Panel.classList.add('active');
            } else {
                UISelectors.currentScore1.textContent = 0;
                UISelectors.player1Panel.classList.remove('active');
                UISelectors.player0Panel.classList.add('active');
            }
        }, 1260)
    } // END OF wrongAnsCall()

    // Roll Dice
    const rollDice = function () {

        let inputValue = Number(UISelectors.endScore.value);
        let endScoreInit = Number(setInputValue());

        // Disalllow End Game Value LLess Than 50
        if (inputValue === 0 || inputValue >= 50) {

            // Get Dice Number & PNG
            let randomizeDiceResults = stateCtrl.randomizeDice();

            // Push Dice Number To stateCtrl.currentScoreField
            let currentScoreFieldArr = stateCtrl.currentScoreField;
            let currentScoresTotal = 0;

            // Reset Current Score If Spin === 0
            if (randomizeDiceResults.randomDiceNumber === 0) {
                let diceNum = randomizeDiceResults.randomDice
                wrongAnsCall(diceNum)
            } else {
                currentScoreFieldArr.push(randomizeDiceResults.randomDiceNumber);
//                console.log('currentScoreFieldArr', currentScoreFieldArr);

                // Clear Current Sccore If A Number Is Rolled Twice In Succession
                let secondToLastArray = currentScoreFieldArr[currentScoreFieldArr.length - 2];
                let lastArray = currentScoreFieldArr[currentScoreFieldArr.length - 1];

                if (secondToLastArray === 2 && lastArray === 2) {
                    diceNum = UISelectors.dice2n2;
                    wrongAnsCall(diceNum);
                    return
                } else if (secondToLastArray === 3 && lastArray === 3) {
                    diceNum = UISelectors.dice3n2;
                    wrongAnsCall(diceNum);
                    return
                } else if (secondToLastArray === 4 && lastArray === 4) {
                    diceNum = UISelectors.dice4n2;
                    wrongAnsCall(diceNum);
                    return
                } else if (secondToLastArray === 5 && lastArray === 5) {
                    diceNum = UISelectors.dice5n2;
                    wrongAnsCall(diceNum);
                    return
                } else if (secondToLastArray === 6 && lastArray === 6) {
                    diceNum = UISelectors.dice6n2;
                    wrongAnsCall(diceNum);
                    return
                } else {
                    // Display Current Score Total
                    currentScoreFieldArr.forEach(function (score) {
                        currentScoresTotal += score;
                    });
//                    console.log('currentScoresTotal', currentScoresTotal);

                    // Change Displayed Dice & Total
                    UISelectors.displayDice.setAttribute('src', randomizeDiceResults.randomDice);

                    // Play Active Player
                    if (UISelectors.player0Panel.classList.contains('active')) {
                        UISelectors.currentScore0.textContent = currentScoresTotal;

                        // Play Sound
                        let audio = new Audio('audio/Facebook%20Chat%20Pop.mp3');
                        setTimeout(function(){
                            audio.play()
                                .then(function (aud) {
//                                console.log(aud)
                            })
                                .catch(function (error) {
//                                console.error(error)
                            })
                        }, 10)

                        setTimeout(function () {
                            audio.pause();
                        }, 360)
                    } else {
                        UISelectors.currentScore1.textContent = currentScoresTotal;

                        // Play Sound
                        let audio = new Audio('audio/Facebook%20Chat%20Pop.mp3');
                        setTimeout(function(){
                            audio.play()
                                .then(function (aud) {
//                                console.log(aud)
                            })
                                .catch(function (error) {
//                                console.error(error)
                            })
                        }, 10)

                        setTimeout(function () {
                            audio.pause();
                        }, 360)
                    }
                }
            }
        } else {
            alert('You Can Only Set End Game Score Above 50');
            return;
        }
    } // END OF ROLL DICE

    // Hold Play
    const holdPlay = function () {
        let selectCurrentScore0 = UISelectors.currentScore0;
        let selectCurrentScore1 = UISelectors.currentScore1;

        if (selectCurrentScore0.textContent != 0 || selectCurrentScore1.textContent != 0) {
            let currentScoreFieldArr = stateCtrl.currentScoreField;
            let currentScoresTotal = 0;

            currentScoreFieldArr.forEach(function (score) {
                currentScoresTotal += score;
            });
            //                console.log('CurrentScoresTotal 2', currentScoresTotal);

            // Declear Global Scores Variables
            let globalScore = 0;
            let globalScoreTotal = 0;

            // Get End Game Number
            let inputValue = setInputValue();

            // Play Active Player
            if (UISelectors.player0Panel.classList.contains('active')) {

                // Get Score From Global Score
                globalScore = Number(UISelectors.globalScore0.textContent);
                //                    console.log(globalScore)
                // Add Current Score To Global Score
                globalScoreTotal = Number(globalScore) + Number(currentScoresTotal);
                // Display New Global Score & Clear Current Score
                UISelectors.globalScore0.textContent = globalScoreTotal;
                selectCurrentScore0.textContent = 0;

                //                    console.log(typeof UISelectors.globalScore0.innerHTML)

                // Reset currentScoreField To 0
                let currentScoreFieldArrLength = currentScoreFieldArr.length;
                currentScoreFieldArr.splice(0, currentScoreFieldArrLength);

                // Monitor For Game Over
                if (globalScoreTotal >= inputValue) {
                    // Prevent Human/Comp From Playing After Game Ends (Game  Over)
                    UISelectors.player0Panel.classList.remove('active');
                    UISelectors.player1Panel.classList.remove('active');

//                    console.log('globalScoreTotal0...', globalScoreTotal)
//                    console.log('inputValue...', inputValue)
                } else {
                    //                        // Continue Game
                    UISelectors.player0Panel.classList.remove('active');
                    UISelectors.player1Panel.classList.add('active');

//                    console.log('globalScoreTotal0...', globalScoreTotal)
//                    console.log('inputValue...', inputValue)
                }

                // Play Sound
                let audio = new Audio('audio/Facebook%20Message.mp3');
                setTimeout(function(){
                    audio.play()
                        .then(function (aud) {
//                        console.log(aud)
                    })
                        .catch(function (error) {
//                        console.error(error)
                    })
                }, 10)

                setTimeout(function () {
                    audio.pause();
                }, 360);


            } else {
                // Get Score From Global Score
                globalScore = Number(UISelectors.globalScore1.textContent);
                //                    console.log(globalScore)
                // Add Current Score To Global Score
                globalScoreTotal = Number(globalScore) + Number(currentScoresTotal);
                // Add Current Score To Global Score
                UISelectors.globalScore1.textContent = globalScoreTotal;
                selectCurrentScore1.textContent = 0;

                //                    console.log(typeof UISelectors.globalScore1.innerHTML)

                // Reset currentScoreField To 0
                let currentScoreFieldArrLength = currentScoreFieldArr.length;
                currentScoreFieldArr.splice(0, currentScoreFieldArrLength);

                // Monitor For Game Over
                if (globalScoreTotal >= inputValue) {
                    // Prevent Human/Comp From Playing After Game Ends (Game  Over)
                    UISelectors.player0Panel.classList.remove('active');
                    UISelectors.player1Panel.classList.remove('active');

//                    console.log('globalScoreTotal1...', globalScoreTotal)
//                    console.log('inputValue...', inputValue)
                } else {
                    // Continue Game
                    UISelectors.player1Panel.classList.remove('active');
                    UISelectors.player0Panel.classList.add('active');

//                    console.log('globalScoreTotal1...', globalScoreTotal)
//                    console.log('inputValue...', inputValue)
                }

                // Play Sound
                let audio = new Audio('audio/Facebook%20Message.mp3');
                setTimeout(function(){
                    audio.play()
                        .then(function (aud) {
//                        console.log(aud)
                    })
                        .catch(function (error) {
//                        console.error(error)
                    })
                }, 10)

                setTimeout(function () {
                    audio.pause();
                }, 360);
            }
        } else {
            // Return Alert
            let title = 'You Are Not Allowed To Skip Your Turn';
            let body = 'RETURN TO PLAY GAME :)';
            let clickClose = document.querySelector('.btnClose');

            document.querySelector('.modal-body').classList.remove('bg-primary');
            document.querySelector('.modal-body').classList.add('bg-warning');
            document.querySelector('#modal-body-span').style.color = 'black';
            UISelectors.modalTitle.textContent = title;
            document.querySelector('#playerID').textContent = '';
            document.querySelector('#modal-body-span').textContent = body;
            UISelectors.modalFooter.textContent = 'Return';

            clickClose.click();

            let audio = new Audio('audio/Game%20Over3.mp3');
            setTimeout(function(){
                audio.play()
                    .then(function (aud) {
//                    console.log(aud)
                })
                    .catch(function (error) {
//                    console.error(error)
                })
            }, 10)

            setTimeout(function () {
                audio.pause();
            }, 1810);
        }
    } // END OF holdPlay


    // Set End Game Value & Save To Storage
    let endScoreInitial = 50;
    let endScoreInit = endScoreInitial;
    let endScoreInitialValue = Number(localStorage.getItem('End Score')); // what is Already In Storage


    if (endScoreInitialValue === 0) {
        endScoreInit = endScoreInitial;
    } else if (endScoreInitialValue > endScoreInit) {
        endScoreInit = endScoreInitialValue
    } else { // Greater Than 0 But Less than enndScoreInit
        endScoreInit = endScoreInitial
    }

    // Save Confirmed End Score To Storage
    localStorage.setItem('End Score', JSON.stringify(endScoreInit));


    // onblur Function
    const endScoreBlur = function () {
        let endScoreInitValue = Number(localStorage.getItem('End Score')); // what is Already In Storage
        let endScoreBlurValue = Number(UISelectors.endScore.value); // New Value On Blur
        let newEndScoreBlurValue = 0;

        if (endScoreBlurValue > endScoreInitValue) {
            localStorage.setItem('End Score', JSON.stringify(endScoreBlurValue))
            newEndScoreBlurValue = endScoreBlurValue;

//            console.log('Storage is Greater Than Init NEW', newEndScoreBlurValue)

            return {
                newEndScoreBlurValue
            }
        } else if (endScoreBlurValue < endScoreInitValue && endScoreBlurValue >= endScoreInitial) {
            localStorage.setItem('End Score', JSON.stringify(endScoreBlurValue))
            newEndScoreBlurValue = endScoreBlurValue;

//            console.log('Less Than Storage But Greater Than Init NEW', newEndScoreBlurValue)

            return {
                newEndScoreBlurValue
            }
        } else { // Blur Vaue Is  Less Than 50
            localStorage.setItem('End Score', JSON.stringify(endScoreInitValue))
            newEndScoreBlurValue = endScoreInitValue;

//            console.log('OTHERS NEW', newEndScoreBlurValue)

            return {
                newEndScoreBlurValue
            }
        }
    } // END OF endScoreBlur EVENT


    // End Score Input Event
    // Capture New End Score Input Value & Compare With End Score Befor Saving
    UISelectors.endScore.addEventListener('blur', endScoreBlur)



    // set Winning Number For Input Value
    const setInputValue = function () {
        endScoreInit = endScoreBlur().newEndScoreBlurValue

        return endScoreInit
    } // END OF setInputValue()


    // Return Public Methods
    return {
        init: function () {
            // Get Selectors
            let getUISelectors = uiCtrl.getUISelectors();

            // let Computer Start Monitoring
            computerCtrl.monitor(getUISelectors)

            // Determine First Player To Start
            stateCtrl.start(getUISelectors);

            // Call Events
            allEvent();
        },

        rolling: function () {
            rollDice()
        },

        holding: function () {
            holdPlay()
        },

        returnEndScoreInit: function () {
            return endScoreInitial
        }
    }
})(ComputerCtrl, StateCtrl, UICtrl); // END OF StateCtrl


//// Call AppCtrl.init
//AppCtrl.init();
