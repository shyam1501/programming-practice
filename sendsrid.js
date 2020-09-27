function containsObject(obj, list) {
  let count = 0;
  let i;
  let isExist = false;
  for (i = 0; i < list.length; i++) {
    if (list[i].lat === obj.lat && list[i].log === obj.log) {
      count ++;
      isExist = true
    }
  }
  return {isExist, count};
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const latA = a.lat;
  const latB = b.lat;

  let comparison = 0;
  if (latA > latB) {
    comparison = 1;
  } else if (latA < latB) {
    comparison = -1;
  }
  return comparison;
}

const arr = [
  { lat: 12.98, log: 13.67, x: 3.4 },
  { lat: 12.38, log: 13.27, x: 3.1 },
  { lat: 12.38, log: 13.27, x: 3.1 },
  { lat: 12.38, log: 13.27, x: 3.1 },

];

let newArray = [];



for(let i = 0; i < arr.length; i++) {
  const result = newArray.length ? containsObject(arr[i], newArray) : newArray.push(arr[i]);
  if(result.isExist) {
    for(j = 0; j < result.count; j++) {
      newArray.push(arr[i]);
    }
    i = i + result.count;
  }
  // else {
  //   newArray.splice(i,1);
  // }
}



// for (let i = 0; i < arr.length; i++) {
//   if (newArray.length && containsObject(arr[i], newArray).isExist) {
//     continue;
//   } else {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i].lat === arr[j].lat && arr[i].log === arr[j].log) {
//         newArray.push(arr[i]);
//       }
//     }
//   }
// }
console.log(newArray);
