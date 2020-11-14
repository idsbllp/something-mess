import { arr } from '../utils';

const quickSorting = (arr: number[]) => {
  const res: number[] = [];

  const quickSortingImpl = (arr: number[], leftNum = 0) => {
    const length = arr.length;
    const pivot = arr[0];

    const left: number[] = [];
    const right: number[] = [];
    for (let i = 1; i < length; i++) {
      const num = arr[i];
      if (num > pivot) {
        right.push(num);
      } else {
        left.push(num);
      }
    }

    res[left.length + leftNum] = pivot;

    if (left.length <= 1) {
      left.length && ( res[leftNum] = left[0]);
    } else {
      quickSortingImpl(left, leftNum);
    }

    const minRightIndex = leftNum + left.length + 1;
    if (right.length <= 1) {
      right.length && (res[minRightIndex] = right[0]);
    } else {
      quickSortingImpl(right, minRightIndex);
    }
  };

  quickSortingImpl(arr);
  return res;
};

console.time('time');
quickSorting(arr);
console.timeEnd('time');
