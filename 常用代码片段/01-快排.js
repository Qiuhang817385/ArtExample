function quickSort (arr, low, high) {
  if (low < high) {
    let pivotpos = Partition(arr, low, high);
    quickSort(arr, low, pivotpos - 1);
    quickSort(arr, pivotpos + 1, high);
  }
}

function Partition (A, low, high) {
  let element = A[low];
  while (low < high) {
    while (low < high && A[high] >= element) {
      --high
    };
    A[low] = A[high]
    while (low < high && A[low] <= element) {
      ++low
    };
    A[high] = A[low]
  }
  A[low] = element;
  return low;
}
let arr = [23, 21, 45, 7645, 323, 4, 123, 87, 44];
quickSort(arr, 0, arr.length - 1);
console.log('arr', arr);

