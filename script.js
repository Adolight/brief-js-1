const monform = document.getElementById('monform');

 monform.addEventListener('submit', function(e){

      e.preventDefault();
     const nom = document.getElementById('nom');
     const mail = document.getElementById('e-mail');
     const monerreur1 = document.getElementById('erreur1');
     const monerreur2 = document.getElementById('erreur2');

     if (nom.value == ""){
        monerreur1.innerText = "le champs nom est requis ";
        monerreur1.style.color = "red";
     }else {
        monerreur1.style.display ="none";
     };

     if (mail.value == ""){
        monerreur2.innerText = "le champs e-mail est requis ";
        monerreur2.style.color = "red";
     }else {
      monerreur2.style.display = "none"
      alert ("Merci pour votre fidelité " +nom.value );
     }
     
     this.reset ();
     
 })