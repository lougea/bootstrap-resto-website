////////// PROMPT DEBUT
var myName = sessionStorage.getItem("myName");

if(!myName){
myName = prompt("Cher visiteur, quel est votre prénom ?");
sessionStorage.setItem("myName", myName);
}
document.getElementById("titre2").innerHTML ="Bienvenue" +" "+ myName ;
document.getElementById("titre3").innerHTML ="Envie de nouvelles saveurs ?";
document.getElementById("titre4").innerHTML ="L'Afrique dans votre assiette en quelques clics" ;

/* TEST RATE
var okay = 0;

function bonjour() {
  if (okay == 0){
  userprenom = prompt("Entrer votre prénom ...");

  alert("Bonjour" +" "+ userprenom +" et bienvenue à AFRIFOOD...");}
  okay = 1
};
bonjour()*/
/////////////////////////////////////

var ladate=new Date();
var j = ladate.getDay();
var jourT = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var h=ladate.getHours();
var m=ladate.getMinutes();
var b=ladate.getDate();
var c=ladate.getMonth();
var d=ladate.getFullYear();

function heure(){
  if (m < 10) {
    m = "0"+ m;
  }

  if (c < 10) {
    c = "0"+ c;
  }

  if ((h >= 12 && h <= 15) || (h >= 19 && h <= 23)){
    document.getElementById("date").innerHTML = jourT[j]+ " " + b +" "+ c +" " +d+ ", " + h + ":" + m ;
    document.getElementById("ouvertoupas").innerHTML = "Nos restaurant sont ouverts, venez vous régaler";
  } else {
    document.getElementById("date").innerHTML = b +" "+ c +" " +d+ ", " + h + ":" + m ;
    document.getElementById("ouvertoupas").innerHTML = " Nos restaurant ne sont  pas encore ouverts, encore un peu de patience ...";

  }
};


/////////////////////////////////
var photo = document.getElementById("jumbotron22");
TweenLite.from(jumbotron, 1, {y:200,opacity:0});

////////////////////// Menu - listes groupées

$('#myList a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

//////////// Carousel
