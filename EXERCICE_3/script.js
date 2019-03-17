
 var Valider = document.getElementById("demande");
 //Valider.addEventListener('click',verifierFormulaire);
var nom = document.getElementById("nom");
var errornom = document.getElementById("errorName");
var prenom = document.getElementById("prenom");
var errorprenom = document.getElementById("errorpName");
var adresse = document.getElementById("adresse");
var erroradresse = document.getElementById("nerroradresse");
var ville = document.getElementById("ville");
var errorville = document.getElementById("errorville");
 


function verifierFormulaire(e)
{
    if(nom.validity.valueMissing)
    {
       e.preventDefault();
       errornom.textContent = "name can not empty !";
       errornom.style.color = "red";
       
    }
    else
    {
        alert("succed");
    }

    if(prenom.validity.valueMissing)
    {
       e.preventDefault();
       errorprenom.textContent = "prenom can not empty !";
       errorprenom.style.color = "red";
       
    }
    else
    {
        alert("succed");
    }
    if(adresse.validity.valueMissing)
    {
       e.preventDefault();
       erroradresse.textContent = "adress can not empty !";
       erroradresse.style.color = "red";
       
    }
    else
    {
        alert("succed");
    }

    if(ville.validity.valueMissing)
    {
       e.preventDefault();
       errorville.textContent = "city can not empty !";
       errorville.style.color = "red";
       
    }
    else
    {
        alert("succed");
    }
}

