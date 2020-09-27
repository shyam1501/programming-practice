
const arr = [0, 0, 1, 0, 0, 1, 0];

const getMinimumJump = () => {
    let jumps = 0;
    for(let i = 0; i < arr.length; i++) {
      if( i + 2 < arr.length && arr[i + 2] !== 1) {
          i = i + 1;
      }
      jumps = jumps + 1
    }
    return jumps - 1;
}

console.log(getMinimumJump());

