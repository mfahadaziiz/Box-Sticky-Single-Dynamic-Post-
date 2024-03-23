// These line of code will make the box sticky with the given section. And when section ends then the sticky box will remain sticky and go above with the section.
<script>
document.addEventListener("DOMContentLoaded", function() {
  var section = document.querySelector('.main-content-post');
  var imageBox = document.querySelector('.image-boxx');
  var offset = imageBox.offsetTop - 100; // Adjusted to be 145px below the header
  var sectionHeight = section.offsetHeight;
  var imageBoxHeight = imageBox.offsetHeight;
  var stickyOffset = sectionHeight - imageBoxHeight;
  
  function makeSticky() {
    if (window.pageYOffset > offset) {
      imageBox.classList.add('sticky');
    } else {
      imageBox.classList.remove('sticky');
    }
  }
  
  window.addEventListener('scroll', function() {
    makeSticky();
    if (window.pageYOffset + window.innerHeight >= section.offsetTop + sectionHeight) {
      imageBox.style.position = 'absolute';
      imageBox.style.top = (stickyOffset + 500) + 'px'; // Adjusted to maintain the extra 112px
    } else if (window.pageYOffset >= offset) {
      imageBox.style.position = 'fixed';
      imageBox.style.top = '105px'; // Adjusted to be 145px below the header
    } else {
      imageBox.style.position = 'static';
    }
  });
});
</script>
<style>
.sticky {
  position: fixed;
  top: 145px;
  width: 300px;
  z-index: 1000; /* Adjust as needed */
}
</style>
