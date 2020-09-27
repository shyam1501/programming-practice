const arr = [
  { lat: 12.98, log: 13.67, x: 3.4 },
  { lat: 12.98, log: 13.67, x: 3.4 },
  { lat: 12.98, log: 13.67, x: 3.7 },
  { lat: 12.38, log: 13.27, x: 3.1 },
  { lat: 12.37, log: 13.27, x: 3.1 },
  { lat: 12.37, log: 13.27, x: 3.1 },

];

function containsObject(obj, list) {
    let i;
    for (i = 0; i < list.length; i++) {
        if (list.length && list[i].lat === obj.lat && list[i].log === obj.log) {
            return true;
        }
    }
    return false;
  }

function getCount(obj, list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].lat === obj.lat && list[i].log === obj.log) {
      count++;
    }
  }
  return count;
}

const newArray = [];

for(let i = 0; i < arr.length; i++) {
    if(getCount(arr[i], arr) > 1 && !containsObject(arr[i], newArray)) {
        for(j = 0; j < getCount(arr[i], arr); j++) {
            newArray.push(arr[i]);
        }
    }
}

console.log(newArray)