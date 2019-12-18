

document.getElementById('formjs').addEventListener("submit", function(e){
    var error;

  if(document.getElementById('username').value == ""){
    error = "vous avez oublié d'entrer votre nom d'utilisateur";
 
  }
  else if(document.getElementById('nom').value == ""){
    error = "vous avez oublié d'entrer votre nom";

  }
  else if (document.getElementById('prenom').value == ""){
    error = "vous avez oublié d'entrer votre prénom";
 
  }
  else if (document.getElementById('mdp').value == ""){
    error = "vous avez oublié d'entrer votre mot de passe";
      }
  else if (document.getElementById('courriel').value == ""){
    error = "vous avez oublié d'entrer votre adresse mail";
    
  }
  else if(document.getElementById('DateNais').value == ""){
    error = "vous avez oublié d'entrer votre date de naissance";
    
  }
  else if(document.getElementById('sexe').value == ""){
    error = "vous avez oublié d'entrer votre sexe";
    
  }
  else{
    //OK
  }
///// Calcul pour l'age
    var today = new Date();
    var dtn=document.getElementById('DateNais').value; 
    var an=dtn.substr(6,4); // 
    var mois=dtn.substr(3,2);// 
    var day= dtn.substr(0,2); // 

    var dateNaissance = new Date(an + "-" + mois + "-" + day);
    var age = today.getFullYear() - dateNaissance.getFullYear();
    var m = today.getMonth() - dateNaissance.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
        age = age - 1;
    }
    if(age<18) {
    error="Il faut avoir plus 18 ans";
  }

  if (document.getElementById('courriel').value =="root@paca.happy-dev.fr" || document.getElementById('courriel').value =="admin@paca.happy-dev.fr" || document.getElementById('courriel').value =="dieu@paca.happy-dev.fr") {
    error = "Ce courriel " + document.getElementById('courriel').value + " n'est pas authorisé";
    }
    
    if(document.getElementById('username').value=="root" || document.getElementById('username').value=="admin" || document.getElementById('username').value=="dieu"){
        error= "Ce nom d'utilisateur " + document.getElementById('username').value + " n'est pas authorisé";
    }

    if (error) {
    e.preventDefault();
    document.getElementById("error").innerHTML = error;
    return false;
  } 
  else {
    alert('Vous avez réussi!');
  }

});