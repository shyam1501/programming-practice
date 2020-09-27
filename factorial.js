getFactorial = n => {
    if( n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * getFactorial(n-1);
    }
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

console.log(formatNumber(1423423432));

// const value = getFactorial(1);
// console.log(value);