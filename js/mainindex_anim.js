
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

    let firstanim = document.getElementById("first-anim");
    let firstanimImg = document.getElementById("first-animImg");
    let secondfirstanim = document.getElementById("second-anim");
    let secondanimImg = document.getElementById("second-animImg");
    let thirdanim = document.getElementById("thirdanim");
    let thirdanim1 = document.getElementById("thirdanim1");

    let fourthanim = document.getElementById("fourthanim");
    let fourthanim2 = document.getElementById("fourthanim2");
    let fourthanim3 = document.getElementById("fourthanim3");





    if(prevScrollpos > 1200){
      firstanim.classList.add("show-first-anim");
      firstanimImg.classList.add("show-first-animImg");
    }
    else{
      firstanim.classList.remove("show-first-anim");
      firstanimImg.classList.remove("show-first-animImg");
    }

    if(prevScrollpos > 1600){
      secondfirstanim.classList.add("show-second-anim");
      secondanimImg.classList.add("show-second-animImg");
    }
    else{
      secondfirstanim.classList.remove("show-second-anim");
      secondanimImg.classList.remove("show-second-animImg");
    }

    if(prevScrollpos > 1980){
      thirdanim.classList.add("show-thirdanim");
      thirdanim1.classList.add("show-thirdanim");
    }
    else{
      thirdanim.classList.remove("show-thirdanim");
      thirdanim1.classList.remove("show-thirdanim");
    }

    if(prevScrollpos > 2300){
      fourthanim.classList.add("show-fourthanim");
      fourthanim2.classList.add("show-fourthanim");
      fourthanim3.classList.add("show-fourthanim");
    }
    else{
      fourthanim.classList.remove("show-fourthanim");
      fourthanim2.classList.remove("show-fourthanim");
      fourthanim3.classList.remove("show-fourthanim");
    }


    prevScrollpos = currentScrollPos;
  }