function quickSort (Arr, start, end) {
  let mid = Arr[start];
  let low = start;
  let high = end;

  if (low >= high) return;
  while (low < high) {
    while (low < high && Arr[high] >= mid) {
      high--
    };
    Arr[low] = Arr[high]
    while (low < high && Arr[low] <= mid) {
      low++
    };
    Arr[high] = Arr[low]
  }

  Arr[low] = mid;

  quickSort(Arr, start, low - 1);
  quickSort(Arr, low + 1, end);
}
let arr = [23, 21, 45, 7645, 323, 4, 123, 87, 44];
quickSort(arr, 0, arr.length - 1);
console.log(arr);