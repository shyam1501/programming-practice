const arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

getMaxSum = () => {
    let sum = 0;
    const maxValue = Math.max(...arr)
    const index = arr.indexOf(maxValue);
    const newArr = [...arr.splice(index + 1), ...arr.splice(0, index + 1)]
    console.log(newArr);
    for(let i = 0; i < newArr.length; i++) {
        sum = sum + (i * newArr[i]);
    }
    console.log(sum);
}


getMaxSum();