const carousel = document.querySelector('.docs_base');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('mousemove', drag);
carousel.addEventListener('mouseleave', dragEnd);

function dragStart(event) {
  isDragging = true;
  startPosition = event.clientX;
  previousTranslate = currentTranslate;
}

function drag(event) {
  if (isDragging) {
    const currentPosition = event.clientX;
    currentTranslate = previousTranslate + currentPosition - startPosition;
    setTranslate(currentTranslate);
  }
}

function dragEnd() {
  isDragging = false;
}

function setTranslate(translate) {
  carousel.style.transform = `translateX(${translate}px)`;
}
