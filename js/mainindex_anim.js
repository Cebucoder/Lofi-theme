
window.onload = function() {
    const heroanim = document.getElementById("heroanim");
    const heroDeatils  =document.getElementById("hero-details");
    heroanim.classList.add("showheranim");
    heroDeatils.classList.add("sho-hero-deatils");
  };



  let botAnim = document.getElementById("bot-anim");

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > 90) {
  
    header.classList.add("hide-navigation");
    showlogo.classList.add("show-logo");
    burger.classList.add("show-burger");
    teamcont.classList.remove("show-about-us")
 
   } else {
    
     header.classList.remove("hide-navigation");
     showlogo.classList.remove("show-logo");
     burger.classList.remove("show-burger");
   }
    if (prevScrollpos > 500) {
        botAnim.classList.add("show-bot-anim");
    }else{
        botAnim.classList.remove("show-bot-anim");
    }


    prevScrollpos = currentScrollPos;
  }