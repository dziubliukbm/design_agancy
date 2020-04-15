var slideIndex = 1; 
showSlides(slideIndex); 

function plusSlide() { 
  showSlides(slideIndex += 1); 
} 

function minusSlide() { 
  showSlides(slideIndex -= 1);  
} 

function currentSlide(n) { 
  showSlides(slideIndex = n); 
} 

function showSlides(n) { 
  var i; 
  var slides = document.getElementsByClassName("parag"); 
  var dots = document.getElementsByClassName("noguma-pomoki-kadra"); 
  if (n > slides.length) { 
  slideIndex = 1 
  } 
  if (n < 1) { 
  slideIndex = slides.length 
  } 
  for (i = 0; i < slides.length; i++) { 
  slides[i].style.display = "none"; 
  } 
  for (i = 0; i < dots.length; i++) { 
  dots[i].className = dots[i].className.replace("deystvuyus", ""); 
  } 
  slides[slideIndex - 1].style.display = "block"; 
  dots[slideIndex - 1].className += " deystvuyus"; 
}

showSlides1(slideIndex); 

function plusSlide1() { 
  showSlides1(slideIndex += 1); 
} 

function minusSlide1() { 
  showSlides1(slideIndex -= 1);  
} 

function currentSlide1(n) { 
  showSlides1(slideIndex = n); 
} 
function showSlides1(n) { 
  var i; 
  var slides = document.getElementsByClassName("parag1"); 
  var dots = document.getElementsByClassName("noguma-pomoki-kadra1"); 
  if (n > slides.length) { 
  slideIndex = 1 
  } 
  if (n < 1) { 
  slideIndex = slides.length 
  } 
  for (i = 0; i < slides.length; i++) { 
  slides[i].style.display = "none"; 
  } 
  for (i = 0; i < dots.length; i++) { 
  dots[i].className = dots[i].className.replace("deystvuyus", ""); 
  } 
  slides[slideIndex - 1].style.display = "block"; 
  dots[slideIndex - 1].className += " deystvuyus"; 
}
