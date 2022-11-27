var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImage2);

if (randomImage1 > randomImage2) {
  document.querySelector("h2").innerHTML = "Player 1 wins!";
  document.querySelector("h2").style.color = "#FEFCF3";
} else if (randomImage1 < randomImage2) {
  document.querySelector("h2").innerHTML = "Player 2 wins!";
  document.querySelector("h2").style.color = "#FEFCF3";
} else {
  document.querySelector("h2").innerHTML = "It's a Draw!";
  document.querySelector("h2").style.color = "#FBFACD";
}
