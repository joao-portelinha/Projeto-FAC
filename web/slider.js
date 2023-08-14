let slideIndex = 1;

showSlides(slideIndex);
            
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

document.addEventListener('keydown', function(e){
  if(e.key === "ArrowLeft") {
    plusSlides(-1);
  } else if(e.key === "ArrowRight") {
    plusSlides(1);
  }
  
})

document.getElementById('arrow_left').addEventListener('click', function (e) {
  plusSlides(-1);
});

document.getElementById('arrow_right').addEventListener('click', function (e) {
  plusSlides(1);
});


function fileValidationLocal() {
  var fileInput = document.getElementById('local');
  var filePath = fileInput.value;

  var allowedExtensions = /(\.JSON)$/i;
   
  if (!allowedExtensions.exec(filePath)) {
      alert('O ficheiro selecionado não é .JSON');
      fileInput.value = '';
      return false;
  } 
}

function fileValidationRemote() {
  var fileInput = document.getElementById('remote');
  var filePath = fileInput.value;

  var allowedExtensions = /(\.JSON)$/i;
   
  if (!allowedExtensions.exec(filePath)) {
      alert('O ficheiro selecionado não é .JSON');
      fileInput.value = '';
      return false;
  }
}