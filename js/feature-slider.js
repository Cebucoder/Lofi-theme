// <div class="slider-container">
//   <div class="slider">
//     <img src="image1.jpg">
//     <img src="image2.jpg">
//     <img src="image3.jpg">
//   </div>
// </div>

// <script>
  // get the slider container and the slider
  // const sliderContainer = document.querySelector('.slider-container');
  // const slider = document.querySelector('.slider');

  // set the current slide to the first one
  // let currentSlide = 1;

  // set the width of the slider based on the number of slides
  // slider.style.width = `${100 * slider.children.length}%`;

  // function to move the slider to the next slide
  // function moveSlider() {
  //   if (currentSlide < slider.children.length) {
  //     currentSlide++;
  //     slider.style.transform = `translateX(-${100 * (currentSlide - 1) / slider.children.length}%)`;
  //   } else {
  //     currentSlide = 1;
  //     slider.style.transform = `translateX(0)`;
  //   }
  // }

  // move the slider every 5 seconds
  // setInterval(moveSlider, 5000);
// </script>





// Proel modal trigger
let proels = document.getElementById("proel");
let inmanas = document.getElementById("inmana");
let webtechs = document.getElementById("webtech");
let mobapps = document.getElementById("mobapp");
let technos = document.getElementById("techno");
let closeov = document.getElementById("proel");
let closeov1 = document.getElementById("inmana");
let closeov2 = document.getElementById("webtech");
let closeov3 = document.getElementById("mobapp");
let closeov4 = document.getElementById("techno");

function Showproel(){
  proels.classList.add("show-overlay-prop");
}

function closeover(){
  closeov.classList.remove("show-overlay-prop");
  closeov1.classList.remove("show-overlay-prop");
  closeov2.classList.remove("show-overlay-prop");
  closeov3.classList.remove("show-overlay-prop");
  closeov4.classList.remove("show-overlay-prop");
}

function inmana(){
  inmanas.classList.add("show-overlay-prop");
}

function webtech(){
  webtechs.classList.add("show-overlay-prop");
}

function mobapp(){
  mobapps.classList.add("show-overlay-prop");
}

function techno(){
  technos.classList.add("show-overlay-prop");
}
