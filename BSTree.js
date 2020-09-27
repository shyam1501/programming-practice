// const arr = [2, 3, 4, 10, 40];

// getElementUsingBinarySearch = (low, high, value) => {
//     while (low < high) {
//             const mid = ((low + high) / 2).toFixed();
//         if (arr[mid] === value) {
//             return mid;
//         }

//         if (arr[mid] < value) {
//             return getElementUsingBinarySearch(arr, mid + 1, high, value)
//         }

//             return getElementUsingBinarySearch(arr, low, mid - 1, value)

//     }
    
// }

// console.log(getElementUsingBinarySearch(0, arr.length - 1, 40));


const str = 'image/png';

const type = str.split('/');
const imageType = type[1];

console.log(imageType);