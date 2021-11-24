function elfName()
{
var myElfName= new Array(
"You'l be rich",
"You'll	be	famous",
"You'll	fall in	love",
"You'll	be	happy",
"Good fortune will be yours",
"You will have many friends",
"Do a good deed today",
"Someone will call you today",
"You will go to a party soon",
"Be careful on Tuesday");
var random = myElfName[Math.floor(Math.random() * myElfName.length)];
//alert(random);
document.getElementById("message").innerHTML=random;
}