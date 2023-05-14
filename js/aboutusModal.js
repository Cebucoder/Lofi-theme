// Lyndon

let about1 = document.getElementById("aboutus-overlay");
let closeModal = document.getElementById("aboutus-overlay");
let about = document.getElementById("Show-About");
let cardModal = document.getElementById("aboutus-card")

// lyndon
let load = document.querySelector(".perc");
let load1 = document.querySelector(".perc1");
let load2 = document.querySelector(".perc2");
let load3 = document.querySelector(".perc3");
let load4 = document.querySelector(".perc4");
// lyndon





function showAboutusModal() {
  about.classList.remove("show-about-us");
  cardModal.classList.add("show-card-scale");

  setTimeout(function() {
    // Lynon
    load.classList.add("perc-load");
    load1.classList.add("perc1-load");
    load2.classList.add("perc2-load");
    load3.classList.add("perc3-load");
    load4.classList.add("perc4-load");
    // lyndon
    // rich
    rich.classList.add("rich-load");
    rich1.classList.add("rich1-load");
    rich2.classList.add("rich2-load");
    rich3.classList.add("rich3-load");
    rich4.classList.add("rich4-load");
    // rich

  }, 300);


  closeModal.classList.add("show-aboutusModal");
}


function closeABoutusModal(){
	closeModal.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal.classList.remove("show-card-scale");

    // lndon
    load.classList.remove("perc-load");
    load1.classList.remove("perc1-load");
    load2.classList.remove("perc2-load");
    load3.classList.remove("perc3-load");
    load4.classList.remove("perc4-load");
    // lyndon

    // rich
    rich.classList.remove("rich-load");
    rich1.classList.remove("rich1-load");
    rich2.classList.remove("rich2-load");
    rich3.classList.remove("rich3-load");
    rich4.classList.remove("rich4-load");
    // rich

}




// Richamell


let rich11 = document.getElementById("aboutus-overlay1");
let cardModal1 = document.getElementById("aboutus-card1")
let closeModal1 = document.getElementById("aboutus-overlay1");
// Rich
let rich = document.querySelector(".rich");
let rich1 = document.querySelector(".rich1");
let rich2 = document.querySelector(".rich2");
let rich3 = document.querySelector(".rich3");
let rich4 = document.querySelector(".rich4");
// Rich


function showAboutusModal1(){
	rich11.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal1.classList.add("show-card-scale");

    setTimeout(function() {
    // rich
    rich.classList.add("rich-load");
    rich1.classList.add("rich1-load");
    rich2.classList.add("rich2-load");
    rich3.classList.add("rich3-load");
    rich4.classList.add("rich4-load");
    // rich

  }, 300);

}
function closeABoutusModal1(){
	closeModal.classList.remove("show-aboutusModal");
	rich11.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal1.classList.remove("show-card-scale");

    // rich
    rich.classList.remove("rich-load");
    rich1.classList.remove("rich1-load");
    rich2.classList.remove("rich2-load");
    rich3.classList.remove("rich3-load");
    rich4.classList.remove("rich4-load");
    // rich

}


// Regine

let reg = document.getElementById("aboutus-overlay2");
let cardModal2 = document.getElementById("aboutus-card2")
let closeModal2 = document.getElementById("aboutus-overlay2");


// Rich
let reggine = document.querySelector(".regine");
let regine1 = document.querySelector(".regine1");
let regine2 = document.querySelector(".regine2");
let regine3 = document.querySelector(".regine3");
// Rich

function showAboutusModal2(){
	reg.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal2.classList.add("show-card-scale");

    setTimeout(function() {
    // regine
    reggine.classList.add("regine-load");
    regine1.classList.add("regine1-load");
    regine2.classList.add("regine2-load");
    regine3.classList.add("regine3-load");
    // regine

  }, 300);

}
function closeABoutusModal2(){
	closeModal.classList.remove("show-aboutusModal");
	reg.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal2.classList.remove("show-card-scale");

    // regine
    reggine.classList.remove("regine-load");
    regine1.classList.remove("regine1-load");
    regine2.classList.remove("regine2-load");
    regine3.classList.remove("regine3-load");
    // regine
}





// Felix

let felix = document.getElementById("aboutus-overlay3");
let cardModal3 = document.getElementById("aboutus-card3")
let closeModal3 = document.getElementById("aboutus-overlay3");

// felix
let fe = document.querySelector(".felix");
let fe1 = document.querySelector(".felix1");
let fe2 = document.querySelector(".felix2");
let fe3 = document.querySelector(".felix3");
let fe4 = document.querySelector(".felix4");
// felix


function showAboutusModal3(){
	felix.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal3.classList.add("show-card-scale");

    setTimeout(function() {
    // felix
    fe.classList.add("felix-load");
    fe1.classList.add("felix1-load");
    fe2.classList.add("felix2-load");
    fe3.classList.add("felix3-load");
    fe4.classList.add("felix4-load");
    // felix

  }, 300);

}
function closeABoutusModal3(){
	closeModal.classList.remove("show-aboutusModal");
	felix.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal3.classList.remove("show-card-scale");

    fe.classList.remove("felix-load");
    fe1.classList.remove("felix1-load");
    fe2.classList.remove("felix2-load");
    fe3.classList.remove("felix3-load");
    fe4.classList.remove("felix4-load");
}


// Shellou Frasco

let Shellou = document.getElementById("aboutus-overlay4");
let cardModal4 = document.getElementById("aboutus-card4")
let closeModal4 = document.getElementById("aboutus-overlay4");

// felix
let she = document.querySelector(".shelou");
let she1 = document.querySelector(".shelou1");
let she2 = document.querySelector(".shelou2");
let she3 = document.querySelector(".shelou3");
let she4 = document.querySelector(".shelou4");
// felix


function showAboutusModal4(){
	Shellou.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal4.classList.add("show-card-scale");

    she.classList.add("shelou-load");
    she1.classList.add("shelou1-load");
    she2.classList.add("shelou2-load");
    she3.classList.add("shelou3-load");
    she4.classList.add("shelou4-load");

}
function closeABoutusModal4(){
	closeModal.classList.remove("show-aboutusModal");
	Shellou.classList.remove("show-aboutusModal");
    about.classList.add("show-about-us");
    cardModal4.classList.remove("show-card-scale");

    she.classList.remove("shelou-load");
    she1.classList.remove("shelou1-load");
    she2.classList.remove("shelou2-load");
    she3.classList.remove("shelou3-load");
    she4.classList.remove("shelou4-load");
}







function showLyndon(){
	about1.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal.classList.add("show-card-scale");

    setTimeout(function() {
    // Lynon
    load.classList.add("perc-load");
    load1.classList.add("perc1-load");
    load2.classList.add("perc2-load");
    load3.classList.add("perc3-load");
    load4.classList.add("perc4-load");
    // lyndon

  }, 300);


}
function showRich(){
	rich11.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal1.classList.add("show-card-scale");

    setTimeout(function() {
    // rich
    rich.classList.add("rich-load");
    rich1.classList.add("rich1-load");
    rich2.classList.add("rich2-load");
    rich3.classList.add("rich3-load");
    rich4.classList.add("rich4-load");
    // rich

  }, 300);
}
function showReg(){
	reg.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal2.classList.add("show-card-scale");

    setTimeout(function() {
    // regine
    reggine.classList.add("regine-load");
    regine1.classList.add("regine1-load");
    regine2.classList.add("regine2-load");
    regine3.classList.add("regine3-load");
    // regine

  }, 300);
}
function showFelix(){
	felix.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal3.classList.add("show-card-scale");

    setTimeout(function() {
    // felix
    fe.classList.add("felix-load");
    fe1.classList.add("felix1-load");
    fe2.classList.add("felix2-load");
    fe3.classList.add("felix3-load");
    fe4.classList.add("felix4-load");
    // felix

  }, 300);

}
function showShe(){
	Shellou.classList.add("show-aboutusModal");
    about.classList.remove("show-about-us");
    cardModal4.classList.add("show-card-scale");

    setTimeout(function() {
    she.classList.add("shelou-load");
    she1.classList.add("shelou1-load");
    she2.classList.add("shelou2-load");
    she3.classList.add("shelou3-load");
    she4.classList.add("shelou4-load");

      }, 300);
}