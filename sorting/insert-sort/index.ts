import { arr } from '../utils';

const insertSorting = (arr: number[]) => {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    let j = i - 1;
    const current = arr[i];

    while (current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

const res = insertSorting(arr);
console.log(res);
