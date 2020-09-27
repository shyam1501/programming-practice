
const getPrimeNumber = (n) => {
    let count = 0
    for (var limit = 2; count < n; limit++) {
        var a = false;
        for (var i = 2; i <= limit; i++) {
           if (limit%i === 0 && i !== limit) {
              a = true;
           }
        }
        if (a === false) {
            count = count + 1;
            console.log(limit)
        }
     }
}

// getPrimeNumber = (n) => {
//     let count = 0;
//     let i = 0;
//     while(i != n) {
//         count = count + 1;
//         if(count % 2 != 0) {
//             console.log(count);
//             i = i + 1;
//         }
//     }
// }

getPrimeNumber(10);

