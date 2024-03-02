const downButton = document.querySelector('header .button');
const header = document.querySelector('header');
const headerBtn = document.querySelector('header');

window.addEventListener('scroll', (e) => {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 0) {
    header.classList.add('folded');
  }
});

downButton.addEventListener('click', (e) => {
  console.log('scroll button clicked')
  if (!document.querySelector('header.folded')) {
    header.classList.add('folded');
  } else header.classList.remove('folded');
  window.scrollTo({ top: 0, behavior: 'smooth' });
})