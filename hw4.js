let count = 7;
let odd;
let even;
function checkProbabilityTheory(count) {
odd=0; //парні
even=0; // непарні
for (i=1; i<=count; i++) {
var rnd = Math.random();
rnd *= 1000;
//console.log(rnd)
rnd = Math.round(rnd);
if (rnd >= 100) {
    if (rnd %2 === 0) {
        odd +=1;
    }
    if (rnd %2 === 1) {
        even +=1;
    }    
    console.log(rnd);
    //console.log(odd);
    //console.log(even);

}
}
}

checkProbabilityTheory(count);

 let oddPercent = Math.round(odd/count*100);
    console.log('odd ' + oddPercent + '%');
let evenPercent = Math.round(even/count*100);
    console.log('even ' + evenPercent + '%');

console.log("odd % evel is about 50%50 " + (oddPercent == evenPercent));

