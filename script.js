const downButton = document.querySelector('header .button');
const header = document.querySelector('header');
const headerBtn = document.querySelector('header');
const backToTop = document.querySelector('.back-to-top');

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