pow(2,10);
function pow(x,y) {

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

/*
let x = 2;
let y =10;

for (i = 0; i <=y; i++) {
if (i === 0) {
    console.log(1);}
if (i && i === 1) {
    console.log(x);}
if (i && i === 2) {
    var a = x*x;
    console.log(a);}

else { 
        pow (x,y);}

    function pow (x,y) {
    let b = a*x;
    console.log(b);
    a = b;}
}
*/
