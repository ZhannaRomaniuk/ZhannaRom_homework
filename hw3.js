pow(2,10);
function pow(x,y) {
if (Number.isInteger(x), Number.isInteger(y)) {
    if (y===0) {
        console.log(1);}
    if (y===1) {
        console.log(x);}
    else {
        a=x;
        for (i=2;i<=y ;i++) {
        a= a*x;
        }
console.log(a)
    }
}
else {
    console.log('not a number')
}
}
