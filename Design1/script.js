const images = document.querySelectorAll('.image');
images.forEach(function(image, i) {
  image.addEventListener('click', function() {
    const isActive = this.classList.contains('only-hover');
    images.forEach(function(img) {
      img.classList.remove('only-hover');
    });
    if (i !== 0 & !isActive) {
      this.classList.add('only-hover');
    } else if (i == 0) {
      this.closest('.gallery').classList.toggle('hidden-gallery');
    }
  });
});
