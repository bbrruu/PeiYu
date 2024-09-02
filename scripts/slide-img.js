const images = document.querySelectorAll('.slider-image');
let currentIndex = 0; // Index追蹤是哪張圖片

function showImage(index) {
  const offset = -index * 100;
  document.querySelector('.slider-image-container').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.left-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  showImage(currentIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
});
