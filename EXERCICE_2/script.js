

for(var chance = 5 ; chance > 0 ; chance--)
{  
    
    var nb_aleatoire =  (Math.random()*10);
    var nb_user = prompt("saisisez un nombre svp !");


    function compare()
    {
        comparer(nb_user,nb_aleatoire);
        
        
    }






    function comparer(user,machine)
    {
        if(user > machine)
        {
            alert("le nombre est plus grand !");
            //fonction de recommencement ici
            compare();
        }
        if( user < machine)
        {
            alert("le nombre est plus petit !");
            //fonction dev recommencement ici
            compare(); 
        }
        else
        {
            alert("bravo vous avez deviné le nombre pseudo aleatoire : " + nb_aleatoire);
            
            
        }
        
    }
    comparer(nb_user,nb_aleatoire);
}