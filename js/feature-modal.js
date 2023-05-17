let regineActM = document.getElementById("regineAct");
let proelActM = document.getElementById("proelAct");
let mobappActM = document.getElementById("mobappAct");

function regineAct(){
    regineActM.classList.add("show-feature-card-overlay");
    
}
function proelAct(){
    proelActM.classList.add("show-feature-card-overlay");
}
function mobappAct(){
    mobappActM.classList.add("show-feature-card-overlay");
}

function closeFeatureOverlay(){
    regineActM.classList.remove("show-feature-card-overlay");
    proelActM.classList.remove("show-feature-card-overlay");
    mobappActM.classList.remove("show-feature-card-overlay");


}
