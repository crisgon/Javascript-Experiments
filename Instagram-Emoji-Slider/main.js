const inputRange = document.querySelector('.rangeSlider');
const emoji = document.querySelector('.emoji');

inputRange.addEventListener('input', function (e) {
  document.documentElement.style.setProperty('--range', `${this.value}%`);
  showEmoji(this.value);
  moveEmoji(this.value);
});

window.addEventListener('mouseup', function () {
  hideEmoji();
  inputRange.classList.add('showResult');
});

function showEmoji(range) {
  if (range > 0) {
    return emoji.style.opacity = 1;
  }
  return emoji.style.opacity = 0;
}

function moveEmoji(range) {
  emoji.style.left = `${range - 15}%`;
  emoji.style.marginTop = `-${range / 15}%`;
  emoji.style.width = `${40 + range / 5}px`;
  emoji.style.height = `${40 + range / 5}px`;
}

function hideEmoji() {
  inputRange.disabled = true;
  emoji.classList.add('emoji-hide');
  emoji.style.opacity = 0;
  inputRange.classList.add('thumbChanged');
}