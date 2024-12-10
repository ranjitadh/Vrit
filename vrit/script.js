const scrollContainer = document.querySelector('.scroll-container');


let isDragging = false;
let startY, scrollTop;

// Mouse down event
scrollContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  scrollContainer.classList.add('active');
  startY = e.pageY - scrollContainer.offsetTop;
  scrollTop = scrollContainer.scrollTop;
  scrollContainer.style.cursor = 'grabbing'; 
});

// Mouse move event
scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const y = e.pageY - scrollContainer.offsetTop;
  const walk = (y - startY) * 1.2;

  scrollContainer.scrollTop = scrollTop - walk;
});


scrollContainer.addEventListener('mouseup', () => {
  isDragging = false;
  scrollContainer.classList.remove('active');
  scrollContainer.style.cursor = 'grab'; 
});

scrollContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  scrollContainer.classList.remove('active');
  scrollContainer.style.cursor = 'grab'; 
});
