function vide()
{
    break;
}


function winner(nb1,nb2)
{
    var Joueur1 = prompt("veillez saisir votre nom svp !");
    var Nombre1 = prompt('saisir un nombre svp');
    var Joueur2 = prompt("veillez saisir votre nom svp !");
    var Nombre2 = prompt('saisir un nombre svp');
    image = document.getElementsByClassName("image");

    if(nb1 > nb2)
    {
       alert("le vainqueur est : " + Joueur1);
        image.style.opacity = 0;
    }
    if(nb1 < nb2)
    {
        alert("le vainqueur est : "+ Joueur2);
        image.style.opacity = 0; 
    }
    
    else
    {
        alert("aucun vainqueur veillez rejouer !");
    }
}

vide();
winner(Nombre1,Nombre2);

