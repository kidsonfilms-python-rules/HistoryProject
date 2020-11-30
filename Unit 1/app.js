var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}

$(document).keypress(function(e) {
    if(e.charCode == 103) {
        plusSlides(1)
    }
  });

function itsFriday() {
  intro = document.querySelector('.introslide')
  var obj = {"video": {
    "value": "<iframe title='YouTube video player' type=\"text/html\" width='640'  height='390' src='http://www.youtube.com/embed/W-Q7RMpINVo' frameborder='0' allowFullScreen></iframe>"
    }}
    // $(".introslide").html(obj.video.value);
}

  var date = new Date();
  switch(date.getDay()){
      case 5: itsFriday(); break;
      default: itsFriday();
  }
