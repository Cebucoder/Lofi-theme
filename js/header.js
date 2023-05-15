
let header = document.getElementById("navigation");
let showlogo = document.getElementById("show-logo")
let teamcont = document.getElementById("Show-About");
let burger = document.getElementById("hide-burgers");


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
  prevScrollpos = currentScrollPos;
}




let menuContainer = document.getElementById("menu-cotainer");
let menuCont = document.getElementById("menu-cont");
function showMothCont(){
  menuContainer.classList.add("show-menu-cont");
  menuCont.classList.add("show-menu-child");
}


function CloseMenuCont(){
  menuContainer.classList.remove("show-menu-cont");
  menuCont.classList.remove("show-menu-child");
}



function toggleDark(){
  let tgdarkmode = document.getElementById("Darkmode");
  let dark = document.getElementById("darkbody");
  let tgdarkmode1 = document.getElementById("Darkmode1");
  let tgdarkmode2 = document.getElementById("Darkmode2");
  let tgdarkmode3 = document.getElementById("Darkmode3");
  let footerDark  = document.getElementById("Footer-cont");
  // let blogCont = document.getElementById("blog-cont");
  
  tgdarkmode.classList.toggle("toggle-Darkmode");
  dark.classList.toggle("toggle-darkbody");
  tgdarkmode1.classList.toggle("toggle-Darkmode1");
  tgdarkmode2.classList.toggle("toggle-Darkmode2");
  tgdarkmode3.classList.toggle("toggle-Darkmode3");
  // blogCont.classList.toggle("blog-dark");
  footerDark.classList.toggle("dark-footer");


  // save the user's preference in local storage
  let isDarkModeEnabled = tgdarkmode.classList.contains("toggle-Darkmode");
  localStorage.setItem("isDarkModeEnabled", isDarkModeEnabled);
}

// check if the user's preference is stored in local storage, and apply the dark mode if necessary
let isDarkModeEnabled = JSON.parse(localStorage.getItem("isDarkModeEnabled"));
if (isDarkModeEnabled) {
  toggleDark();
}



function chooseLanguage() {
  let languageOptions = document.getElementById("dropdown");

  languageOptions.classList.toggle("show-lang");
}



// back to home


function backTohome(){
  window.location.replace("index.html");
}