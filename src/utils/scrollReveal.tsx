import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();

export const revealFromBottom = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: true,
};
export const revealFromTop = {
  distance: '50px',
  origin: 'top',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: true,
};
export const revealFromLeft = {
  distance: '50px',
  origin: 'left',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: true,
};
export const revealFromRight = {
  distance: '50px',
  origin: 'right',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: true,
};
export const revealFromTopD4 = {
  distance: '50px',
  origin: 'right',
  duration: 1000,
  delay: 400,
  easing: 'ease-in-out',
  reset: false
};
export const revealFromBottomD4 = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  delay: 400,
  easing: 'ease-in-out',
  reset: false
};

export const initScrollReveal = (className: string, config: Object) => {
  if(typeof window === 'undefined') return;
  sr.reveal(className, config);
};