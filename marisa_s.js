const image = document.querySelector('#marisa');
const sound = document.querySelector('#marisa_s');

image.addEventListener('click', () => {
  sound.currentTime = 0;
  sound.play();
});

