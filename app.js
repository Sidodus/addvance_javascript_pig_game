let textNode = document.querySelector('.add');

let statusText = document.querySelector('#status-text')

let autoPlay = document.querySelector('.auto-play');

let manualPlay = document.querySelector('.manual-play');


// DOM Load Event
document.addEventListener('DOMContentLoaded', function () {

//    console.log('INITIAL END SCORE', AppCtrl2.returnEndScoreInit())
//    console.log('STORAGE END SCORE', localStorage.getItem('End Score'))

    // Display New End Score If Any On DOM Start
    if(Number(localStorage.getItem('End Score')) > AppCtrl2.returnEndScoreInit()){
        document.querySelector('#new-end-score').innerText = `= ${Number(localStorage.getItem('End Score'))}`;
    }else{
        document.querySelector('#new-end-score').innerText = '';
    }

    // Load Active Game Mode
    if (localStorage.getItem('Auto Play') === null) {

        // Change Btn Color
        manualPlay.classList.remove('bg-primary');
        manualPlay.classList.add('bg-secondary');

        console.log('Auto Play is NULL');

        // Play Game manually
        // Set Status Text
        statusText.innerHTML = 'Computer Auto-Play <em><span style="font-weight: 900"> Disbled </span></em>';

        // Call AppCtrl.init()
        AppCtrl2.init();

    } else if (localStorage.getItem('Auto Play') === 'Computer Auto-Play Active') {

        // Change Btn Color
        autoPlay.classList.remove('bg-primary');
        autoPlay.classList.add('bg-secondary');

        // Play With Computer
        // Set Status Text
        statusText.innerHTML = 'Computer Auto-Play <em><span style="font-weight: 900"> Active </span></em>';

        // Notice Of Code Bug Fix
        document.querySelector('.modal-body').classList.add('bg-primary');
        document.querySelector('#modal-body-span').style.color = 'white';
        document.querySelector('.modal-title').textContent = 'Auto-Play Code Needs Fix';
        document.querySelector('#playerID').textContent = 'Computer Has a Tendency Continue Play Even When It\'s Not Computer\'s Turn. ';
        document.querySelector('#modal-body-span').innerHTML = `<br> <br> <span class="text-danger bg-dark p-1"> Probable Reason!!!</span> <br> The MutationObserver Callback Function with Promise, Tends To Conflict Within The  Code <br> :)`;
        document.getElementById('modal-footer').innerHTML = 'Close <i class="fa fa-smile-o text-dark"></i>';
        // Click Modal Btn
        let clickClose = document.querySelector('.btnClose');
        clickClose.click();

        setTimeout(function () {
            // Let Computer Auto Play
            AppCtrl.init()
        }, 2000)

    } else {

        // Change Btn Color
        manualPlay.classList.remove('bg-primary');
        manualPlay.classList.add('bg-secondary');

        // Set Status Text
        statusText.innerHTML = 'Computer Auto-Play <em><span style="font-weight: 900"> Disbled </span></em>';

        // Play Game manually
        AppCtrl2.init()
    }

    // Display Win Ratio
    let comuterWin = Number(localStorage.getItem('Computer Win'));
    let humanWin = Number(localStorage.getItem('Human Win'));

    if(comuterWin === 0 && humanWin === 0){
        return
    }else{
        let compWinPercent = (comuterWin / (comuterWin + humanWin) * 100).toFixed()
        let humanWinPercent = (humanWin / (comuterWin + humanWin) * 100).toFixed()

        console.log('compWinPercent ', compWinPercent, '\n', 'humanWinPercent ', humanWinPercent);
        document.getElementById('win-ratio').textContent = `Win Ratio`;
        document.getElementById('computer-ratio').textContent = `${compWinPercent}% `;
        document.getElementById('human-ratio').textContent = ` ${humanWinPercent}%`;
    }
}); // END OF DOMContentLoaded

//// Display Ration To UI
//const displayRatio0 = function(){
//    // Display Win Ratio
//    let comuterWin0 = Number(localStorage.getItem('Computer Win'));
//    let humanWin0 = Number(localStorage.getItem('Human Win'));
//
//    if(comuterWin0 === 0 && humanWin0 === 0){
//        return
//    }else{
//        let compWinPercent0 = comuterWin0 / (comuterWin0 + humanWin0) * 100;
//        let humanWinPercent0 = humanWin0 / (comuterWin0 + humanWin0) * 100;
//
//        console.log('compWinPercent ', compWinPercent0, '\n', 'humanWinPercent ', humanWinPercent0);
//        document.getElementById('win-ratio').display = 'none';
//        document.getElementById('computer-ratio').display = 'none';
//        document.getElementById('human-ratio').display = 'none';
//
//        document.getElementById('win-ratio1').textContent = 'Win Ratio';
//        document.getElementById('computer-ratio1').textContent = `${compWinPercent0}% `;
//        document.getElementById('human-ratio1').textContent = ` ${humanWinPercent0}%`;
//    }
//} // END OF displayRatio
//
//
//document.querySelector('#computer-ratio').addEventListener('DOMSubtreeModified', function(){
//    console.log('Computer Ratio Changed');
//    displayRatio0();
//
//})
//
//document.querySelector('#human-ratio').addEventListener('DOMSubtreeModified', function(){
//    console.log('Human Ratio Changed');
//    displayRatio0();
//})

// Display New End Score If Any On Input Blur
document.querySelector('#end-score').addEventListener('blur', function(){
    // Display New End Score If Any
    if(Number(localStorage.getItem('End Score')) > AppCtrl2.returnEndScoreInit()){
        document.querySelector('#new-end-score').innerText = `= ${Number(localStorage.getItem('End Score'))}`;
    }else{
        document.querySelector('#new-end-score').innerText = '';
    }
});


// Auto Play Btn Event
autoPlay.addEventListener('click', function () {

    console.log('Click 1')
    let autoPlay = localStorage.getItem('Auto Play');

    // textNode;
    statusText.innerHTML = 'Computer Auto-Play <em><span style="font-weight: 900"> Active </span></em>';

    // Check If Already Active
    if (autoPlay === 'Computer Auto-Play Active') {

        return;
    } else {

        // Caution The Player Of A Pending Reload
        let globalScore0 = Number(document.querySelector('#score-0').textContent);
        let globalScore1 = Number(document.querySelector('#score-1').textContent);

        // Check If Game Already Started
        if(globalScore0 > 0 || globalScore1 > 0) {

            let endGame = confirm('NOTE: \n \n All Current Game Data Would Be Lost While Moving To Manual Play \n \n Move On ?');

            // Confirm Exit
            if (endGame === true) {

                // Save Status To Storage
                localStorage.setItem('Auto Play', 'Computer Auto-Play Active');

                console.log('Auto Play Activated')
                // Reload Page
                window.location.reload();
            } else {

                // textNode;
                statusText.innerHTML = 'Computer Auto-Play <em><span style="font-weight: 900"> Disbled </span></em>';
            }
        }else{

            // Save Status To Storage
            localStorage.setItem('Auto Play', 'Computer Auto-Play Active');

            console.log('Auto Play Activated');

            // Reload Page
            window.location.reload();
        }
    }

});


// Manual Play Btn Event
manualPlay.addEventListener('click', function () {

    let manualPlay = localStorage.getItem('Auto Play');

    //    textNode];
    statusText.innerHTML = 'Computer Auto-Play <em><span style="font-weight: 900"> Disbled </span></em>';

    // Check If Already Active
    if (manualPlay === 'Computer Auto-Play Disbled') {
        return;

    } else {

        // Caution The Player Of A Pending Reload
        let globalScore0 = Number(document.querySelector('#score-0').textContent);
        let globalScore1 = Number(document.querySelector('#score-1').textContent);

        // Check If Game Already Started
        if(globalScore0 > 0 || globalScore1 > 0) {

            let endGame = confirm('NOTE: \n \n All Current Game Data Would Be Lost While Moving To Play With \n Computer \n \n Move On ?');

            // Confirm Exit
            if (endGame === true) {

                // Save Status To Storage
                localStorage.setItem('Auto Play', 'Computer Auto-Play Disbled');

                console.log('Auto Play DeActivated')
                // Reload Page
                window.location.reload();
            } else {
                // textNode;
                statusText.innerHTML = 'Computer Auto-Play <em><span style="font-weight: 900"> Active </span></em>';
            }
        }else{

            // Save Status To Storage
            localStorage.setItem('Auto Play', 'Computer Auto-Play Disbled');

            console.log('Auto Play DeActivated')
            // Reload Page
            window.location.reload();
        }



    }

});
