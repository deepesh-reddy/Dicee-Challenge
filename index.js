var num = Math.floor(Math.random()*6)+1;
var dc1 = "images/dice"+num+".png";
document.querySelectorAll("img")[0].setAttribute("src",dc1);

var num2 = Math.floor(Math.random()*6)+1;
var dc2 = "images/dice"+num2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dc2);

if(num === num2){
    document.querySelector("h1").innerHTML="Draw";
}else if(num > num2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}else {
    document.querySelector("h1").innerHTML="Player 2 won";
}
