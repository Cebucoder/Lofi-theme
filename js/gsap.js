


let lyndonanim = document.getElementById("lyndon");
let Richanim = document.getElementById("rich");
let Reginanim = document.getElementById("regine");
let Felixnanim = document.getElementById("felix");
let Shelouanim = document.getElementById("she");



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > 400) {
    lyndonanim.classList.add("showLyndon");
  }else{
    lyndonanim.classList.remove("showLyndon");
  }


  if (prevScrollpos > 670) {
    Richanim.classList.add("showrichamel");
  }else{
    Richanim.classList.remove("showrichamel");
  }

  if (prevScrollpos > 1060) {
    Reginanim.classList.add("showregine");
  }else{
    Reginanim.classList.remove("showregine");
  }

  if (prevScrollpos > 1450) {
    Felixnanim.classList.add("showfelix");
  }else{
    Felixnanim.classList.remove("showfelix");
  }

  if (prevScrollpos > 1840) {
    Shelouanim.classList.add("showshelou");
  }else{
    Shelouanim.classList.remove("showshelou");
  }

  prevScrollpos = currentScrollPos;
}




window.onload = function() {
  const blogBanner = document.getElementById("blog-banner");
  blogBanner.classList.add("blog-img-anim");
};


