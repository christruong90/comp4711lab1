window.addEventListener('load', function() {
    createMemoryBoard(5, 4);
});

// create matrix 
function createMemoryBoard(width, height) {
	let container = document.getElementById('board');
    container.innerHTML = '';

    for (let i = 0; i < width; i++) {
        let br = document.createElement('br');
        container.appendChild(br);
        
        let x = document.createElement('div');
        x.className = 'box';
        container.appendChild(x);

        for (let j = 0; j < height; j++) {
            let y = document.createElement('div');
            y.className = 'box';
            container.appendChild(y);
        }
    }
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(card => card.addEventListener('click', selectedCard));
}

function spin() {
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



