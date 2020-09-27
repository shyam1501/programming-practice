const arr = [4, 2, 3, 1, 5, 7, 3, 11, 21, 17];

getMaxSortedArr = () => {
  let count = 0;
  let sortedArrayCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      sortedArrayCount = sortedArrayCount + 1;
    } else {
      count = Math.max(count, sortedArrayCount);
      sortedArrayCount === 0;
    }
  }
  console.log(count);
};

getMaxSortedArr();
