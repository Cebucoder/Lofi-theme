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
  // blogCont.classList.toggle("toggle-Darkmode3");
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


// uxiew social
function social1(){
  const url = "https://www.facebook.com/profile.php?id=100092543981435&mibextid=ZbWKwL"
  window.open(url,"_blank");
}
function social2(){
  const url = "https://mail.google.com/mail/u/0/?fs=1&to=uxiecenter@gmail.com&su=Greetings&body=Hello Uxie team&tf=cm"
  window.open(url,"_blank");
}
function social3(){
  const url = "https://discord.com/channels/@me/search?author=Lynked#0647";
  window.open(url,"_blank");
}
function social4(){
  const url = "https://twitter.com/UxieWeb0007?t=Tn4qFRPr2E4tchv3VJfEIg&s=09";
  window.open(url,"_blank");
}
function social5(){
  const url = "https://instagram.com/uxieweb00007?igshid=ZGUzMzM3NWJiOQ==";
  window.open(url,"_blank");
}


// blog team social
function lyndsoc(){
	const url = "https://www.facebook.com/lyndon.erl";
	window.open(url, "_blank");
}
function lyndsoc1(){
	const url = "https://mail.google.com/mail/u/0/?fs=1&to=lyndonerlramirez@gmail.com&su=Greetings&body=Hello Lyndon&tf=cm";
	window.open(url, "_blank");
}
function lyndsoc2(){
	const url = "https://discord.com/channels/@me/search?author=Lynked#0647";
	window.open(url, "_blank");
}

// blog team social
function richsoc(){
	const url = "https://www.facebook.com/ricaforte.richamille";
	window.open(url, "_blank");
}
function richsoc1(){
	const url = "https://mail.google.com/mail/u/0/?fs=1&to=richamilleann@gmail.com&su=Greetings&body=Hello Rich&tf=cm";
	window.open(url, "_blank");
}
function richsoc2(){
	const url = "https://twitter.com/Serenit71853266?t=Bkig6k6tHTwVmOgZS4lT0g&s=09";
	window.open(url, "_blank");
}


// blog team social
function regsoc(){
	const url = "https://www.facebook.com/profile.php?id=100086415549740";
	window.open(url, "_blank");
}
function regsoc1(){
	const url = "https://mail.google.com/mail/u/0/?fs=1&to=salasregine282@gmail.com&su=Greetings&body=Hello Regine&tf=cm";
	window.open(url, "_blank");
}
function regsoc2(){
	const url = "https://instagram.com/wehgen_dump?igshid=ZGUzMzM3NWJiOQ=";
	window.open(url, "_blank");
}


// blog team social
function felixsoc(){
	const url = "https://www.facebook.com/nilag.pad.3";
	window.open(url, "_blank");
}
function felixsoc1(){
	const url = "https://mail.google.com/mail/u/0/?fs=1&to=felix2@gmail.com&su=Greetings&body=Hello Felix&tf=cm";
	window.open(url, "_blank");
}
function felixsoc2(){
	const url = "https://discord.gg/PdMgXc5t";
	window.open(url, "_blank");
}

// blog team social
function shesoc(){
	const url = "https://www.facebook.com/noona.cheong";
	window.open(url, "_blank");
}
function shesoc1(){
	const url = "https://mail.google.com/mail/u/0/?fs=1&to=shelloufrasco420@gmail.com&su=Greetings&body=Hello Shelou&tf=cm";
	window.open(url, "_blank");
}
function shesoc2(){
	const url = "https://twitter.com/itsmeshellou28?t=K2YQaFAwcRV94tWFGjZbbw&s=09";
	window.open(url, "_blank");
}





// searchbar
let search = document.getElementById("small-searchbar");
let searchCont = document.getElementById("search-id");
function showSearch() {

  search.classList.toggle("anim-search");
  searchCont.classList.toggle("show-cont-small");

}






