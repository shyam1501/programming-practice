
binerySearch = (arr, low, high) => {
    if(low > high) {
        return 0;
    }

    if( low === high) {
        return arr[low];
    }

    let mid = ((low + high + 1) / 2).toFixed();
    console.log(mid);

    if(arr[mid] > arr[mid + 1]) {
        return arr[mid + 1];
    }

    if(arr[mid - 1] > arr[mid]) {
        return arr[mid];
    }

    if(low < high && arr[mid] < arr[high] ) {
        return binerySearch(arr, low, mid - 1);
    }
    return binerySearch(arr, mid + 1, high);
}
const arrElement = [15, 16, 17, 18, 1, 2, 3, 6, 12, 13, 14]; 
const ele = binerySearch(arrElement, 0, arrElement.length - 1)

console.log(ele);