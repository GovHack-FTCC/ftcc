const downButton = document.querySelector('header .button');
const header = document.querySelector('header');

window.addEventListener('scroll', (e) => {
  const scrollHeight = window.scrollY;

  console.log(scrollHeight)
  
  if (scrollHeight > 400) {
    document.body.classList.add('scrolling');
  } else if (scrollHeight <= 400) {
    document.body.classList.remove('scrolling');
  }
});

downButton.addEventListener('click', (e) => {
  console.log('hey')
  header.classList.toggle('folded');
  window.scrollTo({ top: 0, behavior: 'smooth' });
})