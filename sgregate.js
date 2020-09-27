const arr = [0,1,0,0,1,1,0,0];

getSegregatedArray = () => {
    const segOneArray = arr.filter(ele => ele === 1);
    const segZeroArray = arr.filter(ele => ele === 0);
    return [...segZeroArray, ...segOneArray];
}

const segArray = getSegregatedArray();
console.log(segArray);

getNewSegragateArray = () => {
    let noOfZero = 0;
    let segArray = [];
    for( let i = 0; i < arr.length; i++) {
        if( arr[i] === 0) {
            noOfZero = noOfZero + 1;
        }
    }

    for(let i = 0; i < noOfZero; i++){
        segArray[i] = 0;
    }
    for(let i = noOfZero; i < arr.length; i++){
        segArray[i] = 1;
    }
    return segArray;
}

console.log(getNewSegragateArray());