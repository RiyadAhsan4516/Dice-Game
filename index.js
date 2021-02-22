var value1 = Math.floor(Math.random()*6);
var value2 = Math.floor(Math.random()*6);
var values = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];

if (value1>value2){
    document.querySelector('h1').innerHTML = "Player 1 wins!!";
    document.querySelector('.img1').src = values[value1];
    document.querySelector('.img2').src = values[value2];
}
else if(value2>value1){
    document.querySelector('h1').innerHTML = "Player 2 wins!!";
    document.querySelector('.img1').src = values[value1];
    document.querySelector('.img2').src = values[value2]; 
}
else{
    document.querySelector('h1').innerHTML = "Its a draw";
    document.querySelector('.img1').src = values[value1];
    document.querySelector('.img2').src = values[value2];
}