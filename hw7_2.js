let str = 'Happiness Time Task Apple Wonderful Joyful'
var re = /\s\S{6,}[^Aa]+/
console.log(re.test(str));
console.log(str.match(re));