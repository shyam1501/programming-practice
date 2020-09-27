const arr = [1,2,3,4,5,1,3,3,4];

findNumber = () => {
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            return arr[i];
        }
    }
}

console.log(findNumber());
