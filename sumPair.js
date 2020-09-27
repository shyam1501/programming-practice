const arr = [11, 15, 38, 26, 9, 20, 15];

findPairOfSum = (sum) => {
    for(let i = 0; i < arr.length; i++) {
        let temp = sum - arr[i];
        if(arr.indexOf(temp) !== -1 && i < arr.indexOf(temp)) {
            console.log(`pair is ${arr[i]}, ${temp}`);
        }
    }
}

findPairOfSum(35);