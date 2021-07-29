var randNum1=(Math.floor((Math.random()*6)+1));
var randNum2=(Math.floor((Math.random()*6)+1));

document.querySelector(".image1").setAttribute("src","images/dice"+randNum1+".png");
document.querySelector(".image2").setAttribute("src","images/dice"+randNum2+".png");

if(randNum1>randNum2){
    document.querySelector(".heading").innerHTML="🚩 Player 1 is the Winner!";
}
if(randNum1<randNum2){
    document.querySelector(".heading").innerHTML="🚩 Player 2 is the Winner!";
}
if(randNum1===randNum2){
    document.querySelector(".heading").innerHTML="🏳️ It's a TIE!";
}

///////////////////////////////////////////////////////////////////////////////////
console.log("randNum1 = "+randNum1+"\nrandNum2 = "+randNum2);