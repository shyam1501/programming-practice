// getSwappedArr = arr => {
//     for (let i = 0; i < arr.length - 2; i = i + 2) {
//         let temp = arr[i];
//         arr[i] = arr[i + 2];
//         arr[i + 2] = temp;
//         console.log(arr);
//     }
// };

getSwappedArr = arr => {
    let i = 0;
    let newArr = []
    while( i < arr.length - 2 ) {
        let temp = arr[i];
        arr[i] = arr[i + 2];
        arr[i + 2] = temp;
        i = i + 2;
    }
    return arr;
};



console.log(getSwappedArr([1, 2, 3, 4, 5, 6, 7]));