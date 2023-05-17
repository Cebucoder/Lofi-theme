var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > 90) {
    let header = document.getElementById("navigation");
    let showlogo = document.getElementById("show-logo");
    let teamcont = document.getElementById("Show-About");
    let burger = document.getElementById("hide-burgers");
    
    header.classList.add("hide-navigation");
    showlogo.classList.add("show-logo");
    burger.classList.add("show-burger");
    teamcont.classList.remove("show-about-us");

 } else{
  
   header.classList.remove("hide-navigation");
   showlogo.classList.remove("show-logo");
   burger.classList.remove("show-burger");
 }
 prevScrollpos = currentScrollPos;
}