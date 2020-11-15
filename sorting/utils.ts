// export const arr = [40, 7, 1, 3, 40, 1, 50, 4, 80, 1];
const num = 1000;
export const arr = Array(num).fill(1).map(() => {
  return Math.ceil(Math.random() * num);
});

export const swap = (arr: number[], index1: number, index2: number) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
