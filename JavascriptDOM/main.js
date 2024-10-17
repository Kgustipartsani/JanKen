function getCompChoice() {
    const comp = Math.random();

    if( comp < 0.30 ) return  'rock';
    if( comp >= 0.30 && comp < 0.60 ) return  'paper';
    return  'scissors';
}

function getScore(comp, player) {
    if( player == comp ) return 'TIE!';
    if( player == 'rock' ) return ( comp == 'paper') ? 'LOSE!' : 'WIN!';
    if( player == 'paper' ) return ( comp == 'scissors') ? 'LOSE!' : 'WIN!';
    if( player == 'scissors' ) return (  comp == 'rock') ? 'LOSE!' : 'WIN!';
    }

    function load() {
        const imgComp = document.getElementById('imgcom');
        const image = ['rock','paper','scissors'];
        let i = 0;
        const playLoad = new Date().getTime();
        setInterval(function(){
            if( new Date().getTime() - playLoad > 1000 ) {
                clearInterval;
                return;
            }
            imgComp.setAttribute('src','img/' + image[i++]  + '.png');
            if(  i == image.length ) i = 0;
        },100);
    }


// const choice = document.querySelectorAll('li img');
// choice.forEach(function(gmbr) {
//     gmbr.addEventListener('click', function() {
//     const computer = getCompChoice();
//     const  player = gmbr.id;
//     const hasil = getScore(computer,player);

//     load();

//     setTimeout( function() {
//         const imgCom = document.getElementById('imgcom');
//         imgCom.setAttribute('src','img/' +  computer + '.png');
    
//         const info = document.getElementById('score');
//         info.innerHTML = hasil;
//     }, 1000);
//     })
// });


// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP

let playerScore = 0;
let computerScore = 0;

const game = document.querySelectorAll('li img');
game.forEach(function(choices) { 
    choices.addEventListener('click', function(){

        const result = document.getElementById('score');
        result.innerHTML = '' ;
        result.classList.add('text-black', 'text-2xl', 'font-bold');


    const enemy = getCompChoice();
    const us = choices.id;
    const score = getScore(enemy, us) ;

        load();

    setTimeout(function(){
        const imgComputer = document.getElementById('imgcom');
        imgComputer.setAttribute('src', 'img/' + enemy + '.png' );
        
        setTimeout(function() {
            result.innerHTML = score;
             // Memperbarui skor dan menampilkan
             if (score === 'WIN!') {
                playerScore++;
            } else if (score === 'LOSE!') {
                computerScore++;
            }

            document.getElementById('player-score').innerText = playerScore;
            document.getElementById('computer-score').innerText = computerScore;

            // Cek jika pemain menang 3 kali
            if (playerScore === 3) {
                alert('Congratulations, You Defeat the Computer!');
                resetScores();
            } else if (computerScore === 3) {
                alert('LOSERRRR!');
                resetScores();
            }
        }, 300);

    },1000); 
    
    

    });
});

// Fungsi untuk mereset skor
function resetScores() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
}

// const pRock  = document.getElementById ('rock');
// pRock.addEventListener('click', function() {
//     const computer = getCompChoice();
//     const  player = pRock.id;
//     const hasil = getScore(computer,player);

//     const imgCom = document.getElementById('imgcom');
//     imgCom.setAttribute('src','img/' +  computer + '.png');

//     const info = document.getElementById('score');
//     info.innerHTML = hasil;
// });

// const pPaper  = document.getElementById('paper');
// pPaper.addEventListener('click', function() {
//     const computer = getCompChoice();
//     const  player = pPaper.id;
//     const hasil = getScore(computer,player);

//     const imgCom = document.getElementById('imgcom');
//     imgCom.setAttribute('src','img/' +  computer + '.png');

//     const info = document.getElementById('score');
//     info.innerHTML = hasil;
// });

// const pScissors  = document.getElementById('scissors');
// pScissors.addEventListener('click', function() {
//     const computer = getCompChoice();
//     const  player = pScissors.id;
//     const hasil = getScore(computer,player);

//     const imgCom = document.getElementById('imgcom');
//     imgCom.setAttribute('src','img/' +  computer + '.png');

//     const info = document.getElementById('score');
//     info.innerHTML = hasil;
// });
