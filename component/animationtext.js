if (typeof window === 'object') {
  // Check if document is finally loaded
  function reveal() {
    var reveals = document.getElementsByClassName('section2');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
   function reveal1() {
    var reveals1 = document.getElementsByClassName('image-left');
  
    for (var i = 0; i < reveals1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals1[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals1[i].classList.add("active");
      } else {
        reveals1[i].classList.remove("active");
      }
    }
  }
  function reveal2() {
    var reveals1 = document.getElementsByClassName('wrapper');
  
    for (var i = 0; i < reveals1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals1[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals1[i].classList.add("active");
      } else {
        reveals1[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll",reveal1);
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", reveal2);
}
