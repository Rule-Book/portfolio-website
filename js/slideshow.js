var slideIndex = 1;
init_slides()

function init_slides() {
  let slideshows = document.getElementsByClassName("w3-content");
  for (i = 0; i < slideshows.length; i++) {
    showDivs(1, slideshows[i].id);
  }
}

function plusDivs(ind, slideshow_name) {
  showDivs(slideIndex += ind, slideshow_name);
}

function currentDiv(ind, slideshow_name) {
  showDivs(slideIndex = ind, slideshow_name);
}

function showDivs(ind, slideshow_name) {
  var i;
  var slideshow = document.getElementsByClassName(slideshow_name + "-image");
  var dots = document.getElementsByClassName(slideshow_name + "-indicator");
  if (ind > slideshow.length) {slideIndex = 1}
  if (ind < 1) {slideIndex = slideshow.length}
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  slideshow[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}