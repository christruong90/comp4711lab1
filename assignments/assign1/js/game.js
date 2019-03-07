let trueTiles = [];
let beginX = 3;
let totalSum = 3;
let perfectScore = true;
let beginY = 2;
let sizeLimit = 7;
let sizeMinimum = 2;
let sizeMinX = 3;
let score = 0
let amountOfTiles = beginY + 2;
let right;
let wrong  = 0;



window.addEventListener('load', function() {
    createMemoryBoard(beginX, beginY);
    setTimeout(function() {
        spin();
    }, 3000);
	document.getElementById('closeGame').onclick = closeGame;
});



function spin() {
    document.getElementById("board").classList.remove('spinBoard');
    document.getElementById("board").classList.add("spinBoard")
}



function closeGame() {
    if (confirm('Closing Game, quit?')) {
        window.location = 'summary.html';
    }
}

// generate a random number
function randoTiles(sizeLimit) {
    return Math.floor(Math.random() * sizeLimit);
}



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
        right = amountOfTiles;
        console.log(right);
    }
}

function nextLevel() {
    miss = 0;
    if (perfectScore === false) {
        if (beginX <= sizeMinX && beginY <= sizeMinimum) {
            beginX = 3;
            beginY = 2;
            amountOfTiles = 3;
        } else {
            beginX--;
            beginY--;
        }
        amountOfTiles--;
        correctTiles(beginX, beginY);
        createMemoryBoard(beginX, beginY);
        setTimeout(function() {
            spin();
        }, 3000);
    } else {
        perfectScore = true;
        amountOfTiles++;
        if (beginX <= sizeLimit) {
            beginX++;
        } 
        
        if (beginY <= sizeLimit) {
            beginY++;
        }
    
        correctTiles(beginX, beginY);
        createMemoryBoard(beginX, beginY);
        setTimeout(function() {
            spin();
        }, 3000);
    }
}

function eraseBoard() {
    while(document.getElementById('board').hasChildNodes()) {
        document.getElementById('board').removeChild(document.getElementById('board').firstChild);
    }
}

function soundEffect(soundNum) {
	switch (soundNum) {
		case 0:
			document.getElementById('soundEffect').play();
			break;
		case 1:
			document.getElementById('loseSound').play();
			break;
		case 2:
			document.getElementById('tickSound').play();
			break;
	}
}

// function loseSound() {
	// document.getElementById('loseSound').play();
// }


function singleScore() {
	soundEffect(2);
    if (this.classList.contains('correct')) {
        this.classList.remove('return');
        this.classList.add('clickRight');
        score++;
        right--;
        if (wrong === 0) {
            perfectScore = true;
        }
        console.log(right);
    } else if (this.classList.contains('incorrect')) {
        this.classList.add('clickWrong');
        score--;
        perfectScore = false;
        wrong++;
        if (wrong !== 0) {
            perfectScore = false;
        }
        if(score == 0 || score < 0) {
            alert('You lose');
			window.location = "summary.html"
        }
    }

    if (right == 0) {
        setTimeout(function () {
            eraseBoard();
    
        }, 2000);
       soundEffect(0);
       setTimeout(function() {
            nextLevel();
            document.getElementById('board').classList.remove('spinBoard');
        }, 3000);
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
                y.classList.add('clickRight');
                setTimeout(function() {
                    y.classList.remove('clickRight');
                    y.classList.add('return');
                }, 2000);
            }
            board.appendChild(x);
            board.appendChild(y);
           // console.log(container);
        }
    }
}



