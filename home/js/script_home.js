function toggleSearch() {
    var searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('expand');
  }

  var slideIndex = 0;
  showSlide();

  function showSlide() {
    var i;
    var slides = document.getElementsByClassName("card");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  function currentSlide(n) {
    slideIndex = n - 1;
    showSlide();
  }

  setInterval(showSlide, 5000);

  function enviarFormulario() {
    var campo1 = document.getElementById("campo1").value;
    var campo2 = document.getElementById("campo2").value;
    var campo3 = document.getElementById("campo3").value;
    var campo4 = document.getElementById("campo4").value;
    
    
    console.log("Campo 1: " + campo1);
    console.log("Campo 2: " + campo2);
    console.log("Campo 3: " + campo3);
    console.log("Campo 4: " + campo4);
  }