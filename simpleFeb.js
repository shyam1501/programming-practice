getFebnocci = n => {
    let a,b,c;
    a = 1;
    b = 1;
    console.log(0);
    console.log(a);
    console.log(b);
    for( let i = 0; i < n - 2; i++){
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

getFebnocci(12);