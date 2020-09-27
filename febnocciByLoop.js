getFeb = n => {
    if( n === 0 || n === 1) {
        console.log(n);
        console.log(',')
    }
    else {
        const arr = [];
        for( let i = 0; i < n; i++) {
            if( i === 0 || i === 1) {
                console.log(i);
                arr.push(i);
            }
            else {
                arr.push(arr[i - 2] + arr[ i - 1 ]);
                console.log(arr[i - 1] + arr[i - 2]);
            }
            
        }
    }
    
}

getFeb(9);