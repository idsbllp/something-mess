const container = document.querySelector('.container') as HTMLElement;
const inner1 = document.querySelector('.inner1') as HTMLElement;
const inner2 = document.querySelector('.inner2') as HTMLElement;
const inner3 = document.querySelector('.inner3') as HTMLElement;

// container.addEventListener('mouseenter', e => {
//   console.log('logllp container mouseenter', e);
// });

// inner1.addEventListener('mouseenter', e => {
//   console.log('logllp inner1 mouseenter', e);
// });

// inner2.addEventListener('mouseenter', e => {
//   console.log('logllp inner2 mouseenter', e);
// });

// inner3.addEventListener('mouseenter', e => {
//   console.log('logllp inner3 mouseenter', e);
// });


container.addEventListener('mouseover', e => {
  console.log('logllp container mouseover', e.target, e.relatedTarget);
});

inner1.addEventListener('mouseover', e => {
  console.log('logllp inner1 mouseover', e);
  e.stopPropagation();
});

inner2.addEventListener('mouseover', e => {
  console.log('logllp inner2 mouseover', e);
  e.stopPropagation();
});

inner3.addEventListener('mouseover', e => {
  console.log('logllp inner3 mouseover', e);
  e.stopPropagation();
});

/*
container.addEventListener('pointerdown', e => {
  console.log('logllp container pointerdown', e);

  container.setPointerCapture(e.pointerId);
});

container.addEventListener('pointerup', e => {
  console.log('logllp container pointerup');
});


container.addEventListener('mousedown', e => {
  console.log('logllp container mousedown', e);
});

inner.addEventListener('mousedown', e => {
  console.log('logllp inner mousedown');
});

inner.addEventListener('pointerdown', e => {
  console.log('logllp inner pointerdown');
});


container.addEventListener('pointerup', e => {
  console.log('logllp container pointerup');
});

container.addEventListener('mouseup', e => {
  console.log('logllp container mouseup');
});


inner.addEventListener('mouseup', e => {
  console.log('logllp inner mouseup');
});

inner.addEventListener('pointerup', e => {
  console.log('logllp inner pointerup');
});
*/
