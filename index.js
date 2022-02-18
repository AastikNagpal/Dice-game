var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png"; // gives a string from dice1.png to dice6.png
var randomImgSrc = "images/" + randomDiceImg; //images/dice1.png to images/dice2.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImg = "dice" + randomNumber2 + ".png"; // gives a string from dice1.png to dice6.png
var randomImgSrc = "images/" + randomDiceImg; //images/dice1.png to images/dice2.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc);


// player1 wins
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
