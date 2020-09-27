// const arr = [1,2,3,4,5];

// rotateArray = n => {
//     const tempArr = [...arr.splice(n), ...arr.splice(0,n)];
//     console.log(tempArr);
// }

// rotateArray(1);

// const arr = [11,15,1,5,6,8,8,10];

// isPair = (sum) => {
//     let count = 0;
//     let j = 0;
//     let n = arr.length - 1;
//         while(j < n) {
//             if(arr[j] + arr[n] === sum){
//                 console.log(arr[j] + arr[n])
//                 console.log(arr[j], arr[n]);
//                 count = count + 1;
//                 j = j + 1;
//             }
//             else if(arr[j] + arr[n] < sum) {
//                 j++;
//             }
//             else {
//                 if(arr[j] < arr[n]){
//                     j = j + 1;
//                 }
//                 else {
//                     n--
//                 }
//             }

//         }

//     console.log(count);
// }

// isPair(16);

const arr = [1, 2, 3, 4, 5, 6];

reverseArray = (start, end) => {
  while(start < end ) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

leftRotate = (d) => {
  if(d === 0) {
    return
  }
  reverseArray(0,d-1);
  reverseArray(d, arr.length - 1);
  reverseArray(0, arr.length - 1);
}
leftRotate(1);
console.log(arr);

