let trueTiles = [];
let beginX = 3;
let totalSum = 3;
let perfectScore = true;
let beginY = 2;
let sizeLimit = 7;
let score = 1;
let amountOfTiles = beginY + 2;
let right;
let wrong  = 0;



window.addEventListener('load', function() {
    createMemoryBoard(beginX, beginY);
    setTimeout(function() {
        spin();
    }, 3000);
});



function spin() {
    document.getElementById("board").classList.remove('containerrotate');
    document.getElementById("board").classList.add("spinBoard")
}

function selectedCard() {
   console.log('Clicked');
   this.classList.toggle('turn')
   console.log(this);
}

//back to default
function erase(){
   let resetTiles = document.querySelectorAll(".box");
   resetTiles.forEach(item => {
       item.classList.remove('turn');
       //item.querySelector('.box').removeAttribute('style');
   });
}

// generate a random number
function randoTiles(sizeLimit) {
    return Math.floor(Math.random() * sizeLimit);
}

$(document).ready(function () {

   function generateTiles() {
       randomElements = jQuery(".box").get().sort(function() {
           return Math.round(Math.random()) - 0.5
       }).slice(0, 5)

       $(randomElements).toggleClass('turn');
       //console.log("Change");
   }
   generateTiles();
   setTimeout(function () {
       erase();
   }, 1000);
   setTimeout(function () {
       spin();
   }, 1500);
});

function correctTiles(xSquare, ySquare) {
    for(let i = 0; i < xSquare; i++) {
        trueTiles[i] = [];
        for(let j = 0; j < ySquare; j++) {
            trueTiles[i][j] = 0;
        }
    }

    for(let i = 0; i < amountOfTiles; i++) {
        let x = randoTiles(xSquare);
        let y = randoTiles(ySquare);
        if (trueTiles[x][y] == 0) {
            trueTiles[x][y] = 1;
        } else {
            i--;
        } 
        correct = amountOfTiles;
        console.log(correct);
    }
}

function singleScore() {
    if (this.classList.contains('correct')) {
        this.classList.remove('back');
        this.classList.add('flipCorrect');
        score++;
        right--;
        if (wrong === 0) {
            perfectScore = true;
        }
        console.log(right);
    } else if (this.classList.contains('incorrect')) {
        this.classList.add('flipIncorrect');
        score--;
        perfectScore = false;
        wrong++;
        if (wrong !== 0) {
            perfectScore = false;
        }
        if(score == 0) {
            alert('You lose');
        }
    }

    if (right == 0) {
        setTimeout(function () {
            clearBoard();
    
        }, 2000);
       playSound();
       setTimeout(function() {
            nextStage();
            let rotate = document.getElementById('container');
            rotate.classList.remove('containerrotate');
        }, 5000);
    }
    document.getElementById('score').innerHTML = 'Score: ' + score;
} 

// create memoryBoard 
function createMemoryBoard(width, height) {
    correctTiles(beginX, beginY);
    let board = document.getElementById('board');
    board.innerHTML = '';

    for (let i = 0; i < width; i++) {
        let br = document.createElement('br');
        board.appendChild(br);
        let x = document.createElement('div');
        x.className = 'box';
        for (let j = 0; j < height; j++) {

            let y = document.createElement('div');
            y.className = 'box';

            x.onclick = singleScore;
            y.onclick = singleScore;

            if (trueTiles[i][j] == 1) {
                y.classList.add('correct');
                x.classList.add('incorrect');
            } else {
                y.classList.add('incorrect');
                x.classList.add('incorrect');
            }

            if(y.classList.contains('correct')) {
                y.classList.add('flipCorrect');
                setTimeout(function() {
                    y.classList.remove('flipCorrect');
                    y.classList.add('back');
                }, 2000);
            }
            board.appendChild(x);
            board.appendChild(y);
           // console.log(container);
        }
    }
}



