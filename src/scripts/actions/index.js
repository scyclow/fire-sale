export const COUNT = 'COUNT';
export const RESIZE_WINDOW = 'RESIZE_WINDOW';

export const count = (bleh) => ({
  type: COUNT,
  bleh
});

export const resizeWindow = (width) => ({
  type: RESIZE_WINDOW,
  width
});
