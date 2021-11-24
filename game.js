function elfName()
{
var myElfName= new Array(
"Adorellan Virdove",
"Feno Daerie",
"Selanar Ergeiros",
"Lathlaeril Wynpetor",
"Essaerae Gilphyra",
"Holone Dalamin",
"Darshee Wranfina",
"Ava Sylnan",
"Edea Arafir",
"Meriel Lulee");
var random = myElfName[Math.floor(Math.random() * myElfName.length)];
//alert(random);
document.getElementById("message").innerHTML=random;
}