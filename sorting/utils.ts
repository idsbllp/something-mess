// export const arr = [40, 7, 3, 50, 4, 80, 1];
const num = 10000;
export const arr = Array(num).fill(1).map(() => {
  return Math.ceil(Math.random() * num);
});

// export const arr = [40, 7, 3, 50, 4, 80, 1, 9, 90, 5, 2, 60, 6, 8, 10, 70, 20, 30];
