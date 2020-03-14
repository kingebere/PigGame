var scores ,activePlayer , roundScore
 init();


document.querySelector('.btn-roll').addEventListener('click' ,function(){
  //random number
    var dice = Math.floor(Math.random() * 6) + 1
//display
var diceDom = document.querySelector('.dice')
diceDom.style.display ='block';
diceDom.src = 'dice-' + dice + '.png'
 //if not 1
 if(dice !== 1){
     //add score
    roundScore += dice;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
}else{
    nextPlayer();
 }

})

document.querySelector('.btn-hold').addEventListener('click',function(){
  //add current score to global score
  scores[activePlayer] += roundScore;
  //update the UI
  document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];

  //check winner
  if (scores[activePlayer] >= 10){
    document.querySelector('#name-'+ activePlayer).textContent ='winner..';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  }
 else{
   //next player
  nextPlayer();

 }

});
function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
   
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display='none';
  
}
document.querySelector('.btn-new').addEventListener('click',init
);

function init(){
  roundScore = 0;
scores =[0,0];
activePlayer = 0;

document.querySelector('.dice').style.display='none';
document.getElementById ('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
};