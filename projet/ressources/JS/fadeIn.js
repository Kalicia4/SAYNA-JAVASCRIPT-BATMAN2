
// FADE IN GAUCHE DROITE 

window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".fade-in");
    for (var i = 0; i < elements.length; i++) {
      let element = elements[i];
      let position = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      if (position < windowHeight) {
        element.classList.add("show");
      }
      else{
        element.classList.remove("show");
      }
    }
});

// FADE IN DROITE GAUCHE
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".fade-indg");
  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];
    let position = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (position < windowHeight) {
      element.classList.add("showdg");
    }
    else{
      element.classList.remove("showdg");
    }
  }
});

// OPACITY ANIMATION 
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".op");
  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];
    let position = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (position < windowHeight) {
      element.classList.add("showop");
    }
    else{
      element.classList.remove("showop");
    }
  }
});

// ANIMATION FLIP
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".flip");
  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];
    let position = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (position < windowHeight) {
      element.classList.add("showflip");
    }
    else{
      element.classList.remove("showflip");
    }
  }
});