function playSound(event) {
  console.log(event.keyCode);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;
  console.log(audio);
  console.log(key);

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});
// window.addEventListener('');