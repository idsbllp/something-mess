import { arr } from '../utils';

const swap = (arr: number[], index1: number, index2: number) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const partition = (arr: number[], firstIndex: number, lastIndex: number) => {
  const pivot = firstIndex;
  let leftIndex = firstIndex + 1;

  for (let i = leftIndex; i <= lastIndex; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, leftIndex++);
    }
  }

  swap(arr, pivot, leftIndex - 1);

  return leftIndex - 1;
};

const quickSorting = (arr: number[], firstIndex?: number, lastIndex?: number) => {
  const length = arr.length;
  firstIndex = firstIndex ?? 0;
  lastIndex = lastIndex ?? length - 1;

  if (firstIndex < lastIndex) {
    const partitionIndex = partition(arr, firstIndex, lastIndex);
    quickSorting(arr, firstIndex, partitionIndex - 1);
    quickSorting(arr, partitionIndex + 1, lastIndex);
  }

  return arr;
};

console.log(quickSorting(arr));
