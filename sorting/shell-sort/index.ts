import { arr } from '../utils';

const shellSorting = (arr: number[]) => {
  const length = arr.length;

  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < length; i++) {
      const current = arr[i];
      let j = i - gap;

      for (; j >= 0 && current < arr[j]; j -= gap) {
        arr[j + gap] = arr[j];
      }

      arr[j + gap] = current;
    }
  }

  return arr;
};

const res = shellSorting(arr);
console.log(res);
