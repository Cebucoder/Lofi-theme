// Lyndon

let about1 = document.getElementById("aboutus-overlay");
let closeModal = document.getElementById("aboutus-overlay");
let about = document.getElementById("Show-About");
let cardModal = document.getElementById("aboutus-card")
let load = document.querySelector(".perc");
let load = document.querySelector(".perc1");
let load = document.querySelector(".perc2");
let load = document.querySelector(".perc3");
let load = document.querySelector(".perc4");


function showAboutusModal() {
  about.classList.remove("show-about-us");
  cardModal.classList.add("show-card-scale");
  setTimeout(function() {
    load.classList.add("perc-load");
    load.classList.add("perc1-load");
    load.classList.add("perc2-load");
    load.classList.add("perc3-load");
    load.classList.add("perc4-load");
  }, 300);
  closeModal.classList.add("show-aboutusModal");
}


function closeABoutusModal(){
	closeModal.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal.classList.remove("show-card-scale");
    load.classList.remove("perc-load");
    load.classList.remove("perc1-load");
    load.classList.remove("perc2-load");
    load.classList.remove("perc3-load");
    load.classList.remove("perc4-load");

}




// Richamell


let rich = document.getElementById("aboutus-overlay1");
let cardModal1 = document.getElementById("aboutus-card1")
let closeModal1 = document.getElementById("aboutus-overlay1");



function showAboutusModal1(){
	rich.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal1.classList.add("show-card-scale");

}
function closeABoutusModal1(){
	closeModal.classList.remove("show-aboutusModal");
	rich.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal1.classList.remove("show-card-scale");

}


// Regine

let reg = document.getElementById("aboutus-overlay2");
let cardModal2 = document.getElementById("aboutus-card2")
let closeModal2 = document.getElementById("aboutus-overlay2");


function showAboutusModal2(){
	reg.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal2.classList.add("show-card-scale");
}
function closeABoutusModal2(){
	closeModal.classList.remove("show-aboutusModal");
	reg.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal2.classList.remove("show-card-scale");
}





// Felix

let felix = document.getElementById("aboutus-overlay3");
let cardModal3 = document.getElementById("aboutus-card3")
let closeModal3 = document.getElementById("aboutus-overlay3");


function showAboutusModal3(){
	felix.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal3.classList.add("show-card-scale");
}
function closeABoutusModal3(){
	closeModal.classList.remove("show-aboutusModal");
	felix.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal3.classList.remove("show-card-scale");
}


// Shellou Frasco

let Shellou = document.getElementById("aboutus-overlay4");
let cardModal4 = document.getElementById("aboutus-card4")
let closeModal4 = document.getElementById("aboutus-overlay4");


function showAboutusModal4(){
	Shellou.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal4.classList.add("show-card-scale");
}
function closeABoutusModal4(){
	closeModal.classList.remove("show-aboutusModal");
	Shellou.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal4.classList.remove("show-card-scale");
}







function showLyndon(){
	about1.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal.classList.add("show-card-scale");
}
function showRich(){
	rich.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal1.classList.add("show-card-scale");
}
function showReg(){
	reg.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal2.classList.add("show-card-scale");
}
function showFelix(){
	felix.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal3.classList.add("show-card-scale");
}
function showShe(){
	Shellou.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal4.classList.add("show-card-scale");
}