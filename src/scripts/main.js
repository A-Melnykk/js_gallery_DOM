'use strict';

const mainImage = document.getElementById('largeImg');
const gallery = document.getElementById('thumbs');

gallery.addEventListener('click', function (e) {
  event.preventDefault();

  let target = event.target;

  if (target.tagName === 'IMG') {
    target = target.parentNode;
  }

  if (target.tagName !== 'A') {
    return;
  }

  const newSrc = target.href;

  mainImage.src = newSrc;
});
