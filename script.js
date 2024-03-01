const downButton = document.querySelector('header .button');
const header = document.querySelector('header');

window.addEventListener('scroll', (e) => {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 0) {
    header.classList.add('folded');
  }
});

downButton.addEventListener('click', (e) => {
  header.classList.toggle('folded');
  window.scrollTo({ top: 0, behavior: 'smooth' });
})