let playerScore = 0;

function getScore() {
	playerScore = window.localStorage.getItem('score')
	console.log(playerScore);
	let htmlScore = document.getElementById('currentScore').innerHTML;
	document.getElementById('currentScore').innerHTML = htmlScore + playerScore ;
}

window.addEventListener('load', function() {
    getScore();
	console.log(playerScore);
});