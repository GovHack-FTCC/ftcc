const downButton = document.querySelector('header .button');
const header = document.querySelector('header');
const headerBtn = document.querySelector('header');
const backToTop = document.querySelector('.back-to-top');
const menuTop = document.querySelector('#menu-top');
const menuToggleTop = document.querySelector('#menu-top .menu-toggle');

window.addEventListener('scroll', (e) => {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 150) {
    header.classList.add('folded');
  }
  if (scrollHeight > 600) {
    document.body.classList.add('scrolling');
  } else {
    document.body.classList.remove('scrolling');
  }
});

downButton.addEventListener('click', (e) => {
  console.log('scroll button clicked')
  if (!document.querySelector('header.folded')) {
    header.classList.add('folded');
  } else header.classList.remove('folded');
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

menuToggleTop.addEventListener('click', (e) => {
  if (menuTop.classList.contains('menu-active')) {
    menuTop.classList.remove('menu-active');
  } else {
    menuTop.classList.add('menu-active');
  };
});


// Play audio testimonials
const testimonialAudio = document.querySelector('#testimonial-01');
const testimonialButton = document.querySelector('#testimonial01 .btn-play');
const testimonialBox = document.querySelector('#testimonial01');
let audioIsPlaying = false;

function playTestimonial() {
  testimonialAudio.play();
  audioIsPlaying = true;
  testimonialBox.classList.add('audio-playing');
  testimonialButton.classList.remove('bx-play-circle');
  testimonialButton.classList.add('bx-pause-circle');
}

function pauseTestimonial() {
  testimonialAudio.pause();
  audioIsPlaying = false;
  testimonialBox.classList.remove('audio-playing');
  testimonialButton.classList.add('bx-play-circle');
  testimonialButton.classList.remove('bx-pause-circle');
}

testimonialButton.addEventListener('click', (e) => {
  if (!audioIsPlaying) {
    playTestimonial();
  } else {
    pauseTestimonial();
  };
});
