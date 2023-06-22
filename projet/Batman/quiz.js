let quizes = document.querySelectorAll(".hide");
const btns = document.getElementsByTagName("button");



// Sélectionner l'élément dans lequel afficher le chiffre
const element  = document.getElementById("chiffre");

// Définir la valeur initiale du chiffre
let chiffre = 1;
element.textContent = chiffre;

// Fonction pour incrémenter et afficher le chiffre
function incrementerEtAfficher() {
  chiffre++; // Incrémenter le chiffre de 1
  element.textContent = chiffre; // Afficher le chiffre dans l'élément
}


let currentIndex = 0;
quizes[currentIndex].classList.remove("hide");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    console.log("Bouton cliqué !");
    
    // Ajouter la classe "hide" à l'élément actuellement affiché
    quizes[currentIndex].classList.add("hide");
    
    // Augmenter l'index pour afficher l'élément suivant
    currentIndex++;
    
    // Vérifier si l'index dépasse la longueur des éléments quizes
    if (currentIndex < quizes.length) {
      // Afficher l'élément suivant
      quizes[currentIndex].classList.remove("hide");
    }
    else{
        popUpAfficher(15);
    }


    incrementerEtAfficher();
  });
}

function popUpAfficher(score){
    let titre = document.querySelector(".popup h3");
    let p = document.querySelector(".popup p");
    let popup = document.querySelector(".container_popup");
    if(score === 5){
        titre.textContent = "05/15 C'EST PAS TOUT A FAIT CA..."
        p.textContent = "Oula! Heuresement que le Riddler est sous les verrous...Il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Aller,rien n'est perdu "
    }
    else if(score === 10){
        titre.textContent = "10/15 PAS MAL !"
        p.textContent = "Encore un peu d'entraînement avec le Chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tête haute vos connaissances sont là. A vous de les consolider, foncez Gotham est votre terrain de chasse " 
    }
    else if (score === 15){
        titre.textContent = "15/15 BRAVO!"
        p.textContent = "Vous êtes véritablement un super fan de l'univers de Batman ! Comics, film, rien ne vous échappe. Bruce Wayne a de quoi être fier, Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux grains !" 
     
    } 
    else {
        titre.textContent = "Peux mieux faire"
        p.textContent = "On t'encourage de réessayer" 
    }
    popup.style.display = "flex"
}

const btnFin = document.querySelector("#btn_OK");
btnFin.addEventListener("click", ()=>{
    console.log("hey");
    let popup = document.querySelector(".container_popup");
    popup.style.display = "none";
    currentIndex = 0;
    quizes[currentIndex].classList.remove("hide");
    chiffre = 0;
    incrementerEtAfficher();
})

// SELECTION RADIO BTN 
const radioBtns = document.querySelectorAll('input[type="radio"]');

radioBtns.forEach(function(radioBtn) {
  radioBtn.addEventListener('click', function() {
    if (this.checked) {
      const selectedValue = this.value;
      console.log("Valeur sélectionnée : " + selectedValue);
    }
  });
});



