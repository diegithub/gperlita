let sliderIndex = 0;

showSlider(sliderIndex);

setInterval(function() {
  sliderIndex++;
  showSlider(sliderIndex);
}, 5000);


function showSlider(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length - 1) {
    sliderIndex = 0;
  } else if (n < 0) {
    sliderIndex = slides.length - 1;
  } else {
    sliderIndex = n;
  }

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[sliderIndex].classList.add('active');
  dots[sliderIndex].classList.add('active');
}

function nextSlider() {
  showSlider(sliderIndex + 1);
}

function prevSlider() {
  showSlider(sliderIndex - 1);
}

document.querySelector('.prev').addEventListener('click', prevSlider);
document.querySelector('.next').addEventListener('click', nextSlider);

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlider(index);
  });
});

