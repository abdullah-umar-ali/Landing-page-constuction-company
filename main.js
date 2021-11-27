


let mainSliderImages = Array.from(
    document.querySelectorAll(".main_slider div.slide")
);
let subSliderImages = Array.from(document.querySelectorAll(".sub_slider div.slide"));
let counter = 2;
let details = Array.from(document.querySelectorAll(".description .details"))
setInterval(() => {
  subSliderImages[counter].style.opacity = 0
  mainSliderImages[counter].style.opacity = 0
  details.forEach(elem => elem.classList.remove("active"))
  details[counter].classList.add("active")
// 

  counter--;
  if (counter < 0) {
    subSliderImages.forEach(elem => elem.style.opacity = 1)
    mainSliderImages.forEach(elem => elem.style.opacity = 1);

    counter = 2;
  }

}, 7000);

window.addEventListener("scroll" , () => {
  if(window.pageYOffset === 0){
    document.querySelector(".header_nav").style.backgroundColor = "transparent"
  }else{
    document.querySelector('.header_nav').style.backgroundColor = "#151517"
  }
})