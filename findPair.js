

const getPairs = () => {
    let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20, 20, 30, 50, 60];
    arr = arr.sort();
    let pairs = 0;
    for(let i = 0; i < arr.length; i++) {
        let num = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
        if(num > 1) {
            pairs = pairs + Math.floor(num/2)
            i = arr.lastIndexOf(arr[i]);
        }
    }
    console.log(pairs);
}

getPairs();
